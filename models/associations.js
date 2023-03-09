const Follow = require('follow')
const User = require('user')


User.associate = (models) => {
    User.hasMany(models.Follow,{
        foreignKey: ['userId', 'followingId'],
        onDelete: 'CASCADE'
    })
}
Follow.associate = (models) => {
    Follow.belongsTo(models.User,{
        foreignKey: ['userId', 'followingId'],
        onDelete: 'CASCADE'
    })
}