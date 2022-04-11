/* eslint-disable import/extensions */
import express from 'express';
import register from './controllers/registerController.js';
import reportInfo from './controllers/reportController.js';
import cpuReport from './controllers/reportCpuController.js';
import login from './controllers/loginController.js';
import user from './controllers/userController.js';
import { getDevices, getDevice } from './controllers/getDeviceReportController.js';
import auth from './middleware/authentication.js';
import reportTestSession from './middleware/testSession.js';
import getHistory from './controllers/viewHistorySessionsController.js';
import deleteSession from './controllers/deleteSessionController.js';
//
// import basicinfo from './middleware/basicReportInfo.js';
// import cpumetrices from './controllers/cpumetrices.js';
import basicinfoend from './middleware/basic_info_end.js';

const router = express.Router();

// Register Uert
router.post('/register', register);

// Login User
router.post('/login', login);

// Report Basic Info
router.post('/report/basic_info', auth.verifyToken, reportInfo);

// Report Basic Info
router.post('/report/cpu_detail', auth.verifyToken, basicinfoend, reportTestSession, cpuReport);

// get devices
router.get('/getdevices', auth.verifyToken, getDevices);

// get a particular devices
router.get('/getdevice', auth.verifyToken, getDevice);

// get history of sessions
router.get('/getHistory', auth.verifyToken, getHistory);

// delete session
router.delete('/deleteSession', auth.verifyToken, deleteSession);

/// ****test */
// router.post('/cpumetrices', auth.verifyToken, basicinfo, reportTestSession, cpumetrices);
///

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
