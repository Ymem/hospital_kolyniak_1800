const db = require('../../dataBase').getInstance();
const tokenVerifier = require('../../helpers/tokenVerifier');

module.exports = async (req, res) => {
    try {
        const RatingModel = db.getModel('Rating');
        const PatientModel = db.getModel('Patient');
        const DoctorModel = db.getModel('Doctor');

        const {name = ''} = req.query;

        const token = req.get('Authorization');

        if (!token) throw new Error('No token');

        const {id, name: patientName} = tokenVerifier(token);

        const isPresent = await PatientModel.findOne({
            where: {
                id,
                name: patientName
            }
        });
        if (!isPresent) throw new Error('Not valid patient!');

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
