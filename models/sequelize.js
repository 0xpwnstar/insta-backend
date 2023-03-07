const Sequelize = require("sequelize");
module.exports.sequelize = new Sequelize(
    'insta_backend',
    'admin',
    'C7508tan!',
    {
        host: 'database-2.cluster-ro-cyrq7glzuytr.ap-south-1.rds.amazonaws.com',
        dialect: 'mysql'
    }
)