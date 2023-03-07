const models = require('./index');
const User = models.sequelize.define(
    'user',{
        id : { type: models.Sequelize.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        firstname: {
            type: models.Sequelize.STRING(30),
            allowNull: false
        },
        lastname: {
            type: models.Sequelize.STRING(30),
            allowNull: false
        },
        email: {
            type: models.Sequelize.STRING,
            validate: {
                isEmail: true 
            },
            allowNull: false
        },
        password: {
            type: models.Sequelize.STRING(64),
            allowNull: false
        },
        salt: {
            type: models.Sequelize.STRING(12),
            allowNull: false
        }
    }
)
