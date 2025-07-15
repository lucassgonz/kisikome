const supabase = require('../config/supabase');
exports.list = async (req, res) => {
  try {
    const cliente_id = req.user.id;

    // Busca carrinho existente
    let { data: carrinho, error: carrinhoErr } = await supabase
      .from('carrinho')
      .select('id')
      .eq('cliente_id', cliente_id)
      .single();

    // Se não existir, cria
    if (carrinhoErr || !carrinho) {
      const { data: novoCarrinho, error: novoErr } = await supabase
        .from('carrinho')
        .insert([{ cliente_id }])
        .select()
        .single();
      if (novoErr) return res.status(500).json({ error: novoErr.message });
      carrinho = novoCarrinho;
    }

    // Busca os itens do carrinho
    const { data: itens, error: itensErr } = await supabase
      .from('carrinho_item')
      .select('id, qtde, preco, produto:produto_id(nome)')
      .eq('carrinho_id', carrinho.id);

    if (itensErr) return res.status(500).json({ error: itensErr.message });

    res.json(itens);
  } catch (err) {
    console.error('[Erro ao buscar carrinho]', err);
    res.status(500).json({ error: 'Erro interno no servidor' });
  }
};

exports.add = async (req, res) => {
  try {
    const cliente_id = req.user.id;
    const { product_name, price, qty } = req.body;

    let { data: carrinho, error: carrinhoErr } = await supabase
      .from('carrinho')
      .select('id')
      .eq('cliente_id', cliente_id)
      .single();

    if (carrinhoErr || !carrinho) {
      const { data: novoCarrinho, error: novoErr } = await supabase
        .from('carrinho')
        .insert([{ cliente_id }])
        .select()
        .single();
      if (novoErr) return res.status(500).json({ error: novoErr.message });
      carrinho = novoCarrinho;
    }

    const { data: produto, error: produtoErr } = await supabase
      .from('produto')
      .select('id')
      .eq('nome', product_name)
      .single();

    if (produtoErr || !produto) return res.status(404).json({ error: 'Produto não encontrado' });

    const { data, error } = await supabase.from('carrinho_item').insert([
      {
        carrinho_id: carrinho.id,
        produto_id: produto.id,
        qtde: qty,
        preco: price,
      },
    ]);

    if (error) return res.status(500).json({ error: error.message });

    res.status(201).json(data);
  } catch (err) {
    console.error('[Erro ao adicionar ao carrinho]', err);
    res.status(500).json({ error: 'Erro interno no servidor' });
  }
};

exports.remove = async (req, res) => {
  try {
    const { id } = req.params;
    const { error } = await supabase.from('carrinho_item').delete().eq('id', id);
    if (error) return res.status(500).json({ error: error.message });
    res.status(204).end();
  } catch (err) {
    console.error('[Erro ao remover item do carrinho]', err);
    res.status(500).json({ error: 'Erro interno no servidor' });
  }
};