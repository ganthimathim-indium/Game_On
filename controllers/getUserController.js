/* eslint-disable import/extensions */
const jwt = require('jsonwebtoken');
const conn = require('../db-connection.js');

exports.getUser = async (req, res, next) => {
  const requestdRole = res.apiuser.user_role;
  const authorisedRoles = ['user', 'admin', 'super admin'];
  // const x = conn.pool.query('SELECT * FROM roles WHERE level=1 ', (errr, result) => result);
  // console.log(x);
  if (authorisedRoles.includes(requestdRole)) {
    try {
      if (
        !req.headers.authorization
              || !req.headers.authorization.startsWith('Bearer')
              || !req.headers.authorization.split(' ')[1]
      ) {
        res.status(422).json({
          message: 'Please provide the token',
        });
      }

      const theToken = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(theToken, 'the-super-strong-secrect');

      const [row] = await conn.execute(
        'SELECT `id`,`name`,`email` FROM `users` WHERE `id`=?',
        [decoded.id],
      );

      if (row.length > 0) {
        res.json({
          user: row[0],
        });
      }

      res.json({
        message: 'No user found',
      });
    } catch (err) {
      next(err);
    }
    res.send();
  } else {
    res.status(401).json({
      status: false,
      message: 'Sorry, User role is not authorised.',
    });
  }
};
