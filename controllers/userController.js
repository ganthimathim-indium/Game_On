/* eslint-disable camelcase */
/* eslint-disable import/extensions */
import conn from '../db-connection.js';

// Our user logic starts here
const getUsers = (req, res) => {
  conn.pool.query('SELECT user_id, name, email, phone_number FROM users', (error, results) => {
    if (error) {
      res.status(500);
      throw error;
    }
    return res.status(200).json({
      message: 'Users List',
      data: results.rows,
    });
  });
};

const getUserById = (req, res) => {
  const id = parseInt(req.params.id, 10);

  conn.pool.query('SELECT user_id, name, email, phone_number FROM users WHERE user_id = $1', [id], (error, results) => {
    if (error) {
      res.status(500);
      throw error;
    }
    return res.status(200).json({
      data: results.rows,
    });
  });
};

const createUser = (req, res) => {
  const { name, email } = req.body;
  const created_on = new Date();
  const updated_at = new Date();

  conn.pool.query('INSERT INTO users (name, email,created_on,updated_at) VALUES ($1, $2, $3, $4)', [name, email, created_on, updated_at], (error) => {
    if (error) {
      res.status(500);
      throw error;
    }
    return res.status(200).json({
      message: 'User has been Added Successfully....',
    });
  });
};

const updateUser = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const { name, email } = req.body;
  const updated_at = new Date();

  conn.pool.query(
    'UPDATE users SET name = $1, email = $2, updated_at = $3 WHERE user_id = $4',
    [name, email, updated_at, id],
    (error) => {
      if (error) {
        res.status(500);
        throw error;
      }
      return res.status(200).json({
        message: 'User has been Updated Successfully....',
      });
    },
  );
};

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id, 10);

  conn.pool.query('DELETE FROM users WHERE user_id = $1', [id], (error) => {
    if (error) {
      response.status(500);
      throw error;
    }
    return response.status(200).json({
      message: 'User deleted Successfully....',
    });
  });
};

export default {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
