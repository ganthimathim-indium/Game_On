/* eslint-disable no-underscore-dangle */
/* eslint-disable consistent-return */
/* eslint-disable import/extensions */
import XLSX from 'xlsx';
import conn from '../db-connection.js';
import generateReport from '../helper/createJsonData.js';

const getReport = async (req, res) => {
  const {
    sessionID,
  } = req.query;

  const requestdRole = res.apiuser.user_role;
  // const userID = res.apiuser.user_id;
  const authorisedRoles = ['user', 'admin', 'super admin'];

  if (authorisedRoles.includes(requestdRole)) {
    const sql = `SELECT DISTINCT  UD.session_id,UD.device_id,device_name,app_name,version_name,
    total_duration,(UD.created_at::timestamp::date)::text,
    CU.average_value as cpu_average_usage,
    GU.average_value as gpu_average_usage,
    MU.average_value as memory_average_usage,
    PU.average_value as power_average_usage,
    DD.average_value as download_data_usage_average,
    UDD.average_value as upload_data_usage_average, 
    CCU.averae_value as cpu_cores_usage_average,
    APU.average_value as app_power_usage_average, 
    AFV.average_value as average_fps_value,
    
  
    RU.name as user_name,email,
    
    CU.cpu_app_usage,
    CU.recorded_time as cpu_usage_time,
    CU.cpu_deviation as cpu_deviation,
    
    GU.avg_gpu_usage,
    GU.recorded_time as GPU_usage_time,
    GU.gpu_deviation as gpu_deviation,
    
    MU.avg_memory_usage,
    MU.recorded_time as memory_usage_time,
    MU.memory_deviation as memory_deviation,
    
    PU.avg_power_usage,
    PU.recorded_time as power_usage_time ,
    PU.power_deviation as power_deviation,
    
    UDD.uploaddata_app_usage,
    UDD.recorded_time as upload_data_usage_time,
    UDD.uploaddata_app_deviation as upload_data_app_deviation,
    
    DD.downloadddata_app_uage,
    DD.recorded_time as download_data_usage_time,
    DD.downloadddata_app_deviation as download_data_app_deviation,
    
    CCU.cpucores_app_usage,
    CCU.recorded_time as cpucores_app_usage_time,
    CCU.cpucores_app_deviation as cpu_cores_app_deviation,
    
    APU.apppower_app_useage,
    APU.recorde_time as apppower_app_usage_time,
    APU.apppower_app_deviation as ap_ppower_app_deviation,
    
    AFV.vgfps_app_usage as averagefps_app_usage,
    AFV.recorded_time as average_fps_app_usage_time,
    AFV.vgfps_app_deviation as average_fps_app_deviation   
    
    FROM register RU FULL JOIN report_basicinfo UD ON UD.user_id = RU.id 
     FULL JOIN cpu_report CU ON  UD.session_id = CU.session_id 
     FULL JOIN gpu_usage_report GU ON  CU.session_id = GU.session_id 
     FULL JOIN memory_report MU ON  GU.session_id = MU.session_id 
     FULL JOIN power_usage_report PU ON  MU.session_id = PU.session_id  
     FULL JOIN downloadddata_app_usage DD ON PU.session_id = DD.session_id 
     FULL JOIN uploaddata_usage_report UDD ON DD.session_id = UDD.session_id
     FULL JOIN cpucores_app_usage CCU ON UDD.session_id = CCU.session_id
     FULL JOIN apppower_usage_report APU ON CCU.session_id = APU.session_id 
     FULL JOIN avgfps_app_usage AFV ON APU.session_id=AFV.session_id WHERE UD.session_id = $1`;
    // IN (select session_id FROM public.test_sessions WHERE created_at::date BETWEEN $1 AND $2 AND
    // session_user_id = $3)`;

    conn.pool.query(
      sql,
      [sessionID],
      (error, results) => {
        if (error) {
          return res.json({
            message: error.message,
            status: 'false',
          });
        }
        if (results.rowCount === 0) {
          return res.status(404).json({
            status: 'false',
            message: 'report not found',
          });
        }

        const data = generateReport((results.rows[0]));

        const workSheet = XLSX.utils.json_to_sheet(data);
        const workBook = XLSX.utils.book_new();

        XLSX.utils.book_append_sheet(workBook, workSheet, 'students');

        // Binary string
        XLSX.write(workBook, { bookType: 'xlsx', type: 'binary' });

        const fileName = 'Report.xlsx';
        XLSX.writeFile(workBook, fileName);

        // const stream = fs.createReadStream(fileName);
        // // create read stream
        // stream.pipe(res);
        return res.send(`/home/indium/node_examples/Game_On/${fileName}`);
      },
    );
  } else {
    return res.status(401).json({
      status: false,
      message: 'Sorry, User role is not authorised.',
    });
  }
};

export default getReport;
