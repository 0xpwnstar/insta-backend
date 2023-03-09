module.exports = (sequelize, DataTypes) => {
    const Follow = sequelize.define(
        'follow',{
            userId: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false
            },
            followingId: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false
            }
        }
    )


    return Follow
}