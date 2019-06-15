const db = require('../../dataBase').getInstance();
const tokenVerifier = require('../../helpers/tokenVerifier');

module.exports = async (req, res) => {
    try {
        const DoctorModel = db.getModel('Doctor');

        const {description, phone_num, email, floor_num, office_num, working_days, password, new_password} = req.body;

        if (!email || !password) throw new Error('Some necessary field is empty!');

        const id = req.params.id;
        if (!id) throw new Error('No doctor id!');

        const token = req.get('Authorization');
        if (!token) throw new Error('No token');

        const {id: doctor_id, name: userName} = tokenVerifier(token);

        const isPresent = await DoctorModel.findOne({
            where: {
                id: doctor_id,
                name: userName
            }
        });
        if (!isPresent) throw new Error('Not valid doctor!');

        const changedDoctor = await DoctorModel.update({
            description,
            phone_num,
            floor_num,
            office_num,
            working_days,
            password: new_password
        }, {
            where: {
                id,
                email,
                password
            }
        });
        if (!changedDoctor) throw new Error('Comment is NOT changed!');

        res.json({
            success: true,
            msg: changedDoctor
        });
    } catch (e) {
        console.log(e);
        res.status(400).json(e.message)
    }

};
