const sequelize  = require('sequelize')
const connection = require('./database')
const category   = connection.define('categories', {
    title:{
        type: sequelize.STRING,
        allowNull: false
    },slug:{
        type: sequelize.STRING,
        allowNull: false
    }
})
module.exports = category

/**
 * Sobre slug
 * Se uma categoria se chama geopolitica mundial, com slug será chamada 
 * geopolitica-mundial, no contexto das rotas da aplicação.
 */