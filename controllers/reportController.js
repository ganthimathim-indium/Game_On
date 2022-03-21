/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable import/extensions */
/* eslint-disable camelcase */
/* eslint-disable max-len */
import conn from '../db-connection.js';
// Our report logic starts here
const reportInfo = async (req, res) => {
  const requestdRole = res.apiuser.user_role;
  const authorisedRoles = ['user', 'admin', 'super admin'];
  // const x = conn.pool.query('SELECT * FROM roles WHERE level=1 ', (errr, result) => result);
  // console.log(x);
  if (authorisedRoles.includes(requestdRole)) {
    // Get user input
    const {
      device_id, device_name, android_version, version_name, app_name,
    } = req.body;

    // Validate user input
    if (!device_id) {
      res.status(400).send('DeviceId is required');
    }
    req.session.sessionID = Math.random() * 8;
    req.session.sessionUserID = res.apiuser.user_id;
    req.session.userRole = requestdRole;
    // remove below line
    console.log(req.session.sessionID);
    const created_on = new Date();
    conn.pool.query(
      'INSERT INTO report_basicinfo (device_id, user_id, device_name, android_version, version_name, app_name,created_at,session_id) VALUES ($1, $2, $3, $4,$5,$6, $7, $8) RETURNING *',
      [device_id, res.apiuser.user_id, device_name, android_version, version_name, app_name, created_on, req.session.sessionID],
      async (error, result) => {
        if (error) {
          res.status(404).json({
            message: error,
            status: 'false',
          });
        }
        req.session.device_id = req.body.device_id;
        res.status(200).json({
          message: 'Report has been Added Successfully....',
          status: 'true',
          data: result.rows[0],
        });
      },
    );
  } else {
    res.status(401).json({
      status: false,
      message: 'Sorry, User role is not authorised.',
    });
  }
};
export default reportInfo;
