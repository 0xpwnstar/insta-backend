module.exports = (sequelize, DataTypes) => {
    const Follow = sequelize.define(
        'follow',{
            userId: {
                type: DataTypes.INTEGER.UNSIGNED
            },
            followingId: {
                type: DataTypes.INTEGER.UNSIGNED
            }
        }
    )

    Follow.belongsTo(User,{
        foreignKey: ['userId', 'followingId'],
        onDelete: 'CASCADE'
    })


    return Follow
}