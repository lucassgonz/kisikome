import React, { useEffect, useState } from 'react';
import api from '../services/api';

const CartPage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    api.get('/cart').then(res => setItems(res.data));
  }, []);

  const handleRemove = (id) => {
    api.delete(`/cart/${id}`)
      .then(() => setItems(items.filter(i => i.id !== id)))
      .catch(() => alert('Erro ao remover'));
  };

  return (
    <div className="page-container p-4">
      <h1 className="text-xl font-bold mb-4">Seu Carrinho</h1>
      {items.map(i => (
        <div key={i.id} className="cart-item flex justify-between items-center mb-3">
          <span>{i.product_name} - {i.qty}x R$ {i.price}</span>
          <button onClick={() => handleRemove(i.id)} className="bg-red-500 text-white px-2 py-1 rounded">
            Remover
          </button>
        </div>
      ))}
    </div>
  );
};

export default CartPage;
