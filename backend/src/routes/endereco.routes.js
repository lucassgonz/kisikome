const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const EnderecoController = require('../controllers/endereco.controller');

router.get('/', auth, EnderecoController.listar);
router.post('/', auth, EnderecoController.criar);
router.put('/:id', auth, EnderecoController.atualizar);
router.delete('/:id', auth, EnderecoController.remover);

module.exports = router;