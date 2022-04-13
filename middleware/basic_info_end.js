/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable import/extensions */
import conn from '../db-connection.js';

const basicinfoend = async (req, res, next) => {
  const {
    end_time,
  } = req.body;
  conn.pool.query(
    'UPDATE report_basicinfo SET end_time= ($1) WHERE session_id = $2 RETURNING *',
    [end_time, req.session.sessionID],
    async (error, result) => {
      if (error) {
        res.status(404).json({
          message: error,
          status: 'false',
          error: 'no associated sessions',
        });
      }
      global.creation_time = new Date(result.rows[0].created_at);
      console.log('global cretion date', global.creation_time);
    },

  );
  const updateTotalDuration = 'UPDATE report_basicinfo SET total_duration = ($1) WHERE session_id = $2 RETURNING *';
  function calculateTotalTime() {
    const day1 = new Date(global.creation_time);
    const day2 = new Date();
    const difference = day2.getTime() - day1.getTime();
    console.log('global creation time inside', global.creation_time);
    console.log((difference / 60000).toFixed(2));
    global.totalDuration = ((difference / 60000).toFixed(2));
    return global.totalDuration;
  }

  conn.pool.query(
    updateTotalDuration,
    [calculateTotalTime(), req.session.sessionID],
    async (err) => {
      if (err) {
        res.status(500).json({
          status: false,
        });
      }
    },

  );

  console.log('scan ended and data has been saved!');
  await next();
};

export default basicinfoend;
