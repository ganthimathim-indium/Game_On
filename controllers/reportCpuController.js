/* eslint-disable consistent-return */
/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable import/extensions */
import conn from '../db-connection.js';
// Our report logic starts here
const cpuReport = async (req, res) => {
  const requestdRole = res.apiuser.user_role;

  const authorisedRoles = ['user', 'admin', 'super admin'];
  // average calculation
  function averageArray(ar) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const numCount = ar.length;
    const sum = ar.reduce(reducer);
    return sum / numCount;
  }
  // const x = conn.pool.query('SELECT * FROM roles WHERE level=1 ', (errr, result) => result);
  // console.log(x);
  if (authorisedRoles.includes(requestdRole)) {
    // Get user input
    const {
      results, sessionID,
    } = req.body;
    const cpu_data = [];
    const cpu_record_time = [];
    const cpu_deviation = [];
    /// /////////////////////
    const memory_usage_data = [];
    const memory_record_time = [];
    const memory_deviation = [];
    /// //////////////////////////
    const power_usage_data = [];
    const power_deviation = [];
    const power_record_time = [];
    /// //////////////////////////
    const gpu_usage_data = [];
    const gpu_deviation = [];
    const gpu_record_time = [];
    /// //////////////////////////
    const upload_data_usage = [];
    const upload_data_deviation = [];
    const upload_data_record_time = [];
    /// ///////////////////////////
    const download_data_usage = [];
    const download_data_deviation = [];
    const download_data_record_time = [];
    /// ////////////////////////////
    const cpucores_app_usage = [];
    const cpucores_app_deviation = [];
    const cpucores_app_record_time = [];
    /// /////////////////////////////
    const apppower_app_usage = [];
    const apppower_app_deviation = [];
    const apppower_app_record_time = [];
    /// //////////////////////////////
    const avgfps_app_usage = [];
    const avgfps_app_deviation = [];
    const avgfps_app_record_time = [];

    results.forEach((element) => {
      cpu_data.push(parseFloat(Number(element.cpu_app_usage)));
      cpu_deviation.push(element.cpu_deviation);
      if (element.cpu_time === '') {
        cpu_record_time.push('00:00:00');
      } else { cpu_record_time.push(element.cpu_time); }
      /// ///////////////////////////////////////
      memory_usage_data.push(parseFloat(Number(element.memory_app_useage)));
      memory_deviation.push(element.memory_app_deviation);
      if (element.memory_app_time === '') {
        memory_record_time.push('00:00:00');
      } else { memory_record_time.push(element.memory_app_time); }
      /// /////////////////////////////////////////
      power_usage_data.push(parseFloat(Number(element.power_app_useage)));
      power_deviation.push(element.power_app_deviation);
      if (element.power_app_time === '') {
        power_record_time.push('00:00:00');
      } else { power_record_time.push(element.power_app_time); }
      /// ///////////////////////////////////////////
      gpu_usage_data.push(parseFloat(Number(element.gpu_app_useage)));
      gpu_deviation.push(element.gpu_app_deviation);
      if (element.gpu_app_time === '') {
        gpu_record_time.push('00:00:00');
      } else { gpu_record_time.push(element.gpu_app_time); }
      /// ///////////////////////////////////////////
      upload_data_usage.push(parseFloat(Number(element.uploaddata_app_useage)));
      upload_data_deviation.push(element.uploaddata_app_deviation);
      if (element.uploaddata_app_time === '') {
        upload_data_record_time.push('00:00:00');
      } else { upload_data_record_time.push(element.uploaddata_app_time); }
      /// ////////////////////////////////////////////
      download_data_usage.push(parseFloat(Number(element.downloadddata_app_useage)));
      download_data_deviation.push(element.downloadddata_app_deviation);
      if (element.downloadddata_app_time === '') {
        download_data_record_time.push('00:00:00');
      } else { download_data_record_time.push(element.downloadddata_app_time); }
      /// /////////////////////////////////////////////
      cpucores_app_usage.push(parseFloat(Number(element.cpucores_app_useage)));
      cpucores_app_deviation.push(element.cpucores_app_deviation);
      if (element.cpucores_app_time === '') {
        cpucores_app_record_time.push('00:00:00');
      } else { cpucores_app_record_time.push(element.cpucores_app_time); }
      /// //////////////////////////////////////////////
      apppower_app_usage.push(parseFloat(Number(element.apppower_app_useage)));
      apppower_app_deviation.push(element.apppower_app_deviation);
      if (element.apppower_app_time === '') {
        apppower_app_record_time.push('00:00:00');
      } else { apppower_app_record_time.push(element.apppower_app_time); }
      /// ////////////////////////////////////////////////
      avgfps_app_usage.push(parseFloat(Number(element.avgfps_app_useage)));
      avgfps_app_deviation.push(element.avgfps_app_deviation);
      if (element.avgfps_app_time === '') {
        avgfps_app_record_time.push('00:00:00');
      } else { avgfps_app_record_time.push(element.avgfps_app_time); }
    });
    // const { sessionID } = req.session;
    const userCheck = 'SELECT * from report_basicinfo WHERE session_id=$1';
    conn.pool.query(userCheck, [sessionID], async (err, result) => {
      if (err) {
        return console.log('report controller error', err);
      }
      if (result.rowCount === 0) {
        res.end();
        return console.log('session does not exists');
      }

      const created_on = new Date();
      // try {
      const cpuQuery = `INSERT INTO cpu_report(session_id, cpu_app_usage, 
        created_at,recorded_time,cpu_deviation,average_value) VALUES ($1,$2,$3,$4,$5,$6)`;
      const memoryUsageQuery = `INSERT INTO memory_report(session_id,avg_memory_usage,
        created_at,recorded_time,memory_deviation,average_value) VALUES ($1,$2,$3,$4,$5,$6)`;
      const powerUsageQuery = `INSERT INTO power_usage_report(session_id,avg_power_usage,
        created_at,recorded_time,power_deviation,average_value) VALUES ($1,$2,$3,$4,$5,$6)`;
      const gpuUsageQuery = `INSERT INTO gpu_usage_report(session_id,avg_gpu_usage,
        created_at,recorded_time,gpu_deviation,average_value) VALUES ($1,$2,$3,$4,$5,$6)`;
      const uploadDataUsageQuery = `INSERT INTO uploaddata_usage_report(session_id, uploaddata_app_usage,
         created_at, recorded_time,  uploaddata_app_deviation, average_value)  VALUES ($1,$2,$3,$4,$5,$6)`;
      const downloadDataUsageQuery = `INSERT INTO downloadddata_app_usage(session_id, downloadddata_app_uage,
        created_at, recorded_time,  downloadddata_app_deviation, average_value)  VALUES ($1,$2,$3,$4,$5,$6)`;
      const cpucoresAppUsageQuery = `INSERT INTO cpucores_app_usage(session_id,cpucores_app_usage, created_at,
         recorded_time, cpucores_app_deviation,  averae_value) VALUES ($1,$2,$3,$4,$5,$6)`;
      const apppowerAppUsageQuery = `INSERT INTO public.apppower_usage_report(session_id,apppower_app_useage,
         created_at, recorde_time, apppower_app_deviation, average_value) VALUES ($1,$2,$3,$4,$5,$6)`;
      const avgfpsAppUsageQuery = `INSERT INTO public.avgfps_app_usage(session_id,vgfps_app_usage, created_at,
         recorded_time, vgfps_app_deviation, average_value) VALUES ($1,$2,$3,$4,$5,$6)`;
      /// ****************************************************************************************************
      conn.pool.query(cpuQuery, [sessionID, cpu_data, created_on, cpu_record_time, cpu_deviation,
        parseFloat(averageArray(cpu_data)).toFixed(2)], (error) => {
        if (error) {
          throw error;
        }
      });
      conn.pool.query(memoryUsageQuery, [sessionID, memory_usage_data, created_on, memory_record_time,
        memory_deviation, parseFloat(averageArray(memory_usage_data)).toFixed(2)], (error) => {
        if (error) {
          throw error;
        }
      });
      conn.pool.query(
        powerUsageQuery,
        [sessionID, power_usage_data, created_on,
          power_record_time, power_deviation, parseFloat(averageArray(power_usage_data)).toFixed(2)],
        (error) => {
          if (error) {
            throw error;
          }
        },
      );
      conn.pool.query(gpuUsageQuery, [sessionID, gpu_usage_data, created_on, gpu_record_time,
        gpu_deviation, parseFloat(averageArray(gpu_usage_data)).toFixed(2)], (error) => {
        if (error) {
          throw error;
        }
      });
      conn.pool.query(uploadDataUsageQuery, [sessionID, upload_data_usage, created_on,
        upload_data_record_time,
        upload_data_deviation, parseFloat(averageArray(upload_data_usage)).toFixed(2)], (error) => {
        if (error) {
          throw error;
        }
      });
      conn.pool.query(downloadDataUsageQuery, [sessionID, download_data_usage, created_on,
        download_data_record_time,
        download_data_deviation, parseFloat(averageArray(download_data_usage)).toFixed(2)], (error) => {
        if (error) {
          throw error;
        }
      });
      conn.pool.query(cpucoresAppUsageQuery, [sessionID, cpucores_app_usage, created_on,
        cpucores_app_record_time,
        cpucores_app_deviation, parseFloat(averageArray(cpucores_app_usage)).toFixed(2)], (error) => {
        if (error) {
          throw error;
        }
      });
      conn.pool.query(apppowerAppUsageQuery, [sessionID, apppower_app_usage, created_on,
        apppower_app_record_time,
        apppower_app_deviation, parseFloat(averageArray(apppower_app_usage)).toFixed(2)], (error) => {
        if (error) {
          throw error;
        }
      });
      conn.pool.query(avgfpsAppUsageQuery, [sessionID, avgfps_app_usage, created_on,
        avgfps_app_record_time,
        avgfps_app_deviation, parseFloat(averageArray(avgfps_app_usage)).toFixed(2)], (error) => {
        if (error) {
          throw error;
        }
      });

      process.on('uncaughtException', (error) => {
        // if(error.message === "")

        console.error('error in inserting metrices', error);
      });
      // } catch {
      //   // process.on('uncaughtException', (error) => console.error('cannot insert metrices', error));
      //   console.error('cannot insert metrices');
      //   res.send('error while insrting metrices');
      //   res.end();
      // }

      return res.status(200).json({
        status: 'true',
        session_id: sessionID.toString(),
        date: (`${created_on.getDate()}:${created_on.getMonth() + 1}:${created_on.getFullYear()}`),
        start_time: (`${result.rows[0].created_at.getHours()}:${result.rows[0].created_at.getMinutes() + 1}:
        ${result.rows[0].created_at.getSeconds()}`),
        end_time: (`${created_on.getHours()}:${created_on.getMinutes() + 1}:${created_on.getSeconds()}`),
        total_duraton: global.totalDuration,

        // message: 'Device metrics added',
        average_values: {
          cpu_usage: (averageArray(cpu_data)).toFixed(2).toString(),
          memory_usage: (averageArray(memory_usage_data)).toFixed(2).toString(),
          power_usage: (averageArray(power_usage_data)).toFixed(2).toString(),
          gpu_usage: (averageArray(gpu_usage_data)).toFixed(2).toString(),
          upload_data_usage: (averageArray(upload_data_usage)).toFixed(2).toString(),
          download_data_usage: (averageArray(download_data_usage)).toFixed(2).toString(),
          cpucores_app_usage: (averageArray(cpucores_app_usage)).toFixed(2).toString(),
          apppower_app_usage: (averageArray(apppower_app_usage)).toFixed(2).toString(),
          avgfps_app_usage: (averageArray(avgfps_app_usage)).toFixed(2).toString(),
        },

      });
    });
  } else {
    return res.status(401).json({
      status: 'false',
      message: 'Sorry, User role is not authorised.',
    });
  }
};
export default cpuReport;
