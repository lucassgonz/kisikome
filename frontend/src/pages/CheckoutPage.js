import React, { useState } from 'react';
import api from '../services/api';

const CheckoutPage = () => {
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('PIX');

  const handleCheckout = () => {
    api.post('/order', {
      address,
      paymentMethod
    }).then(() => alert('Pedido realizado!'))
      .catch(() => alert('Erro ao finalizar pedido'));
  };

  return (
    <div>
      <h1>Finalizar Pedido</h1>

      <h2>Endereço</h2>
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Digite seu endereço"
      />

      <h2>Forma de Pagamento</h2>
      <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
        <option value="PIX">PIX</option>
        <option value="Cartão Crédito">Cartão de Crédito</option>
        <option value="Débito">Débito</option>
      </select>

      <button onClick={handleCheckout}>Confirmar Pedido</button>
    </div>
  );
};

export default CheckoutPage;
