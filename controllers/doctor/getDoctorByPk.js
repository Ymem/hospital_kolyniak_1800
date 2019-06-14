const db = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {

        const DoctorModel = db.getModel('Doctor');
        const DepartmentModel = db.getModel('Department');

        const id = req.params.id;

        if (!id) throw new Error('No doctor id!');

        // const gotDoctor = await DoctorModel.findByPk(id);
        const gotDoctor = await DoctorModel.findOne({
            attributes: [
                "id",
                "name",
                "experience",
                "description",
                "phone_num",
                "floor_num",
                "office_num",
                "working_days"],
            where: {
                id
            },
            include: [DepartmentModel]
        });

        if (!gotDoctor) throw new Error('Doctor with this id does not exist');

        res.json({
            success: true,
            msg: gotDoctor
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
