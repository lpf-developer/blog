const express = require('express');
const router = express.Router();

// Rota GET
router.get('/', (req, res) => {
    res.render('index'); // exibe a ejs view engine "index.ejs"
});

// Rotas de Categorias
router.get('/admin/categories/new',(req,res) => {res.render('admin/categories/new')})

// Rotas de artigos
router.get('/articles', (req, res) => {
    res.send("Artigos")
})


module.exports = router;