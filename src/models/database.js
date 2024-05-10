const dotenv = require('dotenv')

dotenv.config()

const sequelize = require('sequelize')

const connection = new sequelize(
    process.env.DATABASE, 
    process.env.USER,
    process.env.PASSWORD,
    {
        host: process.env.HOST,
        dialect: process.env.DIALECT
    }
)

module.exports = connection