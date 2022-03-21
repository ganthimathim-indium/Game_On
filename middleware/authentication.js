/* eslint-disable no-console */
import jwt from 'jsonwebtoken';

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
      next();
    } catch (error) {
      res.status(401).json({
        status: false,
        message: 'Sorry, you must provide a valid token.',
      });
    }
  }
};
export default { verifyToken };
