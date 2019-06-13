module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        doctor_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        },
        comment: {
            type: DataTypes.STRING,
        },
        patient_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        }
    }, {
        tableName: 'comments',
        timestamps: false
    });

    const Doctor = sequelize.import('./Doctor.js');
    Comment.belongsTo(Doctor, {foreignKey: 'doctor_id'});

    const Patient = sequelize.import('./Patient.js');
    Comment.belongsTo(Patient, {foreignKey: 'patient_id'});

    return Comment
};
