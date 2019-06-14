const ApiRouter = require('express').Router();
const departmentRouter = require('./department');
const doctorRouter = require('./doctor');
// const authRouter = require('./auth');
// const commentsRouter = require('./comments');
// const patientRouter = require('./patient');
// const ratingRouter = require('./rating');

ApiRouter.use('/departments', departmentRouter);
ApiRouter.use('/doctors', doctorRouter);
// ApiRouter.use('/login', authRouter);

module.exports = ApiRouter;
