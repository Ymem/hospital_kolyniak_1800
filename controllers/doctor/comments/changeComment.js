const db = require('../../../dataBase').getInstance();
const tokenVerifier = require('../../../helpers/tokenVerifier');

module.exports = async (req, res) => {
    try {
        const PatientModel = db.getModel('Patient');
        const CommentModel = db.getModel('Comment');

        const {comment} = req.body;
        if (!comment) throw new Error('No comment to change!');

        const comment_id = req.params.id;
        if (!comment_id) throw new Error('No comment id!');

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

        const changedComment = await CommentModel.update({
            comment
        }, {
            where: {
                id: comment_id,
                patient_id
            }
        });
        if (!changedComment[0]) throw new Error('Comment is NOT changed!');

        res.json({
            success: true,
            msg: changedComment
        });
    } catch (e) {
        console.log(e);
        res.status(400).json(e.message)
    }

};
