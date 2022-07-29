/* eslint-disable import/extensions */
import express from 'express';
import fileUpload from 'express-fileupload';
import register from './controllers/registerController.js';
import reportInfo from './controllers/reportController.js';
import cpuReport from './controllers/reportCpuController.js';
import login from './controllers/loginController.js';
import user from './controllers/userController.js';
import { getDevices, getApplication, getSessions } from './controllers/getDeviceReportController.js';
import auth from './middleware/authentication.js';
import reportTestSession from './middleware/testSession.js';
import getHistory from './controllers/viewHistorySessionsController.js';
import deleteSession from './controllers/deleteSessionController.js';
import getDeviceSessions from './controllers/getSessionByDevice.js';

// import basicinfo from './middleware/basicReportInfo.js';
// import cpumetrices from './controllers/cpumetrices.js';
import basicinfoend from './middleware/basic_info_end.js';
import getReport from './controllers/createXlsx.js';

import getimage from './controllers/getimage.js';
import imageUpload from './controllers/uploadImage.js';
import filesPayloadExists from './middleware/filesPayloadExists.js';
import fileSizeLimitter from './middleware/fileSizeLimitter.js';
import fileExtLimiter from './middleware/fileExtLimitter.js';

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
router.get('/devices', auth.verifyToken, getDevices);

// get a particular devices
router.get('/applications', auth.verifyToken, getApplication);

// get a particular session details
router.get('/allSessions', auth.verifyToken, getSessions);

// get history of sessions
router.get('/getHistory', auth.verifyToken, getHistory);

// get all sessions of a device
router.get('/sessionDetails', auth.verifyToken, getDeviceSessions);

// delete session
router.delete('/deleteSession', auth.verifyToken, deleteSession);

// get report
router.get('/getReport', getReport);

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

// get image
router.get('/image', getimage);

// upload image
router.post(
  '/upload',
  fileUpload({ createParentPath: true }),
  filesPayloadExists,
  fileExtLimiter(['.png', '.jpg', '.jpeg']),
  fileSizeLimitter,
  imageUpload,
);

export default router;
