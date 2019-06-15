const router = require('express').Router();

const getComments = require('../controllers/doctor/comments/getComments');
const createNewComment = require('../controllers/doctor/comments/createNewComment');
const changeComment = require('../controllers/doctor/comments/changeComment');
const deleteComment = require('../controllers/doctor/comments/deleteComment');

router.get('/', getComments);
router.post('/', createNewComment);
router.put('/', changeComment);
router.delete('/', deleteComment);

module.exports = router;
