const router = require('express').Router();

const registerPatient = require('../controllers/patient/registerPatient');

router.post('/register', registerPatient);

module.exports = router;
