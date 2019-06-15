const router = require('express').Router();

const authDoctor = require('../controllers/auth/authDoctor');
const authPatient = require('../controllers/auth/authPatient');

router.post('/doctor', authDoctor);
router.post('/patient', authPatient);

module.exports = router;
