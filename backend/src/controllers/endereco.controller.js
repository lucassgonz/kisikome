const supabase  = require('../config/supabase');

exports.listar = async (req, res) => {
  const { id: cliente_id } = req.user;

  const { data, error } = await supabase
    .from('endereco')
    .select('*')
    .eq('cliente_id', cliente_id)
    .order('criado_em', { ascending: false });

  if (error) return res.status(500).json({ error: 'Erro ao buscar endereços' });
  res.json(data);
};

exports.criar = async (req, res) => {
  const { id: cliente_id } = req.user;
  const { apelido, logradouro, numero, complemento, bairro, cidade, estado, cep } = req.body;

  if (!logradouro || !cidade || !estado || !cep) {
    return res.status(400).json({ error: 'Campos obrigatórios não preenchidos' });
  }

  const { data, error } = await supabase
    .from('endereco')
    .insert([{ cliente_id, apelido, logradouro, numero, complemento, bairro, cidade, estado, cep }])
    .select()
    .single();

  if (error) return res.status(500).json({ error: 'Erro ao cadastrar endereço' });
  res.status(201).json(data);
};

exports.atualizar = async (req, res) => {
  const { id: cliente_id } = req.user;
  const enderecoId = req.params.id;
  const atualizacao = req.body;

  const { data, error } = await supabase
    .from('endereco')
    .update(atualizacao)
    .eq('id', enderecoId)
    .eq('cliente_id', cliente_id)
    .select()
    .single();

  if (error) return res.status(500).json({ error: 'Erro ao atualizar endereço' });
  res.json(data);
};

exports.remover = async (req, res) => {
  const { id: cliente_id } = req.user;
  const enderecoId = req.params.id;

  const { error } = await supabase
    .from('endereco')
    .delete()
    .eq('id', enderecoId)
    .eq('cliente_id', cliente_id);

  if (error) return res.status(500).json({ error: 'Erro ao excluir endereço' });
  res.json({ success: true });
};