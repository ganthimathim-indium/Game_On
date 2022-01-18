const router = require('express').Router();
const db = require('./db-connection');

// Inserting User
router.post('/users', db.createUser)

// Fetching all users
router.get('/users', db.getUsers)

// Fetching Single User By ID
router.get('/users/:id', db.getUserById)

// Updating User
router.put('/users/:id', db.updateUser)
   
// Deleting User
router.delete('/users/:id', db.deleteUser)

module.exports = router;