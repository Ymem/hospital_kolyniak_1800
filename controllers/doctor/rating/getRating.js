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

        const numOfMarks = gotMarks.length;
        let sumOfMarks = 0;
        gotMarks.forEach((Rating) => sumOfMarks += Rating.mark);
        const avgMark = (sumOfMarks / numOfMarks).toFixed(2);

        res.json({
            success: true,
            numOfVotes: numOfMarks,
            rating: avgMark
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
