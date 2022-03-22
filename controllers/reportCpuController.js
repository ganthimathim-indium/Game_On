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
      results,
    } = req.body;
    const cpu_data = [];
    const power_usage_data = [];
    const pgu_usage_data = [];
    const memory_usage_data = [];
    results.forEach((element) => {
      cpu_data.push(element.cpu_app_usage);
      power_usage_data.push(element.avg_power_usage);
      pgu_usage_data.push(element.avg_gpu_usage);
      memory_usage_data.push(element.avg_memory_usage);
    });
    const { sessionID } = req.session;
    const userCheck = 'SELECT * from report_basicinfo WHERE session_id=$1';
    conn.pool.query(userCheck, [sessionID], async (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({
          status: false,
        });
      }

      if (result.rowCount === 0) {
        res.status(404).json({
          status: false,
          message: 'device Not Exist.',
        });
      }

      const created_on = new Date();
      const cpuQuery = 'INSERT INTO cpu_report(session_id, cpu_app_usage, created_at) VALUES ($1,$2,$3)';
      const memoryUsageQuery = 'INSERT INTO memory_report(session_id,avg_memory_usage,created_at) VALUES ($1,$2,$3)';
      const powerUsageQuery = 'INSERT INTO power_usage_report(session_id,avg_power_usage,created_at) VALUES ($1,$2,$3)';
      const gpuUsageQuery = 'INSERT INTO gpu_usage_report(session_id,avg_gpu_usage,created_at) VALUES ($1,$2,$3)';
      conn.pool.query(cpuQuery, [sessionID, cpu_data, created_on]);
      conn.pool.query(memoryUsageQuery, [sessionID, memory_usage_data, created_on]);
      conn.pool.query(powerUsageQuery, [sessionID, power_usage_data, created_on]);
      conn.pool.query(gpuUsageQuery, [sessionID, pgu_usage_data, created_on]);
      return res.status(200).json({
        status: true,
        message: 'Device metrics  added',
        data: `'cpu_usage' ${cpu_data},'memory_usage' ${memory_usage_data},'power_usage' ${power_usage_data},'gpu_usage' ${pgu_usage_data}`,
      });
    });
  } else {
    res.status(401).json({
      status: false,
      message: 'Sorry, User role is not authorised.',
    });
  }
};
export default cpuReport;
