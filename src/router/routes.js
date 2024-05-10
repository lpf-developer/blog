const express = require('express');
const router = express.Router();

// Rota GET
router.get('/', (req, res) => {
    res.render('index'); // exibe a ejs view engine "index.ejs"
});

// Rota GET para /about
router.get('/about', (req, res) => {
    res.send('Sobre nós');
});

module.exports = router;