const db = require('../../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const CommentModel = db.getModel('Comment');
        const PatientModel = db.getModel('Patient');

        const id = req.params.id;

        if (!id) throw new Error('No id!');

        const gotComments = await CommentModel.findAll({
            attributes: [
                "id",
                "comment",
                "patient_id"],
            where: {
                doctor_id: id
            },
            include: [{
                model: PatientModel,
                attributes: ["name"]
            }]
        });

        if (!gotComments) throw new Error('Comments for this doctor do not exist!');

        res.json({
            success: true,
            msg: gotComments
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
