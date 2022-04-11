/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable import/extensions */
import conn from '../db-connection.js';

// Our report logic starts here
const cpumetrices = async (req, res) => {
  const requestdRole = res.apiuser.user_role;
  // const authorisedRoles = ['user', 'admin', 'super admin'];
  // average calculation
  function averageArray(ar) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const numCount = ar.length;
    const sum = ar.reduce(reducer);
    return sum / numCount;
  }

  const {
    device_id, results,
  } = req.body;
  console.log(req.body);
  const { sessionID } = req.session;
  if (!device_id) {
    return res.status(400).json({
      message: 'DeviceId is required',
      status: false,
    });
  }
  const cpu_data = [];
  const record_time = [];

  const cpu_deviation = [];
  results.forEach((element) => {
    cpu_data.push(element.cpu_app_usage);
    record_time.push(element.time);

    cpu_deviation.push(element.cpu_deviation);
  });

  req.session.sessionID = Math.random() * 8;
  req.session.sessionUserID = res.apiuser.user_id;
  req.session.userRole = requestdRole;

  const created_on = new Date();
  const userCheck = 'SELECT * from report_basicinfo WHERE session_id=$1';
  conn.pool.query(userCheck, [sessionID], async (err, result) => {
    console.log('basicreport middleware', sessionID);
    if (err) {
      return res.status(500).json({
        status: false,
      });
    }
    console.log('middle ware selectresult', result.rows);
    if (result.rowCount === 0) {
      res.status(404).json({
        status: false,
        message: 'device Not Exist.',
      });
    }
    ///

    const cpuQuery = 'INSERT INTO cpu_report(session_id, cpu_app_usage, created_at,recorded_time,cpu_deviation,average_value) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *';
    // const sql_query = 'INSERT INTO report_basicinfo (device_id, user_id, device_name, android_version, version_name, app_name,created_at,session_id,start_time,total_duration) VALUES ($1, $2, $3, $4,$5,$6, $7, $8, $9, $10) RETURNING *';
    conn.pool.query(
      // sql_query,
      cpuQuery,
      // [device_id, res.apiuser.user_id, device_name, android_version,
      // version_name, app_name, created_on, req.session.sessionID, start_time, total_duration],
      [sessionID, cpu_data, created_on, record_time,
        cpu_deviation, parseInt(averageArray(cpu_data), 10)],
      async (error, metricesResults) => {
        if (error) {
          return res.status(404).json({
            message: error,
            status: 'false',
          });
        }

        req.session.device_id = req.body.device_id;

        return res.status(200).json({
          message: 'Report has been Added Successfully....',
          status: 'true',
          // data: metricesResults.rows[0],

        });
      },
    );
    ///
    // conn.pool.end();
    return console.log('ok');
  });
};

export default cpumetrices;
