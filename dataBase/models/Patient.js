module.exports = (sequelize, DataTypes) =>
    sequelize.define('Patient', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'patient',
        timestamps: false
    });
