module.exports = (sequelize, DataTypes) =>
    sequelize.define('Department', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        label: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'department',
        timestamps: false
    });
