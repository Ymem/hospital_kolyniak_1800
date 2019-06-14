const router = require('express').Router();

const getDoctorsByName = require('../controllers/doctor/getDoctorsByName');
const getDoctorByPk = require('../controllers/doctor/getDoctorByPk');
const getDoctorsFromDepartment = require('../controllers/doctor/getDoctorsFromDepartment');

router.get('/:id', getDoctorByPk);
router.get('/', getDoctorsByName);
router.get('/fromDepartment/:id', getDoctorsFromDepartment);

module.exports = router;
