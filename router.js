import express from 'express';
var router = express.Router();
import {body} from 'express-validator';
import register from './controllers/registerController.js';
import login from './controllers/loginController.js';
import db from "./db-connection.js";

//Register Uert
router.post('/register', register);

//Login User
router.post('/login',login);

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

export default router;