/* eslint-disable no-console */
/* eslint-disable import/extensions */
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import conn from '../db-connection.js';

// Our login logic starts here
const login = async (req, res) => {
  // Get user input
  const { email, password } = req.body;
  // Create token
  const token = jwt.sign(
    { user_email: email },
    'the-super-strong-secrect',
  );

  // Validate user input
  if (!(email && password)) {
    res.status(400).send('All input is required');
  }
  const emailCheck = 'SELECT * from register WHERE email=$1';
  conn.pool.query(emailCheck, [req.body.email], async (err, result) => {
    const { id } = result.rows[0];
    if (err) {
      console.error(err);
      res.status(404).send();
    }

    // Validate user email
    if (result.rowCount === 0) {
      res.status(400).json({
        message: 'Invalid email address',
      });
    }
    const passMatch = await bcrypt.compare(req.body.password, result.rows[0].password);
    // Validate user password
    if (!passMatch) {
      res.status(401).json({
        message: 'Incorrect password',
      });
    }
    // save user token
    if (result.rows[0].token === null) {
      req.session.sessionID = Math.random() * 8;
      req.session.sessionUserID = result.rows[0].id;
      conn.pool.query(
        'UPDATE register SET token = $1 WHERE id = $2',
        [token, id],
        async (_error) => {
          if (_error) {
            throw _error;
          }
          res.send('Logged-In').status(200);
        },
      );
    } else { // setting token to header
      // res.set('authtoken', result.rows[0].token);
      res.status(409).json({ message: 'already logged-in', user_token: result.rows[0].token });
    }
  });
};

export default login;
