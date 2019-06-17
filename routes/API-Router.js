const ApiRouter = require('express').Router();
const departmentRouter = require('./department');
const doctorRouter = require('./doctor');
const authRouter = require('./auth');
const patientRouter = require('./patient');
const commentsRouter = require('./comments');
const ratingRouter = require('./rating');

ApiRouter.use('/departments', departmentRouter);
ApiRouter.use('/', doctorRouter);
ApiRouter.use('/login', authRouter);
ApiRouter.use('/patient', patientRouter);
ApiRouter.use('/doctor', commentsRouter);
ApiRouter.use('/doctor', ratingRouter);

module.exports = ApiRouter;
