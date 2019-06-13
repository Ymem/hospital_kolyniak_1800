const db = require('../../dataBase').getInstance();
const tokenizer = require('../../helpers/tokenizer');

module.exports = async (req, res) => {
    try {
        const PatientModel = db.getModel('Patient');
        const {email = '', password = ''} = req.body;
        if(!email || !password) throw new Error('Some field is empty!');

        const isPresent = await PatientModel.findOne({
            where: {
                email,
                password
            }
        });
        if (!isPresent) throw new Error('You are not register!');

        const {id, name} = isPresent;
        const token = tokenizer({id, name});
        res.json({
            success: true,
            accessToken: token
        })
    } catch (e) {
        console.log(e);
        res.status(400).json({
            success: false,
            msg: e.message
        })
    }
};
