module.exports = (sequelize, DataTypes) => {
    const Follow = sequelize.define(
        'follow',{
            id: {
                DataTypes.INTEGER.UNSIGNED
            }
            following: {
                DataTypes.INTEGER.UNSIGNED
            }
        }
    )

    Follow.belongsTo(User,{
        foreignKey: ['userId', 'following'],
        onDelete: 'CASCADE'
    })


    return Follow
}