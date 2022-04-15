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
    console.log('inputes from go cpu controller', req.body);
    const cpu_data = [];
    // const power_usage_data = [];
    // const gpu_usage_data = [];
    // const memory_usage_data = [];
    const record_time = [];
    const cpu_deviation = [];
    // const power_deviation = [];
    // const gpu_deviation = [];
    // const memory_deviation = [];
    results.forEach((element) => {
      cpu_data.push(parseFloat(Number(element.cpu_app_usage)));
      // power_usage_data.push(element.avg_power_usage);
      // gpu_usage_data.push(element.avg_gpu_usage);
      // memory_usage_data.push(element.avg_memory_usage);
      record_time.push(element.time);
      cpu_deviation.push(element.cpu_deviation);
      // power_deviation.push(element.power_deviation);
      // gpu_deviation.push(element.gpu_deviation);
      // memory_deviation.push(element.memory_deviation);
    });
    // const { sessionID } = req.session;
    const userCheck = 'SELECT * from report_basicinfo WHERE session_id=$1';
    conn.pool.query(userCheck, [sessionID], async (err, result) => {
      if (err) {
        console.log('report controller error', err);
      }
      if (result.rowCount === 0) {
        console.log('session does not exists');
      }
      const created_on = new Date();
      const cpuQuery = 'INSERT INTO cpu_report(session_id, cpu_app_usage, created_at,recorded_time,cpu_deviation,average_value) VALUES ($1,$2,$3,$4,$5,$6)';
      // const memoryUsageQuery = 'INSERT INTO memory_report(session_id,avg_memory_usage,created_at,recorded_time,memory_deviation,average_value) VALUES ($1,$2,$3,$4,$5,$6)';
      // const powerUsageQuery = 'INSERT INTO power_usage_report(session_id,avg_power_usage,created_at,recorded_time,power_deviation,average_value) VALUES ($1,$2,$3,$4,$5,$6)';
      // const gpuUsageQuery = 'INSERT INTO gpu_usage_report(session_id,avg_gpu_usage,created_at,recorded_time,gpu_deviation,average_value) VALUES ($1,$2,$3,$4,$5,$6)';
      conn.pool.query(cpuQuery, [sessionID, cpu_data, created_on, record_time, cpu_deviation, (averageArray(cpu_data))], (error) => {
        if (error) {
          console.log('error in inserting metrices', error);
        }
      });
      // conn.pool.query(memoryUsageQuery, [sessionID, memory_usage_data, created_on, record_time, power_deviation, parseInt(averageArray(memory_usage_data), 10)]);
      // conn.pool.query(powerUsageQuery, [sessionID, power_usage_data, created_on, record_time, memory_deviation, parseInt(averageArray(power_usage_data), 10)]);
      // conn.pool.query(gpuUsageQuery, [sessionID, gpu_usage_data, created_on, record_time, gpu_deviation, parseInt(averageArray(gpu_usage_data), 10)]);
      console.log('average array value int', (averageArray(cpu_data)));
      res.status(200).json({
        status: 'true',
        // message: 'Device metrics added',
        average_values: {
          cpu_usage: (averageArray(cpu_data)).toString(),
          // memory_usage: parseInt(averageArray(memory_usage_data), 10),
          // power_usage: parseInt(averageArray(power_usage_data), 10),
          // gpu_usage: parseInt(averageArray(gpu_usage_data), 10),
        },

        // data: `'cpu_usage': ${parseInt(averageArray(cpu_data), 10)},'memory_usage': ${parseInt(averageArray(memory_usage_data), 10)},'power_usage': ${parseInt(averageArray(power_usage_data), 10)},'gpu_usage': ${parseInt(averageArray(gpu_usage_data), 10)}`,
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
