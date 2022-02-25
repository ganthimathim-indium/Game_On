/* eslint-disable import/extensions */
import express from 'express';
import register from './controllers/registerController.js';
import reportInfo from './controllers/reportController.js';
import cpuReportInfo from './controllers/reportCpuController.js';
import login from './controllers/loginController.js';
import user from './controllers/userController.js';
import { getDevices, getDevice } from './controllers/getDeviceReportController.js';
import auth from './middleware/auth.js'

const router = express.Router();

// Register Uert
router.post('/register', register);

// Login User
router.post('/login', login);

// Report Basic Info
router.post('/report/basic_info',auth, reportInfo);

// Report Basic Info
router.post('/report/cpu_detail',auth, cpuReportInfo);

// get devices
router.get('/getdevices',auth, getDevices);

// get a particular devices
router.get('/getdevice',auth, getDevice);

// Inserting User
router.post('/users', user.createUser);

// Fetching all users
router.get('/users', user.getUsers);

// Fetching Single User By ID
router.get('/users/:id', user.getUserById);

// Updating User
router.put('/users/:id', user.updateUser);

// Deleting User
router.delete('/users/:id', user.deleteUser);

export default router;
