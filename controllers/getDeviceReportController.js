/* eslint-disable prefer-destructuring */
/* eslint-disable import/extensions */
import conn from '../db-connection.js';

// get devices
const getDevices = async (req, res) => {
  const requestdRole = res.apiuser.user_role;
  const authorisedRoles = ['user', 'admin', 'super admin'];
  // const x = conn.pool.query('SELECT * FROM roles WHERE level=1 ', (errr, result) => result);
  // console.log(x);
  if (authorisedRoles.includes(requestdRole)) {
    const {
      userId,
    } = req.query;
    const sql = 'SELECT UD.device_id,device_name,app_name,CU.cpu_app_usage,GU.avg_gpu_usage,MU.avg_memory_usage,PU.avg_power_usage FROM report_basicinfo UD FULL JOIN cpu_report CU ON  UD.session_id = CU.session_id FULL JOIN gpu_usage_report GU ON  CU.session_id = GU.session_id FULL JOIN memory_report MU ON  GU.session_id = MU.session_id FULL JOIN power_usage_report PU ON  MU.session_id = PU.session_id WHERE UD.user_id = $1';
    conn.pool.query(sql, [userId], (error, results) => {
      if (error) {
        res.status(500);
        throw error;
      }
      if (results.rowCount === 0) {
        res.status(404);
      }
      res.status(200).json(results.rows);
    });
  } else {
    res.status(401).json({
      status: false,
      message: 'Sorry, User role is not authorised.',
    });
  }
};

// get a particular device
const getDevice = async (req, res) => {
  const requestdRole = res.apiuser.user_role;
  const authorisedRoles = ['user', 'admin', 'super admin'];
  // const x = conn.pool.query('SELECT * FROM roles WHERE level=1 ', (errr, result) => result);
  // console.log(x);
  if (authorisedRoles.includes(requestdRole)) {
    const {
      userId, deviceId,
    } = req.query;
    if (!(userId && deviceId)) { res.json({ message: 'user id and device id both are needed to search a device' }); }
    const sql = 'SELECT UD.device_id,device_name,app_name,CU.cpu_app_usage,GU.avg_gpu_usage,MU.avg_memory_usage,PU.avg_power_usage FROM report_basicinfo UD FULL JOIN cpu_report CU ON  UD.session_id = CU.session_id FULL JOIN gpu_usage_report GU ON  CU.session_id = GU.session_id FULL JOIN memory_report MU ON  GU.session_id = MU.session_id FULL JOIN power_usage_report PU ON  MU.session_id = PU.session_id WHERE UD.user_id = $1  AND UD.device_id = $2;';
    conn.pool.query(sql, [userId, deviceId], (error, results) => {
      if (error) {
        res.status(500);
        throw error;
      }
      res.status(200).json(results.rows);
    });
  } else {
    res.status(401).json({
      status: false,
      message: 'Sorry, User role is not authorised.',
    });
  }
};

export { getDevices, getDevice };
