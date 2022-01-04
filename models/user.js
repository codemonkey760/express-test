const { Sequelize, Model, DataTypes } = require('sequelize')
const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASS_WORD)

class User extends Model {}
User.init({
    id: DataTypes.INTEGER,
    user_name: DataTypes.STRING,
    pass_word: DataTypes.STRING
}, {
    sequelize,
    modelName: 'user'
})

module.export = User