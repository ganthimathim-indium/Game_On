/* eslint-disable import/extensions */
import conn from '../db-connection.js';

// get devices
const getHistory = async (req, res) => {
  const requestdRole = res.apiuser.user_role;
  const userID = res.apiuser.user_id;
  const authorisedRoles = ['user', 'admin', 'super admin'];
  // const x = conn.pool.query('SELECT * FROM roles WHERE level=1 ', (errr, result) => result);
  // console.log(x);
  // console.log(("b" + "a" + + "a" + "a").toLowerCase());
  if (authorisedRoles.includes(requestdRole)) {
    const {
      date,
    } = req.query;
    const sql = 'select * from public.test_sessions where created_at::date = $1 AND session_user_id = $2';
    conn.pool.query(sql, [date, userID], (error, results) => {
      if (error) {
        res.status(500);
        throw error;
      }
      if (results.rowCount === 0) {
        res.status(404).json({
          status: false,
          message: 'records not found',
        });
      }
      res.status(200).json({
        status: true,
        data: results.rows,
      });
    });
  } else {
    res.status(401).json({
      status: false,
      message: 'Sorry, User role is not authorised.',
    });
  }
};

export default getHistory;
