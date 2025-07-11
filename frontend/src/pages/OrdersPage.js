import React, { useEffect, useState } from 'react';
import api from '../services/api';

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.get('/order').then(res => setOrders(res.data));
  }, []);

  return (
    <div className="page-container">
      <h1>Meus Pedidos</h1>
      {orders.map(o => (
        <div key={o.id} className="order-card">
          <p>Pedido #{o.id}</p>
          <p>Status: {o.status}</p>
          <p>Total: R$ {o.total}</p>
        </div>
      ))}
    </div>
  );
};

export default OrdersPage;
