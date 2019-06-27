const router = require('express').Router();


//doctor routes
const getDoctorsByName = require('../controllers/doctor/getDoctorsByName');
const getDoctorByPk = require('../controllers/doctor/getDoctorByPk');
const changeDoctorInfo = require('../controllers/doctor/changeDoctorInfo');

router.get('/search', getDoctorsByName);
router.get('/:id', getDoctorByPk);
router.put('/:id', changeDoctorInfo);


//comments routes
const getComments = require('../controllers/doctor/comments/getComments');
const createNewComment = require('../controllers/doctor/comments/createNewComment');
const changeComment = require('../controllers/doctor/comments/changeComment');
const deleteComment = require('../controllers/doctor/comments/deleteComment');

router.get('/:id/comments', getComments);
router.post('/:id/comments', createNewComment);
router.put('/:id/comments', changeComment);
router.delete('/:id/comments', deleteComment);


//answers routes
const getAnswers = require('../controllers/doctor/answers/getAnswers');
const createNewAnswer = require('../controllers/doctor/answers/createNewAnswer');
const changeAnswer = require('../controllers/doctor/answers/changeAnswer');

router.get('/comments/:id/answers', getAnswers);
router.post('/comments/:id/answers', createNewAnswer);
router.put('/comments/:id/answers', changeAnswer);


//rating routes
const getRating = require('../controllers/doctor/rating/getRating');
const changeRating = require('../controllers/doctor/rating/changeRating');

router.get('/:id/rating', getRating);
router.post('/:id/rating', changeRating);


module.exports = router;
