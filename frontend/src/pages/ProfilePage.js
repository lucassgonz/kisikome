import React, { useEffect, useState } from 'react';
import api from '../services/api';

const PerfilPage = () => {
  const [cliente, setCliente] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/auth/profile')
      .then(res => setCliente(res.data))
      .catch(() => alert('Erro ao carregar perfil'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="p-4">Carregando perfil...</div>;

  return (
    <div className="page-container p-4">
      <h1 className="text-xl font-bold mb-4">Meu Perfil</h1>
      {cliente ? (
        <div className="bg-white shadow-md rounded-lg p-4 space-y-3 dark:bg-gray-800 dark:text-white">
          <p><strong>Nome:</strong> {cliente.nome}</p>
          <p><strong>Email:</strong> {cliente.email}</p>
          <p><strong>Telefone:</strong> {cliente.telefone || 'Não informado'}</p>
        </div>
      ) : (
        <p className="text-red-500">Erro ao carregar seus dados.</p>
      )}
    </div>
  );
};

export default PerfilPage;
