const db = require('../../dataBase').getInstance();
// const tokenVerifier = require('../../helpers/tokenVerifier');

module.exports = async (req, res) => {
    try {

        const DoctorModel = db.getModel('Doctor');

        const {name = ''} = req.query;

        if (!name) throw new Error('No doctor name!');

        const allDoctors = await DoctorModel.findAll({
            attributes: ["name", "experience", "description", "phone_num", "floor_num", "office_num", "working_days"],
            where: {
                name:  `%${name}%`
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
