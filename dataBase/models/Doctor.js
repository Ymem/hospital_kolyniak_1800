module.exports = (sequelize, DataTypes) =>
    sequelize.define('Doctor', {
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
        }
    }, {
        tableName: 'doctor',
        timestamps: false
    });
