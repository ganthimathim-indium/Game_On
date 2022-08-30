/* eslint-disable consistent-return */
/* eslint-disable prefer-destructuring */
/* eslint-disable import/extensions */
import conn from '../db-connection.js';
import offsetAndLimit from '../helper/pagination.js';

// get devices
const getDevices = async (req, res) => {
  const requestdRole = res.apiuser.user_role;
  const authorisedRoles = ['user', 'admin', 'super admin'];
  // const x = conn.pool.query('SELECT * FROM roles WHERE level=1 ', (errr, result) => result);
  // console.log(x);
  const { size, skip } = offsetAndLimit(req.query);
  if (authorisedRoles.includes(requestdRole)) {
    const {
      userId,
    } = req.query;
    let { fromDate, toDate } = req.query;
    global.fromDate = fromDate;
    global.toDate = toDate;
   
    if (!fromDate) {
      global.fromDate = '1990-01-01';
    }
    if (!toDate) {
      global.toDate = (new Date().toISOString().split('T')[0]);
    }
   

    const sql = `SELECT DISTINCT
     device_id,device_name
     FROM report_basicinfo 
     WHERE user_id = $1 AND created_at::date BETWEEN $2 AND $3
     ORDER by device_name ASC
     OFFSET ${skip} FETCH FIRST ${size} ROWS ONLY
    `;
    conn.pool.query(sql, [Number(userId), global.fromDate, global.toDate ], (error, results) => {
      if (error) {
        return res.json({
          message: error,
          status: 'false',
        });
      }
      if (results.rowCount === 0) {
        return res.status(404).json({
          status: false,
          message: 'record not found',
        });
      }
      res.status(200).json({
        status: true,
        data: results.rows,
      });
      return res.status('ok');
    });
  } else {
    return res.status(401).json({
      status: false,
      message: 'Sorry, User role is not authorised.',
    });
  }
};

// get a particular device
const getApplication = async (req, res) => {
  const requestdRole = res.apiuser.user_role;
  const authorisedRoles = ['user', 'admin', 'super admin'];
  // const x = conn.pool.query('SELECT * FROM roles WHERE level=1 ', (errr, result) => result);
  // console.log(x);
  const { size, skip } = offsetAndLimit(req.query);
  if (authorisedRoles.includes(requestdRole)) {
    const {
      userId, deviceId,
    } = req.query;
    if (!userId || !deviceId) {
      return res.status(400).json({
        message: 'userId and deviceId are required',
        status: false,
      });
    }
    if (!(userId && deviceId)) { res.json({ message: 'user id and device id both are needed to search a device' }); }
    const sql = `SELECT DISTINCT 
    device_id,app_name
    FROM report_basicinfo 
    WHERE user_id = $1  AND device_id = $2  AND created_at::date BETWEEN $3 AND $4
    OFFSET ${skip} FETCH FIRST ${size} ROWS ONLY `;
    conn.pool.query(sql, [userId, deviceId,global.fromDate, global.toDate ], (error, results) => {
      if (error) {
        return res.json({
          message: error,
          status: 'false',
        });
      }
      if (results.rowCount === 0) {
        return res.status(404).json({
          status: false,
          message: 'record not found',
        });
      }
      res.status(200).json({
        status: true,
        data: results.rows,
      });
      return res.status('ok');
    });
  } else {
    return res.status(401).json({
      status: false,
      message: 'Sorry, User role is not authorised.',
    });
  }
};

const getSessions = async (req, res) => {
  const requestdRole = res.apiuser.user_role;
  const authorisedRoles = ['user', 'admin', 'super admin'];
  const { skip, size } = offsetAndLimit(req.query);

  if (authorisedRoles.includes(requestdRole)) {
    // let { fromDate, toDate } = req.query;
    const { DeviceId, appName, userId } = req.query;
    if (!DeviceId) { return res.send('no deice id'); }

    // if (!fromDate) {
    //   fromDate = '1990-01-01';
    // }
    // if (!toDate) {
    //   toDate = (new Date().toISOString().split('T')[0]);
    // }

    const sql = `SELECT DISTINCT RB.session_id,RB.device_id,RB.app_name, TS.session_title as sessionname
    FROM report_basicinfo RB FULL JOIN test_sessions TS ON RB.session_id=TS.session_id  
    WHERE RB.end_time != ' ' AND RB.device_id= $1 AND RB.app_name = $2 AND RB.user_id = $3
    AND  RB.created_at::date BETWEEN $4 AND $5
    ORDER by session_id ASC
    OFFSET ${skip} FETCH FIRST ${size} ROWS ONLY`;
    conn.pool.query(sql, [DeviceId, appName, userId,global.fromDate, global.toDate ], (error, results) => {
      if (error) {
        return res.json({
          message: error,
          status: 'false',
        });
      }
      if (results.rowCount === 0) {
        return res.status(404).json({
          status: false,
          message: 'record not found',
        });
      }
      res.status(200).json({
        status: true,
        data: results.rows,
      });
      return res.status('ok');
    });
  } else {
    return res.status(401).json({
      status: false,
      message: 'Sorry, User role is not authorised.',
    });
  }
};

export { getDevices, getApplication, getSessions };
