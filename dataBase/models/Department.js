module.exports = (sequelize, DataTypes) => {
    const Department = sequelize.define('Department', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        label: {
            type: DataTypes.STRING
        },
        doctor_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        }
    }, {
        tableName: 'department',
        timestamps: false
    });

    const Doctor = sequelize.import('./Doctor.js');
    Department.belongsTo(Doctor, {foreignKey: 'doctor_id'});

    return Department
};
