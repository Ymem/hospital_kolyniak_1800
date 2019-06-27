const db = require('../../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const AnswerModel = db.getModel('Answer');

        const comment_id = req.params.id;
        if (!comment_id) throw new Error('No comment id!');

        const gotAnswer = await AnswerModel.findAll({
            attributes: [
                "answer"],
            where: {
                comment_id: comment_id
            }
        });

        if (!gotAnswer) throw new Error('Answer for this comment do not exist!');

        res.json({
            success: true,
            msg: gotAnswer
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
