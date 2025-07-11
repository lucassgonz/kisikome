const supabase = require('../config/supabase');

exports.list = async (req, res) => {
  const { data, error } = await supabase.from('cart').select('*');
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};

exports.add = async (req, res) => {
  const { productId, qty } = req.body;
  const { data, error } = await supabase
    .from('cart')
    .insert([{ product_id: productId, qty }]);
  if (error) return res.status(500).json({ error: error.message });
  res.status(201).json(data);
};

exports.remove = async (req, res) => {
  const { id } = req.params;
  const { error } = await supabase.from('cart').delete().eq('id', id);
  if (error) return res.status(500).json({ error: error.message });
  res.status(204).end();
};
