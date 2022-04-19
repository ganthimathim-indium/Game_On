/* eslint-disable consistent-return */
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
    const sql = 'SELECT DISTINCT UD.device_id,device_name,app_name,version_name,UD.session_id,CU.average_value as cpu_average_usage,GU.average_value as gpu_average_usage,MU.average_value as memory_average_usage,PU.average_value as power_average_usage,RU.name as user_name,email FROM register RU FULL JOIN report_basicinfo UD ON UD.user_id = RU.id  FULL JOIN cpu_report CU ON  UD.session_id = CU.session_id FULL JOIN gpu_usage_report GU ON  CU.session_id = GU.session_id FULL JOIN memory_report MU ON  GU.session_id = MU.session_id FULL JOIN power_usage_report PU ON  MU.session_id = PU.session_id WHERE UD.user_id = $1 ';
    conn.pool.query(sql, [Number(userId)], (error, results) => {
      if (error) {
        return res.json({
          message: error,
          status: 'false',
        });
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
    return res.status(401).json({
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
    if (!userId || !deviceId) {
      return res.status(400).json({
        message: 'userId and deviceId are required',
        status: false,
      });
    }
    if (!(userId && deviceId)) { res.json({ message: 'user id and device id both are needed to search a device' }); }
    const sql = 'SELECT DISTINCT UD.device_id,device_name,app_name,version_name,UD.session_id,CU.average_value as cpu_average_usage,GU.average_value as gpu_average_usage,MU.average_value as memory_average_usage,PU.average_value as power_average_usage,RU.name as user_name,email,CU.cpu_app_usage,CU.recorded_time as cpu_usage_time, GU.avg_gpu_usage,GU.recorded_time as GPU_usage_time,MU.avg_memory_usage,MU.recorded_time as memory_usage_time,PU.avg_power_usage,PU.recorded_time as power_usage_time FROM register RU FULL JOIN report_basicinfo UD ON UD.user_id = RU.id  FULL JOIN cpu_report CU ON  UD.session_id = CU.session_id FULL JOIN gpu_usage_report GU ON  CU.session_id = GU.session_id FULL JOIN memory_report MU ON  GU.session_id = MU.session_id FULL JOIN power_usage_report PU ON  MU.session_id = PU.session_id WHERE UD.user_id = $1  AND UD.device_id = $2;';
    conn.pool.query(sql, [userId, deviceId], (error, results) => {
      if (error) {
        return res.json({
          message: error,
          status: 'false',
        });
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
    return res.status(401).json({
      status: false,
      message: 'Sorry, User role is not authorised.',
    });
  }
};

const getSessions = async (req, res) => {
  const requestdRole = res.apiuser.user_role;
  const authorisedRoles = ['user', 'admin', 'super admin'];
  // const x = conn.pool.query('SELECT * FROM roles WHERE level=1 ', (errr, result) => result);
  // console.log(x);
  if (authorisedRoles.includes(requestdRole)) {
    const {
      userId, deviceId, sessionID,
    } = req.query;
    const sql = 'SELECT DISTINCT UD.device_id,device_name,app_name,version_name,UD.session_id,CU.average_value as cpu_average_usage,GU.average_value as gpu_average_usage,MU.average_value as memory_average_usage,PU.average_value as power_average_usage,RU.name as user_name,email,CU.cpu_app_usage,CU.recorded_time as cpu_usage_time, GU.avg_gpu_usage,GU.recorded_time as GPU_usage_time,MU.avg_memory_usage,MU.recorded_time as memory_usage_time,PU.avg_power_usage,PU.recorded_time as power_usage_time FROM register RU FULL JOIN report_basicinfo UD ON UD.user_id = RU.id  FULL JOIN cpu_report CU ON  UD.session_id = CU.session_id FULL JOIN gpu_usage_report GU ON  CU.session_id = GU.session_id FULL JOIN memory_report MU ON  GU.session_id = MU.session_id FULL JOIN power_usage_report PU ON  MU.session_id = PU.session_id WHERE UD.user_id = $1  AND UD.device_id = $2 AND UD.session_id = $3';
    conn.pool.query(sql, [Number(userId), deviceId, sessionID], (error, results) => {
      if (error) {
        return res.json({
          message: error,
          status: 'false',
        });
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
    return res.status(401).json({
      status: false,
      message: 'Sorry, User role is not authorised.',
    });
  }
};

export { getDevices, getDevice, getSessions };
