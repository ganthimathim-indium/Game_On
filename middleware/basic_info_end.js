/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable import/extensions */
import conn from '../db-connection.js';

const basicinfoend = async (req, res, next) => {
  const {
    end_time, sessionID, totaltime,
  } = req.body;
  global.totalDuration = totaltime;
  conn.pool.query(
    'UPDATE report_basicinfo SET end_time= ($1), total_duration = ($2) WHERE session_id = $3',
    [end_time, totaltime, sessionID],
    async (error) => {
      if (error) {
        res.status(404).json({
          message: error,
          status: 'false',
          error: '(basic info )no associated sessions',
        });
      }
    },
  );
  console.log('scan ended and data has been saved!');
  await next();
};

export default basicinfoend;
