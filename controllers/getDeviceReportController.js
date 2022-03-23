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
    const sql = 'SELECT DISTINCT UD.device_id,device_name,app_name,CU.average_value as cpu_average_value, GU.average_value as gpu_average_value,MU.average_value as memmory_average_value,PU.average_value as power_average_value FROM report_basicinfo UD  JOIN cpu_report CU ON  UD.session_id = CU.session_id  JOIN gpu_usage_report GU ON  CU.session_id = GU.session_id  JOIN memory_report MU ON  GU.session_id = MU.session_id  JOIN power_usage_report PU ON  MU.session_id = PU.session_id WHERE UD.user_id = $1 ';
    conn.pool.query(sql, [userId], (error, results) => {
      if (error) {
        res.status(500);
        throw error;
      }
      if (results.rowCount === 0) {
        return res.status(404).json({
          status: false,
          message: 'record not found',
        });
      }
      res.status(200).json({
        status: true,
        data: results.rows,
      });
      return res.status('ok');
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
    const sql = 'SELECT DISTINCT UD.device_id,device_name,app_name,CU.average_value as cpu_average_value, GU.average_value as gpu_average_value,MU.average_value as memmory_average_value,PU.average_value as power_average_value FROM report_basicinfo UD  JOIN cpu_report CU ON  UD.session_id = CU.session_id  JOIN gpu_usage_report GU ON  CU.session_id = GU.session_id  JOIN memory_report MU ON  GU.session_id = MU.session_id  JOIN power_usage_report PU ON  MU.session_id = PU.session_id WHERE UD.user_id = $1  AND UD.device_id = $2;';
    conn.pool.query(sql, [userId, deviceId], (error, results) => {
      if (error) {
        res.status(500);
        throw error;
      }
      if (results.rowCount === 0) {
        return res.status(404).json({
          status: false,
          message: 'record not found',
        });
      }
      res.status(200).json({
        status: true,
        data: results.rows,
      });
      return res.status('ok');
    });
  } else {
    res.status(401).json({
      status: false,
      message: 'Sorry, User role is not authorised.',
    });
  }
};

export { getDevices, getDevice };
