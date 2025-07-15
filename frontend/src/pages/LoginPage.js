import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import api from '../services/api';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleLogin = () => {
    if (!email || !senha) {
      toast.warn('Preencha todos os campos.');
      return;
    }

    api.post('/auth/login', { email, senha })
      .then(res => {
        localStorage.setItem('token', res.data.token);
        toast.success('Login realizado com sucesso!');
        navigate(from, { replace: true });
      })
      .catch(() => {
        toast.error('Login inválido. Verifique seu e-mail e senha.');
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-orange-50 dark:bg-gray-900 px-4 transition-colors duration-300">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-orange-custom dark:text-white mb-6">Login</h1>

        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full mb-4 p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-custom dark:bg-gray-700 dark:text-white"
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={e => setSenha(e.target.value)}
          className="w-full mb-6 p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-custom dark:bg-gray-700 dark:text-white"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-orange-custom text-white py-3 rounded hover:brightness-90 transition"
        >
          Entrar
        </button>

        <button
          onClick={() => navigate('/register')}
          className="w-full mt-4 py-2 border border-orange-custom text-orange-custom rounded hover:bg-orange-100 dark:hover:bg-gray-700 transition"
        >
          Criar conta
        </button>
      </div>
    </div>
  );
};

export default LoginPage;