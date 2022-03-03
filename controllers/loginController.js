/* eslint-disable eqeqeq */
/* eslint-disable no-console */
/* eslint-disable import/extensions */
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import conn from '../db-connection.js';

// Our login logic starts here
const login = async (req, res) => {
  // Get user input
  const { email, password } = req.body;
  // Validate user input
  if (!(email && password)) {
    res.status(400).json({
      message: 'All input is required',
      status: 'false',
      token: '',
      role: '',
      id: '',
      password: '',
    });
  }
  const emailCheck = 'SELECT * from register WHERE email=$1';
  conn.pool.query(emailCheck, [req.body.email], async (err, result) => {
    if (err) {
      console.error(err);
      res.status(404).json({
        message: err.message,
        status: 'false',
      });
    }
    // Validate user email
    if (result.rowCount == 0) {
      res.status(400).json({
        message: 'Invalid email address',
        status: 'false',
        token: '',
        role: '',
        id: '',
        password: '',
      });
    }
    const passMatch = await bcrypt.compare(req.body.password, result.rows[0].password);
    // Validate user password
    if (!passMatch) {
      res.status(401).json({
        message: 'Incorrect password',
        status: 'false',
        token: '',
        role: '',
        id: '',
        password: '',
      });
    }
    const { id, role } = result.rows[0];
    // Create token
    const usertoken = jwt.sign(
      { user_email: email, user_role: role, user_id: id },
      process.env.JWTSECRET,
    );

    // save user token
    if (result.rows[0].token === null) {
      // req.session.sessionID = Math.random() * 8;
      // req.session.sessionUserID = result.rows[0].id;
      const userRole = role;
      const userId = id;
      const userPassword = result.rows[0].password;
      conn.pool.query(
        'UPDATE register SET token = $1 WHERE id = $2',
        [usertoken, id],
        async (_error) => {
          if (_error) {
            throw _error;
          }
          res.json({
            message: 'Logged-In',
            status: 'true',
            token: usertoken,
            role: userRole,
            id: userId,
            password: userPassword,
          }).status(200);
        },
      );
    } else {
      res.status(409).json({
        message: 'already logged-in',
        token: '',
        role: '',
        id: '',
        password: '',
      });
    }
  });
};

export default login;
