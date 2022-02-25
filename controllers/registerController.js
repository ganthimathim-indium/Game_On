/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable import/extensions */
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import conn from '../db-connection.js';

// Our register logic starts here
const register = async (req, res) => {
  // Get user input
  const {
    name, email, phone_number, password,
  } = req.body;

  // Validate user input
  if (!(email && password && name && phone_number)) {
    res.status(400).send('All input is required');
  }

  // check if user already exist
  // Validate if user exist in our database
  const emailCheck = 'SELECT * from register WHERE email=$1';
  conn.pool.query(emailCheck, [req.body.email], async (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send();
    }
    if (result.rowCount > 0) {
      const user = result.rows[0];
     res.status(409).json({
        message: 'User Already Exist. Please Login',
        user_info: user,
      });
    }
    const hashPass = await bcrypt.hash(req.body.password, 12);
    const created_on = new Date();

    conn.pool.query('INSERT INTO register (name, email,phone_number,password,created_at) VALUES ($1, $2, $3, $4,$5) RETURNING *', [req.body.name,
      req.body.email,
      req.body.phone_number, hashPass,
      created_on], async (error, results) => {
      if (error) {
        throw error;
      } else {
        const { _email } = results.rows[0];
        const { id } = results.rows[0];
        // Create token
        const token = jwt.sign(
          { user_id: id, _email },
          'the-super-strong-secrect',
        );
        // save user token
        conn.pool.query(
          'UPDATE register SET token = $1 WHERE id = $2',
          [token, id],
          async (_error) => {
            if (_error) {
              throw _error;
            }
          },
        );
      }
       res.status(200).json({
        message: 'User has been Added Successfully....',
        data: results.rows[0],
      });
    });
     res.status(200);
  });
};
export default register;
