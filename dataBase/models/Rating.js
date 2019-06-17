module.exports = (sequelize, DataTypes) => {
    const Rating = sequelize.define('Rating', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        doctor_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        },
        mark: {
            type: DataTypes.FLOAT
        },
        patient_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        }
    }, {
        tableName: 'rating',
        timestamps: false
    });

    const Doctor = sequelize.import('./Doctor.js');
    Rating.belongsTo(Doctor, {foreignKey: 'doctor_id'});

    const Patient = sequelize.import('./Patient.js');
    Rating.belongsTo(Patient, {foreignKey: 'patient_id'});

    return Rating
};
