const db = require('../config/db');

const Cliente = {
  async criar(cliente) {
    const { nome, email, telefone, endereco } = cliente;
    const result = await db.query(
      'INSERT INTO cliente (nome, email, telefone, endereco) VALUES ($1, $2, $3, $4) RETURNING *',
      [nome, email, telefone, endereco]
    );
    return result.rows[0];
  },

  async listar() {
    const result = await db.query('SELECT * FROM cliente');
    return result.rows;
  },

  // outros métodos: buscarPorId, atualizar, deletar...
};

module.exports = Cliente;
