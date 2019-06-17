const router = require('express').Router();

const getComments = require('../controllers/doctor/comments/getComments');
const createNewComment = require('../controllers/doctor/comments/createNewComment');
const changeComment = require('../controllers/doctor/comments/changeComment');
const deleteComment = require('../controllers/doctor/comments/deleteComment');

router.get('/:id/comments', getComments);
router.post('/:id/comments', createNewComment);
router.put('/:id/comments', changeComment);
router.delete('/:id/comments', deleteComment);

module.exports = router;
