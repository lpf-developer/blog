const sequelize = require('sequelize')
const connection = require('./database')
const category = require('./categoryModel')

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
category.hasMany(article) // Uma categoria tem muitos artigos
article.belongsTo(category) // Um artigo pertence a uma categoria

/**
 * Sincroniza o banco de dados com a aplicação, forçando a criação da tabela 
 * article. 
 * ATENÇÃO: Execute este comando apenas uma vez.
 */
//article.sync({force: true}) 

module.exports = article

/**
 * Sobre slug
 * Se um artico se chama geopolitica mundial, com slug será chamada 
 * geopolitica-mundial, no contexto das rotas da aplicação.
 */