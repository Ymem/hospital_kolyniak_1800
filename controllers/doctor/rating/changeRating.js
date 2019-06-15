const db = require('../../../dataBase').getInstance();
const tokenVerifier = require('../../../helpers/tokenVerifier');

module.exports = async (req, res) => {
    try {
        const PatientModel = db.getModel('Patient');
        const RatingModel = db.getModel('Rating');

        const {mark} = req.body;
        if (!mark) throw new Error('No mark!');

        const doctor_id = req.params.id;
        if (!doctor_id) throw new Error('No doctor_id!');

        const token = req.get('Authorization');
        if (!token) throw new Error('No token');

        const {id, name: userName} = tokenVerifier(token);

        const isPresent = await PatientModel.findOne({
            where: {
                id,
                name: userName
            }
        });
        if (!isPresent) throw new Error('Not valid patient!');


        const changedMark = await RatingModel.update({
            mark
        }, {
            where: {
                id,
                doctor_id
            }
        });
        if (!changedMark) {
            const createdMark = await RatingModel.create({
                doctor_id,
                mark,
                patient_id: id
            });
            if (!createdMark) throw new Error('Mark is NOT created!');

            res.json({
                success: true,
                msg: createdMark
            });
        }

        res.json({
            success: true,
            msg: changedMark
        });
    } catch (e) {
        console.log(e);
        res.status(400).json(e.message)
    }

};
