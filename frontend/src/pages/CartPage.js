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
    <div className="page-container">
      <h1>Seu Carrinho</h1>
      {items.map(i => (
        <div key={i.id} className="cart-item">
          <span>{i.product_name} - {i.qty}x R$ {i.price}</span>
          <button onClick={() => handleRemove(i.id)}>Remover</button>
        </div>
      ))}
    </div>

  );
};

export default CartPage;
