const supabase  = require('../config/supabase');


exports.listByClient = async (req, res) => {
  const { id } = req.user;
  const { data, error } = await supabase
    .from('pedido')
    .select('*')
    .eq('cliente_id', id);

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};

exports.details = async (req, res) => {
  const { id } = req.params;

  const { data: pedido, error } = await supabase
    .from('pedido')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !pedido) return res.status(404).json({ error: 'Pedido não encontrado' });

  const { data: items, error: itemsError } = await supabase
    .from('pedido_item')
    .select('*, produto ( nome )')
    .eq('pedido_id', id);

  if (itemsError) return res.status(500).json({ error: itemsError.message });

  res.json({
    ...pedido,
    items: items.map(i => ({
      id: i.id,
      qtde: i.qtde,
      preco: i.preco,
      produto_nome: i.produto.nome
    }))
  });
};

exports.create = async (req, res) => {
  const { id: cliente_id } = req.user;
  const { items } = req.body; 

  try {
    const { data: pedido, error: pedidoError } = await supabase
      .from('pedido')
      .insert({ cliente_id })
      .select()
      .single();

    if (pedidoError) throw pedidoError;

    const itensParaInserir = items.map(item => ({
      pedido_id: pedido.id,
      produto_id: item.produto_id,
      qtde: item.qtde,
      preco: item.preco,
    }));

    const { error: itensError } = await supabase
      .from('pedido_item')
      .insert(itensParaInserir);

    if (itensError) throw itensError;

    res.status(201).json({ message: 'Pedido criado com sucesso', pedidoId: pedido.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
