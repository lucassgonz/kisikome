import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { format } from 'date-fns';
import { toast } from 'react-toastify';

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.get('/order')
      .then(res => setOrders(res.data))
      .catch(() => toast.error('Erro ao carregar pedidos.'));
  }, []);

  return (
    <div className="min-h-screen px-4 py-6 bg-orange-50 dark:bg-gray-900 transition-colors duration-300">
      <h1 className="text-2xl font-bold mb-6 text-orange-custom dark:text-white">Meus Pedidos</h1>

      {orders.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-300">Você ainda não fez nenhum pedido.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {orders.map(order => (
            <div
              key={order.id}
              className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow border border-orange-custom"
            >
              <p className="font-semibold text-lg text-orange-custom dark:text-white">
                Pedido #{order.id}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Status: <span className="font-medium">{order.status}</span>
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Data: {order.data ? format(new Date(order.data), 'dd/MM/yyyy HH:mm') : '---'}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Total: R$ {order.total ? Number(order.total).toFixed(2) : '0,00'}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrdersPage;