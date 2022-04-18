/* eslint-disable consistent-return */
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
    });
  }
  const emailCheck = 'SELECT * from register WHERE email=$1';
  conn.pool.query(emailCheck, [req.body.email], async (err, result) => {
    if (err) {
      return res.status(404).json({
        message: err.message,
        status: 'false',
      });
    }
    // Validate user email
    if (result.rowCount == 0) {
      return res.status(400).json({
        message: 'Invalid email address',
        status: 'false',
        token: '',
        role: '',
        id: '',
      });
    }
    const passMatch = await bcrypt.compare(req.body.password, result.rows[0].password);
    // Validate user password
    if (!passMatch) {
      return res.status(401).json({
        message: 'Incorrect password',
        status: 'false',
        token: '',
        role: '',
        id: '',
      });
    }
    const { id, role } = result.rows[0];
    // Create token
    const usertoken = jwt.sign(
      { user_email: email, user_role: role, user_id: id },
      process.env.JWTSECRET,
    );

    // save user token
    // if (result.rows[0].token === null) {
    // req.session.sessionID = Math.random() * 8;
    // req.session.sessionUserID = result.rows[0].id;
    const userRole = role;
    const userId = id;
    const userPassword = result.rows[0].password;
    const userName = result.rows[0].name;
    conn.pool.query(
      'UPDATE register SET token = $1 WHERE id = $2',
      [usertoken, id],
      async (_error) => {
        if (_error) {
          return res.json({
            message: ' coudn`t generate token ',
            status: 'false',
            token: '',
            role: '',
            id: '',
          });
        }
        return res.json({
          message: 'Logged-In',
          status: 'true',
          token: usertoken,
          role: userRole,
          id: userId,
          user_Name: userName,
          password: userPassword,
        }).status(200);
      },
    );
    // } else {
    //   res.status(409).json({
    //     message: 'already logged-in',
    //     token: '',
    //     role: '',
    //     id: '',
    //   });
    // }
  });
};

export default login;
