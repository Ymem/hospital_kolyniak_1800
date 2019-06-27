const ApiRouter = require('express').Router();
const departmentRouter = require('./department');
const doctorRouter = require('./doctor');
const authRouter = require('./auth');
const patientRouter = require('./patient');

ApiRouter.use('/departments', departmentRouter);
ApiRouter.use('/doctor', doctorRouter);
ApiRouter.use('/login', authRouter);
ApiRouter.use('/patient', patientRouter);

module.exports = ApiRouter;
