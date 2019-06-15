const db = require('../../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const RatingModel = db.getModel('Rating');

        const id = req.params.id;
        if (!id) throw new Error('No doctor id!');

        const gotMarks = await RatingModel.findAll({
            attributes: [
                "mark"],
            where: {
                doctor_id: id
            }
        });

        if (!gotMarks) throw new Error('Marks for this doctor do not exist!');

        let sumOfMarks = 0;
        gotMarks.forEach((mark) => sumOfMarks + mark);
        const Rating = sumOfMarks / gotMarks.length;

        res.json({
            success: true,
            msg: Rating
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
