const db = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const PatientModel = db.getModel('Patient');

        const {name, email, password} = req.body;

        if (!name || !email || !password) throw new Error('Some field is empty!');

        const alreadyExist = await PatientModel.findOne({
            where: {
                email
            }
        });

        if (alreadyExist) throw new Error('This patient already exist');

        const insertedPatient = await PatientModel.create({
            name,
            email,
            password
        });

        res.json({
            success: true,
            msg: insertedPatient
        });
    } catch (e) {
        console.log(e);
        res.status(400).json(e.message)
    }
};
