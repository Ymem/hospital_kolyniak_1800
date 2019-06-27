const db = require('../../../dataBase').getInstance();
const tokenVerifier = require('../../../helpers/tokenVerifier');

module.exports = async (req, res) => {
    try {
        const PatientModel = db.getModel('Patient');
        const CommentModel = db.getModel('Comment');

        const {comment} = req.body;
        if (!comment) throw new Error('No comment!');

        const doctor_id = req.params.id;
        if (!doctor_id) throw new Error('No doctor id!');

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

        const insertedComment = await CommentModel.create({
            doctor_id,
            comment,
            patient_id: id
        });
        if (!insertedComment) throw new Error('Comment is NOT created!');

        res.json({
            success: true,
            msg: insertedComment
        });
    } catch (e) {
        console.log(e);
        res.status(400).json(e.message)
    }

};
