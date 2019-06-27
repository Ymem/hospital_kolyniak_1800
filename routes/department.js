const router = require('express').Router();

const getAllDepartments = require('../controllers/department/getDepartments');
const getDoctorsFromDepartment = require('../controllers/department/getDoctorsFromDepartment');

router.get('/', getAllDepartments);
router.get('/:department_id/doctors', getDoctorsFromDepartment);

module.exports = router;
