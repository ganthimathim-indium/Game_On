/* eslint-disable camelcase */
/* eslint-disable import/extensions */
import conn from '../db-connection.js';

// Our report logic starts here
const reportTestSession = async (req, res, next) => {
  const {
    sessionID, sessionUserID, userRole, device_id,
  } = req.session;
  const created_on = new Date();
  conn.pool.query(
    'INSERT INTO test_sessions (session_id, session_user_id, user_role, device_id,created_at) VALUES ($1, $2, $3, $4,$5)',
    [sessionID, sessionUserID, userRole, device_id, created_on],
    (error) => {
      if (error) {
        return res.status(404).json({
          message: error,
          status: 'false',
          error: 'no associated sessions',
        });
      }
    },
  );
  next();
};
export default reportTestSession;
