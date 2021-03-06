/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable import/extensions */
/* eslint-disable camelcase */
/* eslint-disable max-len */
import { v4 as uuidv4 } from 'uuid';
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
      device_id, device_name, android_version, version_name, app_name, start_time, total_duration,
    } = req.body;
    if (!device_id) {
      return res.status(400).json({
        message: 'DeviceId is required',
        status: false,
      });
    }
    req.session.sessionID = uuidv4();// Math.random() * 8;
    req.session.sessionUserID = res.apiuser.user_id;
    req.session.userRole = requestdRole;
    // remove below line
    console.log(req.session.sessionID);
    const created_on = new Date();
    global.creation_time = created_on;

    conn.pool.query(
      'INSERT INTO report_basicinfo (device_id, user_id, device_name, android_version, version_name, app_name,created_at,session_id,start_time,total_duration) VALUES ($1, $2, $3, $4,$5,$6, $7, $8, $9, $10) RETURNING *',
      [device_id, res.apiuser.user_id, device_name, android_version, version_name, app_name, created_on, req.session.sessionID, start_time, total_duration],
      async (error, result) => {
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
          data: result.rows[0],

        });
      },
    );
  } else {
    return res.status(401).json({
      status: false,
      message: 'Sorry, User role is not authorised.',
    });
  }
};
export default reportInfo;
