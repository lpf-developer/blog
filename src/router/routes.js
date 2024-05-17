const express = require('express');
const router = express.Router();
const category = require('../models/categoryModel')
const slugify = require('slugify')

// Rota GET
router.get('/', (req, res) => {
    res.render('index'); // exibe a ejs view engine "index.ejs"
});

// Rotas de Categorias

// Cadastro de categorias
router.get('/admin/categories/new',(req,res) => {res.render('admin/categories/new')})

// Persistir categoria
router.post('/categories/save',(req,res) => {
    let title = req.body.title
    if(title != undefined){
        category.create({
            title: title,
            slug: slugify(title)
        }).then(() =>{
            res.redirect('/admin/categories')
        })
    }else{
        res.redirect('admin/categories/new')}
    }
)
// Excluir Categorias
router.post("/categories/delete", (req, res) => {
    var id = req.body.id;
    if (id != undefined) {
        if (!isNaN(id)) {
            category.destroy({
                where: {
                    id: id
                }
            }).then(() => {
                res.redirect("/admin/categories");
            });
        } else {// NÃO FOR UM NÚMERO
            res.redirect("/admin/categories");
        }
    } else { // NULL
        res.redirect("/admin/categories");
    }
});

// Formulário de Edição de uma Categoria
router.get("/admin/categories/edit/:id", (req, res) => {
    var id = req.params.id;

    if (isNaN(id)) {
        res.redirect("/admin/categories");
    }

    category.findByPk(id).then(category => {
        if (category != undefined) {
            res.render("admin/categories/edit", { category: category });
        } else {
            res.redirect("/admin/categories");
        }
    }).catch(erro => {
        res.redirect("/admin/categories");
    })
});

// Atualização de uma Categoria

router.post("/categories/update", (req, res) => {
    var id = req.body.id;
    var title = req.body.title;

    category.update({ title: title, slug: slugify(title) }, {
        where: {
            id: id
        }
    }).then(() => {
        res.redirect("/admin/categories");
    })

});

// Lista de Categorias
router.get('/admin/categories',(req,res)=>{
    category.findAll().then(categories =>{
        res.render('admin/categories/index',{categories: categories})
    })
})

// Rotas de artigos
router.get('/articles', (req, res) => {
    res.send("Artigos")
})


module.exports = router;