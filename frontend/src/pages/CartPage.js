import React, { useEffect, useState } from 'react';
import api from '../services/api';

const CartPage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    api.get('/cart')
      .then(res => setItems(res.data))
      .catch(() => alert('Erro ao carregar carrinho'));
  }, []);

  const handleRemove = (id) => {
    api.delete(`/cart/${id}`)
      .then(() => setItems(items.filter(i => i.id !== id)))
      .catch(() => alert('Erro ao remover'));
  };

  return (
    <div className="page-container p-4">
      <h1 className="text-xl font-bold mb-4">Seu Carrinho</h1>
      {items.length === 0 ? (
        <p className="text-gray-500">Seu carrinho está vazio.</p>
      ) : (
        items.map(i => (
          <div key={i.id} className="cart-item flex justify-between items-center mb-3">
            <span>{i.produto?.nome} - {i.qtde}x R$ {i.preco.toFixed(2)}</span>
            <button
              onClick={() => handleRemove(i.id)}
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            >
              Remover
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default CartPage;