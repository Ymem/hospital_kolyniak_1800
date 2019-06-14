module.exports = (sequelize, DataTypes) => {
    const Doctor = sequelize.define('Doctor', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        },
        experience: {
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.STRING
        },
        phone_num: {
            type: DataTypes.INTEGER
        },
        email: {
            type: DataTypes.STRING
        },
        floor_num: {
            type: DataTypes.INTEGER
        },
        office_num: {
            type: DataTypes.INTEGER
        },
        working_days: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        department_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        }
    }, {
        tableName: 'doctor',
        timestamps: false
    });

    const Department = sequelize.import('./Department.js');
    Doctor.belongsTo(Department, {foreignKey: 'department_id'});

    return Doctor
};
