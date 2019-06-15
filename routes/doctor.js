const router = require('express').Router();

const getDoctorsByName = require('../controllers/doctor/getDoctorsByName');
const getDoctorByPk = require('../controllers/doctor/getDoctorByPk');
const changeDoctorInfo = require('../controllers/doctor/changeDoctorInfo');
const getDoctorsFromDepartment = require('../controllers/doctor/getDoctorsFromDepartment');

router.get('/doctor/:id', getDoctorByPk);
router.get('/search', getDoctorsByName);
router.put('/doctor/:id', changeDoctorInfo);
router.get('/departments/:department_id/doctors', getDoctorsFromDepartment);

module.exports = router;
