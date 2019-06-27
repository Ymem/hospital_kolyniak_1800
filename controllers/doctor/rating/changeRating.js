const db = require('../../../dataBase').getInstance();
const tokenVerifier = require('../../../helpers/tokenVerifier');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = async (req, res) => {
    try {
        const PatientModel = db.getModel('Patient');
        const RatingModel = db.getModel('Rating');

        const {mark} = req.body;
        if (!mark) throw new Error('No mark!');
        if (mark < 0 || mark > 10) throw new Error('Mark > 10 or < 0!');

        const doctor_id = req.params.id;
        if (!doctor_id) throw new Error('No doctor_id!');

        const token = req.get('Authorization');
        if (!token) throw new Error('No token');

        const {id: patient_id, name: userName} = tokenVerifier(token);

        const isPresent = await PatientModel.findOne({
            where: {
                id: patient_id,
                name: userName
            }
        });
        if (!isPresent) throw new Error('Not valid patient!');

        const isSimilar = await RatingModel.findOne({
            where: {
                doctor_id,
                mark,
                patient_id
            }
        });

        const changedMark = await RatingModel.update({
            mark
        }, {
            where: {
                doctor_id,
                patient_id
            }
        });

        if (!changedMark[0]){
            if(isSimilar) throw new Error('Selected the same mark!');

            const createdMark = await RatingModel.create({
                doctor_id,
                mark,
                patient_id
            });
            if (!createdMark) throw new Error('Mark is NOT created!');

            res.json({
                success: true,
                status: "creating mark",
                msg: createdMark
            });
        }

        res.json({
            success: true,
            status: "changing mark",
            msg: changedMark
        });

    } catch (e) {
        console.log(e);
        res.status(400).json(e.message)
    }

};
