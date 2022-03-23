/* eslint-disable import/extensions */
import conn from '../db-connection.js';

// get devices
const getHistory = async (req, res) => {
  const requestdRole = res.apiuser.user_role;
  const userID = res.apiuser.user_id;
  const authorisedRoles = ['user', 'admin', 'super admin'];
  // const x = conn.pool.query('SELECT * FROM roles WHERE level=1 ', (errr, result) => result);
  // console.log(x);
  // console.log(("b" + "a" + + "a" + "a").toLowerCase());
  if (authorisedRoles.includes(requestdRole)) {
    const {
      fromDate, toDate,
    } = req.query;
    const sql = 'SELECT DISTINCT UD.device_id,device_name,android_version,UD.session_id,app_name,CU.average_value as cpu_average_value, GU.average_value as gpu_average_value,MU.average_value as memmory_average_value,PU.average_value as power_average_value,RU.name as user_name,email  FROM register RU FULL JOIN report_basicinfo UD ON UD.user_id = RU.id  FULL JOIN cpu_report CU ON  UD.session_id = CU.session_id FULL JOIN gpu_usage_report GU ON  CU.session_id = GU.session_id FULL JOIN memory_report MU ON  GU.session_id = MU.session_id FULL JOIN power_usage_report PU ON  MU.session_id = PU.session_id WHERE UD.session_id IN (select session_id FROM public.test_sessions WHERE created_at::date BETWEEN $1 AND $2 AND session_user_id = $3)';
    conn.pool.query(sql, [fromDate, toDate, userID], (error, results) => {
      if (error) {
        res.status(500).json({
          status: false,
        });
        throw error;
      }
      if (results.rowCount === 0) {
        return res.status(404).json({
          status: false,
          message: 'records not found',
        });
      }
      res.status(200).json({
        status: true,
        data: results.rows,
      });
      return res.status('ok');
    });
  } else {
    return res.status(401).json({
      status: false,
      message: 'Sorry, User role is not authorised.',
    });
  }
  return res.status('ok');
};

export default getHistory;
