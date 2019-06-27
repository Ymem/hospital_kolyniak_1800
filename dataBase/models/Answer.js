module.exports = (sequelize, DataTypes) => {
    const Answer = sequelize.define('Answer', {
        comment_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        },
        answer: {
            type: DataTypes.STRING,
        }
    }, {
        tableName: 'answers',
        timestamps: false
    });

    const Comment = sequelize.import('./Comment.js');
    Answer.belongsTo(Comment, {foreignKey: 'comment_id'});

    return Answer
};
