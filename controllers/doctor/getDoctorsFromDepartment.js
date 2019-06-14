const db = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {

        const DoctorModel = db.getModel('Doctor');

        const id = req.params.id;

        if (!id) throw new Error('No id!');

        const gotDoctors = await DoctorModel.findAll({
            attributes: [
                "id",
                "name"],
            where: {
                department_id: id
            }
        });

        if (!gotDoctors) throw new Error('Doctors from this department do not exist');

        res.json({
            success: true,
            msg: gotDoctors
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
