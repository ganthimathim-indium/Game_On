/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable import/extensions */
import conn from '../db-connection.js';

// Our report logic starts here
const reportTestSession = async (req, res, next) => {
  const {

    sessionID, userRole, device_id, sessionname,
  } = req.body;
  // console.log("inputes from go test session", req.body);

  const created_on = new Date();

  conn.pool.query(
    'INSERT INTO test_sessions (session_id, session_user_id, user_role, device_id,created_at,session_title) VALUES ($1, $2, $3, $4,$5,$6)',
    [sessionID, res.apiuser.user_id, userRole, device_id, created_on, sessionname],
    (error) => {
      if (error) {
        // throw error;
        console.error('(test session api)cannot insert into test ', error);
      }
    },
  );
  // process.on('uncaughtException', (error) => {
  //   console.error('error in inserting metrices', error);
  // });
  await next();
};
export default reportTestSession;
