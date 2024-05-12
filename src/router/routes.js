const express = require('express');
const router = express.Router();
const category = require('../models/categoryModel')
const slugify = require('slugify')

// Rota GET
router.get('/', (req, res) => {
    res.render('index'); // exibe a ejs view engine "index.ejs"
});

// Rotas de Categorias
router.get('/admin/categories/new',(req,res) => {res.render('admin/categories/new')})

router.post('/categories/save',(req,res) => {
    let title = req.body.title
    if(title != undefined){
        category.create({
            title: title,
            slug: slugify(title)
        }).then(() =>{
            res.redirect('/')
        })
    }else{
        res.redirect('admin/categories/new')}
    }
)

router.get('/admin/categories',(req,res)=>{
    res.render('admin/categories/index')
})

// Rotas de artigos
router.get('/articles', (req, res) => {
    res.send("Artigos")
})


module.exports = router;