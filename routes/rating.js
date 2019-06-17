const router = require('express').Router();

const getRating = require('../controllers/doctor/rating/getRating');
const changeRating = require('../controllers/doctor/rating/changeRating');

router.get('/:id/rating', getRating);
router.post('/:id/rating', changeRating);

module.exports = router;
