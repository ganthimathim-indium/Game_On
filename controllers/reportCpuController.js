/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable import/extensions */
import conn from '../db-connection.js';

// Our report logic starts here
const cpuReport = async (req, res) => {
  const requestdRole = res.apiuser.user_role;
  const authorisedRoles = ['user', 'admin', 'super admin'];
  // const x = conn.pool.query('SELECT * FROM roles WHERE level=1 ', (errr, result) => result);
  // console.log(x);
  if (authorisedRoles.includes(requestdRole)) {
    // Get user input
    const {
      device_id, user_id, cpu_app_usage, avg_memory_usage, avg_power_usage, avg_gpu_usage,
    } = req.body;

    // Validate user input
    if (!(device_id && user_id)) {
      res.status(400).send('DeviceId and UserId is required');
    }
    const userCheck = 'SELECT * from report_basicinfo WHERE device_id=$1';
    conn.pool.query(userCheck, [device_id], async (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send();
      }

      if (result.rowCount === 0) {
        res.status(404).json({
          message: 'device Not Exist.',
        });
      }
      if (req.session.device_id !== undefined || device_id != null) {
        let deviceId;
        if (device_id === null) { deviceId = req.session.device_id; } else { deviceId = device_id; }
        const created_on = new Date();
        const cpuQuery = 'INSERT INTO cpu_report(device_id,user_id,session_id, cpu_app_usage, created_at) VALUES ($1,$2,$3,$4,$5)';
        const memoryUsageQuery = 'INSERT INTO memory_report(device_id,user_id,session_id,avg_memory_usage,created_at) VALUES ($1,$2,$3,$4,$5)';
        const powerUsageQuery = 'INSERT INTO power_usage_report(device_id,user_id,session_id,avg_power_usage,created_at) VALUES ($1,$2,$3,$4,$5)';
        const gpuUsageQuery = 'INSERT INTO gpu_usage_report(device_id,user_id,session_id,avg_gpu_usage,created_at) VALUES ($1,$2,$3,$4,$5)';
        conn.pool.query(cpuQuery, [deviceId, user_id, req.session.sessionID, cpu_app_usage, created_on]);
        conn.pool.query(memoryUsageQuery, [deviceId, user_id, req.session.sessionID, avg_memory_usage, created_on]);
        conn.pool.query(powerUsageQuery, [deviceId, user_id, req.session.sessionID, avg_power_usage, created_on]);
        conn.pool.query(gpuUsageQuery, [deviceId, user_id, req.session.sessionID, avg_gpu_usage, created_on]);
        res.status(200).json({
          message: 'Device info added',
        });
      }
    });
  } else {
    res.status(401).json({
      status: false,
      message: 'Sorry, User role is not authorised.',
    });
  }
};
export default cpuReport;
