const Cliente = require('../models/cliente.model');

exports.criarCliente = async (req, res) => {
  try {
    const cliente = await Cliente.criar(req.body);
    res.status(201).json(cliente);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};

exports.listarClientes = async (req, res) => {
  try {
    const clientes = await Cliente.listar();
    res.json(clientes);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};
