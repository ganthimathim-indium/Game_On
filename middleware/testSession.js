/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable import/extensions */
import conn from '../db-connection.js';

// Our report logic starts here
const reportTestSession = async (req, res, next) => {
  const {
    sessionID, sessionUserID, userRole, device_id,
  } = req.body;
  // console.log("inputes from go test session", req.body);
  const created_on = new Date();
  conn.pool.query(
    'INSERT INTO test_sessions (session_id, session_user_id, user_role, device_id,created_at) VALUES ($1, $2, $3, $4,$5)',
    [sessionID, sessionUserID, userRole, device_id, created_on],
    (error) => {
      if (error) {
        return res.send().json({
          message: error,
          status: 'false',
          error: '(test session)no associated sessions',
        });
      }
    },
  );
  await next();
};
export default reportTestSession;
