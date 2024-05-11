const sequelize = require('sequelize')
const connection = require('./database')
const article = connection.define('articles', {
    title: {
        type: sequelize.STRING,
        allowNull: false
    }, 
    slug: {
        type: sequelize.STRING,
        allowNull: false
    },
    body:{
        type: sequelize.TEXT,
        allowNull: false
    }
})
module.exports = article

/**
 * Sobre slug
 * Se um artico se chama geopolitica mundial, com slug será chamada 
 * geopolitica-mundial, no contexto das rotas da aplicação.
 */