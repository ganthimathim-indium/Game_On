/* eslint-disable no-console */
/* eslint-disable import/extensions */
import conn from '../db-connection.js';

function generateReport(userId, data) {
  conn.pool.query(
    'INSERT INTO public.reports(user_id, json_report_data) VALUES ($1, $2)',
    [userId, data],
    (error) => {
      if (error) {
        // throw error;
        console.error('cannot insert into reports ', error);
      }
      console.error('from genrep', userId, data);
    },
  );
}
export default generateReport;
