const supabase = require('../config/supabase');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
  const { email, senha } = req.body;

  // busca cliente
  const { data: client, error } = await supabase
    .from('cliente')
    .select('*')
    .eq('email', email)
    .single();

  if (error || !client) {
    return res.status(401).json({ error: 'Credenciais inválidas' });
  }

  const senhaOk = await bcrypt.compare(senha, client.senha_hash);
  if (!senhaOk) {
    return res.status(401).json({ error: 'Credenciais inválidas' });
  }

  const token = jwt.sign(
    { id: client.id, email: client.email },
    process.env.JWT_SECRET,
    { expiresIn: '2h' }
  );

  res.json({ token });
};

exports.register = async (req, res) => {
  const { nome, email, telefone, senha } = req.body;

  // Valida campos (simples)
  if (!email || !senha || !nome) {
    return res.status(400).json({ error: 'Nome, email e senha são obrigatórios' });
  }

  // Verifica se já existe
  const { data: existente } = await supabase
    .from('cliente')
    .select('id')
    .eq('email', email)
    .single();

  if (existente) {
    return res.status(409).json({ error: 'Email já cadastrado' });
  }

  // Cria hash
  const hash = await bcrypt.hash(senha, 10);

  // Insere
  const { data: cliente, error } = await supabase
    .from('cliente')
    .insert([{ nome, email, telefone, senha_hash: hash }])
    .select()
    .single();

  if (error) return res.status(500).json({ error: error.message });

  // Gera token
  const token = jwt.sign(
    { id: cliente.id, email: cliente.email },
    process.env.JWT_SECRET,
    { expiresIn: '2h' }
  );

  res.status(201).json({ token });
};
