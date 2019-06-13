const db = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const DepartmentModel = db.getModel('Department');
        const DoctorModel = db.getModel('Doctor');

        let allDepartments = await DepartmentModel.findAll({
            attributes: ["label", "doctor_id"],
            include: [DoctorModel]
        });

        res.json({
            success: true,
            msg: allDepartments
        });

    } catch (e) {
        console.log(e);
        res.status(400)
            .json({
                success: false,
                msg: e.message
            })
    }
};
