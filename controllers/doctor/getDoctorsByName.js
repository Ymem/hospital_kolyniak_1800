const Op = require('sequelize').Op;
const db = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {

        const DoctorModel = db.getModel('Doctor');

        const {name = ''} = req.query;

        if (!name) throw new Error('No doctor name!');

        const allDoctors = await DoctorModel.findAll({
            attributes: [
                "id",
                "name"],
            where: {
                name: {
                    [Op.like]: `%${name}%`
                }
            }
        });

        res.json({
            success: true,
            msg: allDoctors
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
