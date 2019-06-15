const router = require('express').Router();

const getAllDepartments = require('../controllers/department/getDepartments');

router.get('/', getAllDepartments);

module.exports = router;
