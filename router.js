import express from 'express';
import register from './controllers/registerController.js';
import reportInfo from './controllers/reportController.js';
import cpuReportInfo from './controllers/reportCpuController.js';
import login from './controllers/loginController.js';
import { getDevices, getDevice } from './controllers/getDeviceReportController.js';
import db from "./db-connection.js";

var router = express.Router();

//Register Uert
router.post('/register', register);

//Login User
router.post('/login',login);

//Report Basic Info
router.post('/report/basic_info', reportInfo);

//Report Basic Info
router.post('/report/cpu_detail', cpuReportInfo);

// get devices
router.get('/getdevices', getDevices);

// get a particular devices
router.get('/getdevice', getDevice);

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