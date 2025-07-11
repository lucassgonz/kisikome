import { useNavigate, useLocation } from 'react-router-dom';
import api from '../services/api'
import {useState} from 'react'

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || '/';

  const handleLogin = () => {
    api.post('/auth/login', { email, senha })
      .then(res => {
        localStorage.setItem('token', res.data.token);
        navigate(from, { replace: true });
      })
      .catch(() => alert('Login inválido'));
  };

  return (
    <div className="page-container">
      <h1>Login</h1>
      <input
        type="text"
        placeholder="E-mail"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={e => setSenha(e.target.value)}
      />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
};

export default LoginPage;
