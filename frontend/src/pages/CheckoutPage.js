// src/pages/CheckoutPage.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import api from '../services/api';

const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Recebendo os dados via location.state
  const items = location.state?.items || [];
  const total = location.state?.total || 0;

  const handleConfirmPayment = () => {
    if (items.length === 0) {
      alert('Carrinho vazio.');
      return;
    }

    const formattedItems = items.map(i => ({
      produto_id: i.produto_id || i.produto?.id,
      qtde: i.qtde,
      preco: i.preco
    }));

    api.post('/order', { items: formattedItems })
      .then(() => {
        alert('Pagamento confirmado!');
        navigate('/orders');
      })
      .catch((err) => {
        console.error('[Erro ao confirmar pagamento]', err);
        alert('Erro ao confirmar pagamento');
      });
  };

  return (
    <div className="page-container p-4">
      <h1 className="text-2xl font-bold mb-4">Confirmação de Pagamento</h1>

      <p className="mb-4 text-lg">
        Valor total: <strong>R$ {Number(total).toFixed(2)}</strong>
      </p>

      <div className="flex gap-4">
        <button
          onClick={() => navigate('/cart')}
          className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
        >
          Voltar ao Carrinho
        </button>

        <button
          onClick={handleConfirmPayment}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Confirmar Pagamento
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
