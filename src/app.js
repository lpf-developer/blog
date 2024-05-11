// variáveis de ambiente
const dotenv = require('dotenv')
dotenv.config()

// framework
const express = require('express')
const app = express()

// extração de dados de requisições http
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// rotas
const routes = require('./router/routes')
app.use('/', routes)

// ejs
const path = require('path');
app.set('views', path.join('src', 'views'));
app.set('view engine', 'ejs');

// uso de arquivos estáticos (css, js, imagens, etc)
app.use(express.static('public'))

// conexão com a base de dados
const connection = require('./models/database')
connection.sync().then(()=>{
    console.log(
        `Aplicação conectada ao banco de dados: ${process.env.DATABASE}` 
    )
}).catch((err)=>{
    console.log(
        `Erro ao conectar-se com o banco de dados ${process.env.DATABASE}`, err
    )
})

// importando tabelas do banco de dados a serem geradas via sequelize
const category = require('./models/categoryModel')
const article = require('./models/articleModel')

// servidor
const PORT = process.env.PORT
app.listen(PORT, ()=>{
    console.log(`Aplicativo rodando em http://localhost:${PORT}`)
})