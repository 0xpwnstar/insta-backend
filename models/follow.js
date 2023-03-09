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
    Follow.associate = (models) => {
        Follow.belongsTo(models.User,{
            foreignKey: ['userId', 'followingId'],
            onDelete: 'CASCADE'
        })
    }


    return Follow
}