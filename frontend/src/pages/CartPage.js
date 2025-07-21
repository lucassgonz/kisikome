import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const CartPage = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

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

  const groupedItems = items.reduce((acc, item) => {
    const key = item.produto_id || item.produto?.id;
    if (!acc[key]) {
      acc[key] = {
        ...item,
        qtde: item.qtde,
        subtotal: item.qtde * item.preco,
      };
    } else {
      acc[key].qtde += item.qtde;
      acc[key].subtotal += item.qtde * item.preco;
    }
    return acc;
  }, {});

  const groupedArray = Object.values(groupedItems);
  const total = groupedArray.reduce((acc, i) => acc + i.subtotal, 0);

  const handleCheckout = () => {
  if (items.length === 0) return;
  navigate('/checkout', { state: { items, total } });
};


  return (
    <div className="page-container p-4">
      <h1 className="text-xl font-bold mb-4">Seu Carrinho</h1>

      {groupedArray.length === 0 ? (
        <p className="text-gray-500">Seu carrinho está vazio.</p>
      ) : (
        <>
          {groupedArray.map(i => (
            <div key={i.produto_id || i.produto?.id} className="cart-item flex justify-between items-center mb-3">
              <span>
                {i.qtde}x {i.produto?.nome} – R$ {i.subtotal.toFixed(2)}
              </span>
              <button
                onClick={() => handleRemove(i.id)}
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
              >
                Remover
              </button>
            </div>
          ))}

          <div className="mt-6 text-right font-semibold">
            Total: R$ {total.toFixed(2)}
          </div>

          <div className="text-right mt-4">
            <button
              onClick={handleCheckout}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Finalizar Pedido
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
