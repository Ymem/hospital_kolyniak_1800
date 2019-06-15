const router = require('express').Router();

const getRating = require('../controllers/doctor/rating/getRating');
const changeRating = require('../controllers/doctor/rating/changeRating');

router.get('/', getRating);
router.post('/', changeRating);

module.exports = router;
