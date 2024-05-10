## Acessar o template engine EJS
***

Para acessar o template engine `ejs` a partir de um arquivo `src/app.js`, siga as instruções abaixo: 

```js
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();

// Configurações do EJS
app.set('views', path.join('src', 'views'));
app.set('view engine', 'ejs');

// Middleware para o Body Parser
app.use(bodyParser.urlencoded({ extended: true }));

// Rotas
const produtoController = require('./controllers/produtoController');
app.get('/', produtoController.listarProdutos);
app.get('/produto/criar', produtoController.exibirFormularioCriarProduto);
app.post('/produto/criar', produtoController.criarProduto);
app.get('/produto/:id/editar', produtoController.exibirFormularioEditarProduto);
app.post('/produto/:id/editar', produtoController.editarProduto);
app.post('/produto/:id/excluir', produtoController.excluirProduto);

// Configuração da porta
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
```
<div style='page-break-before:always'></div>

## Criar um arquivo de rotas e utilizá-lo no arquivo principal
***

```js
// routes.js
const express = require('express');
const router = express.Router();

// Rota GET
router.get('/', (req, res) => {
  res.send('Página inicial');
});

// Rota GET para /about
router.get('/about', (req, res) => {
  res.send('Sobre nós');
});

module.exports = router;

```
```js
// app.js (ou qualquer outro nome do seu arquivo principal)
const express = require('express');
const routes = require('./routes'); // Importa o arquivo de rotas

const app = express();

// Usa as rotas definidas no arquivo routes.js
app.use('/', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

```
<div style='page-break-before:always'></div>