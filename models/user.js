module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        'user',{
            id : { type: DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true
            },
            firstname: {
                type: DataTypes.STRING(30),
                allowNull: false
            },
            lastname: {
                type: DataTypes.STRING(30),
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                validate: {
                    isEmail: true 
                },
                allowNull: false
            },
            password: {
                type: DataTypes.STRING(64),
                allowNull: false
            },
            salt: {
                type: DataTypes.STRING(12),
                allowNull: false
            }
        }
    );
    User.associate = (models) => {
        User.hasMany(models.Follow,{
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
    return User;
}