const router = require('express').Router();

const getDoctorsByName = require('../controllers/doctor/getDoctorsByName');
const getDoctorByPk = require('../controllers/doctor/getDoctorByPk');
const getDoctorsFromDepartment = require('../controllers/doctor/getDoctorsFromDepartment');

router.get('/departments/:department_id/doctor/:id', getDoctorByPk);
router.get('/search', getDoctorsByName);
router.get('/departments/:department_id/doctor', getDoctorsFromDepartment);

module.exports = router;
