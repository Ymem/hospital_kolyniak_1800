const db = require('../../../dataBase').getInstance();
const tokenVerifier = require('../../../helpers/tokenVerifier');

module.exports = async (req, res) => {
    try {
        const DoctorModel = db.getModel('Doctor');
        const AnswerModel = db.getModel('Answer');

        const {answer} = req.body;
        if (!answer) throw new Error('No answer!');

        const comment_id = req.params.id;
        if (!comment_id) throw new Error('No comment id!');

        const token = req.get('Authorization');
        if (!token) throw new Error('No token');

        const {id, name} = tokenVerifier(token);

        const isPresent = await DoctorModel.findOne({
            where: {
                id,
                name
            }
        });
        if (!isPresent) throw new Error('Not valid doctor!');

        const changedAnswer = await AnswerModel.update({
            answer
        }, {
            where: {
                comment_id
            }
        });
        if (!changedAnswer[0]) throw new Error('Answer is NOT changed!');

        res.json({
            success: true,
            msg: changedAnswer
        });
    } catch (e) {
        console.log(e);
        res.status(400).json(e.message)
    }

};
