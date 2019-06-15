const db = require('../../../dataBase').getInstance();
const tokenVerifier = require('../../../helpers/tokenVerifier');

module.exports = async (req, res) => {
    try {
        const PatientModel = db.getModel('Patient');
        const CommentModel = db.getModel('Comment');

        const id = req.params.id;
        if (!id) throw new Error('No comment id!');

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

        const deletedComment = await CommentModel.destroy({
            where: {
                id,
                patient_id
            }
        });
        if (!deletedComment) throw new Error('Comment is NOT deleted!');

        res.json({
            success: true,
            msg: "Comment deleted"
        });
    } catch (e) {
        console.log(e);
        res.status(400).json(e.message)
    }

};
