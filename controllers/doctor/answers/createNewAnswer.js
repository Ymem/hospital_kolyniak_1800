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

        const insertedAnswer = await AnswerModel.create({
            comment_id,
            answer
        });
        if (!insertedAnswer) throw new Error('Answer is NOT created!');

        res.json({
            success: true,
            msg: insertedAnswer
        });
    } catch (e) {
        console.log(e);
        res.status(400).json(e.message)
    }

};
