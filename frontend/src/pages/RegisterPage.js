import React, { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const RegisterPage = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    if (!nome || !email || !telefone || !senha) {
      toast.warn('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    api.post('/auth/register', { nome, email, telefone, senha })
      .then(res => {
        localStorage.setItem('token', res.data.token);
        toast.success('Conta criada com sucesso!');
        navigate('/');
      })
      .catch(() => {
        toast.error('Erro ao registrar. Verifique os dados.');
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-orange-50 dark:bg-gray-900 px-4 transition-colors duration-300">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-orange-custom dark:text-white mb-6">Criar Conta</h1>

        <input
          placeholder="Nome completo"
          value={nome}
          onChange={e => setNome(e.target.value)}
          className="w-full mb-3 p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-custom dark:bg-gray-700 dark:text-white"
        />
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full mb-3 p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-custom dark:bg-gray-700 dark:text-white"
        />
        <input
          placeholder="Telefone"
          type="tel"
          value={telefone}
          onChange={e => setTelefone(e.target.value)}
          className="w-full mb-3 p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-custom dark:bg-gray-700 dark:text-white"
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={e => setSenha(e.target.value)}
          className="w-full mb-6 p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-custom dark:bg-gray-700 dark:text-white"
        />

        <button
          onClick={handleRegister}
          className="w-full bg-orange-custom text-white py-3 rounded hover:brightness-90 transition"
        >
          Registrar
        </button>

        <button
          onClick={() => navigate('/login')}
          className="w-full mt-4 py-2 border border-orange-custom text-orange-custom rounded hover:bg-orange-100 dark:hover:bg-gray-700 transition"
        >
          Já tenho conta
        </button>
      </div>
    </div>
  );
};

export default RegisterPage;