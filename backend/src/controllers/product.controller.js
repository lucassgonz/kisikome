const supabase = require('../config/supabase');

exports.list = async (req, res) => {
  const { data, error } = await supabase.from('produto').select('*');
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};
