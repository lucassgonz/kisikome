import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

const OrderDetailsPage = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    api.get(`/order/${id}`).then(res => setOrder(res.data));
  }, [id]);

  if (!order) return <p>Carregando...</p>;

  return (
    <div className="page-container">
      <h1>Detalhes do Pedido #{order.id}</h1>
      <p>Status: {order.status}</p>
      <p>Total: R$ {order.total}</p>
      <h2>Itens</h2>
      <ul>
        {order.items.map(i => (
          <li key={i.id}>{i.produto_nome} - {i.qtde}x R$ {i.preco}</li>
        ))}
      </ul>
    </div>
  );
};

export default OrderDetailsPage;
