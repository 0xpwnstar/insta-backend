
models.User.associate = (models) => {
    models.User.hasMany(models.Follow,{
        foreignKey: ['userId', 'followingId'],
        onDelete: 'CASCADE'
    })
}
models.Follow.associate = (models) => {
    models.Follow.belongsTo(models.User,{
        foreignKey: ['userId', 'followingId'],
        onDelete: 'CASCADE'
    })
}