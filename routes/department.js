const router = require('express').Router();

const getAllDepartments = require('../controllers/department/getDepartments');

router.post('/', getAllDepartments);

module.exports = router;
