/* eslint-disable import/extensions */

import conn from '../db-connection.js';

const deleteSession = async (req, res) => {
  const { sessionId } = req.query;
  if (!sessionId) {
    return res.json({
      meggase: 'please specify session_id',
      ststus: false,
    });
  }
  conn.pool.query(
    'DELETE FROM report_basicinfo t1 WHERE t1.session_id = $1',
    [sessionId],
    async (error, result) => {
      if (error) {
        return res.json({
          message: error,
          status: false,
        });
      }
      if (result.rowCount === 0) {
        return res.json({
          message: 'no rows deleted',
        });
      }
      return res.status(200).json({
        message: 'session  has been succesfully deleted',
        status: true,
        data: result,
      });
    },
  );
};
export default deleteSession;
