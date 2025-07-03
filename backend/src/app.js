require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const clienteRoutes = require('./routes/cliente.routes'); 
// (Você criará essas rotas)

const app = express();
app.use(cors());
app.use(bodyParser.json());

// rotas
app.use('/api/clientes', clienteRoutes);

// exemplo rota base
app.get('/', (req, res) => res.send('API do Restaurante Online rodando 🚀'));

module.exports = app;
