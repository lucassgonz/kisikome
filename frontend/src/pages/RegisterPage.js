import React, { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    api.post('/auth/register', { nome, email, telefone, endereco, senha })
      .then(res => {
        localStorage.setItem('token', res.data.token);
        navigate('/'); // redireciona para home
      })
      .catch(() => alert('Erro ao registrar'));
  };

  return (
    <div className="page-container">
      <h1>Cadastro</h1>
      <input placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} />
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder="Telefone" value={telefone} onChange={e => setTelefone(e.target.value)} />
      <input placeholder="Endereço" value={endereco} onChange={e => setEndereco(e.target.value)} />
      <input type="password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)} />
      <button onClick={handleRegister}>Registrar</button>
    </div>
  );
};

export default RegisterPage;
