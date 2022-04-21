/* eslint-disable import/extensions */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable no-console */
import jwt from 'jsonwebtoken';
import conn from '../db-connection.js';

const verifyToken = (req, res, next) => {
  const requestToken = req.body.token || req.headers['x-access-token'] || req.headers.authorization || req.headers.token;
  if (!requestToken) {
    res.status(403).json({ message: 'A token is required for authentication' });
  }
  if (requestToken && requestToken.startsWith('Bearer ')) {
    const bearerToken = requestToken.split(' ');
    const token = bearerToken[1];
    try {
    //  we extract the JWTSECRET from the .env file
      req.apiUser = jwt.verify(token, process.env.JWTSECRET);
      res.apiuser = req.apiUser;
      const {
        user_id, jwt_secret_code,
      } = res.apiuser;
      conn.pool.query('SELECT * FROM register WHERE id = $1', [Number(user_id)], (error, results) => {
        if (error) {
          return res.json({
            message: error,
            status: 'false',
          });
        }
        console.log('from auth.js', jwt_secret_code, results.rows[0].secret_code);
        if (jwt_secret_code === results.rows[0].secret_code) { next(); } else {
          return res.status(401).json({
            status: 'false',
            message: 'invalid token.',
          });
        }
      });
    } catch (error) {
      res.status(401).json({
        status: 'false',
        message: 'Sorry, you must provide a valid token.',
      });
    }
  }
};
export default { verifyToken };
