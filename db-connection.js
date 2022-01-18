const { Pool, Client } = require("pg");

const pool =  new Pool({
  user: "postgres",
  host: "localhost",
  database: "gameon_db_dev",
  password: "password",
  port: 5432,
});

const getUsers = (req, res) => {
  pool.query('SELECT * FROM users', (error, results) => {
    if (error) {
      throw error
    }
    return res.status(200).json({
      message: "Users List",
      data: results.rows
  });
  })
}

const getUserById = (req, res) => {
  const id = parseInt(req.params.id)

  pool.query('SELECT * FROM users WHERE user_id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    return res.status(200).json({
      data: results.rows
  });
  })
}

const createUser = (req, res) => {
  const { name, email } = req.body;
  const created_on = new Date();
  const updated_at = new Date();

  pool.query('INSERT INTO users (name, email,created_on,updated_at) VALUES ($1, $2, $3, $4)', [name, email,created_on,updated_at], (error, results) => {
    if (error) {
      throw error
    }
    return res.status(200).json({
      message: "User has been Added Successfully....",
  });
  })
}

const updateUser = (req, res) => {
  const id = parseInt(req.params.id)
  const { name, email } = req.body;
  const updated_at = new Date();

  pool.query(
    'UPDATE users SET name = $1, email = $2, updated_at = $3 WHERE user_id = $4',
    [name, email,updated_at, id],
    (error, results) => {
      if (error) {
        throw error
      }
      return res.status(200).json({
        message: "User has been Updated Successfully....",
    });
    }
  )
}

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM users WHERE user_id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    return res.status(200).json({
      message: "User deleted Successfully...."
  });
  })
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}