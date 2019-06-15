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
ApiRouter.use('/doctor/:id/comments', commentsRouter);
ApiRouter.use('/doctor/:id/rating', ratingRouter);

module.exports = ApiRouter;
