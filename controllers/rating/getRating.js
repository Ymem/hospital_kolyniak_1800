const db = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const RatingModel = db.getModel('Rating');
        const PatientModel = db.getModel('Patient');
        const DoctorModel = db.getModel('Doctor');

        let Marks = await RatingModel.findAll({
            attributes: ["label", "doctor_id"],
            include: [DoctorModel, PatientModel]
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
