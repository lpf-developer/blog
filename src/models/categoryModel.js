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
/**
 * Sincroniza o banco de dados com a aplicação, forçando a criação da tabela 
 * category. 
 * ATENÇÃO: Execute este comando apenas uma vez.
 */
//category.sync({force: true}) 

module.exports = category

/**
 * Sobre slug
 * Se uma categoria se chama geopolitica mundial, com slug será chamada 
 * geopolitica-mundial, no contexto das rotas da aplicação.
 */