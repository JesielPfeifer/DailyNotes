import React, { useState } from 'react';
import api from '../../services/api';
import './login.css';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  function resetStates() {
    setName('');
    setEmail('');
    setPassword('');
  }
  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await api.post('/auth/login', {
        name,
        email,
        password,
      });
      if (response.status === 200) {
        const token = response.data.token;
        resetStates();
        localStorage.setItem('authToken', token);
        navigate('/app');
      }
    } catch (error) {
      setError(error.response?.data?.msg || 'Erro ao fazer login');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <div className="input-block">
          <label htmlFor="username">Usuário</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Nome"
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        <div className="input-block">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="exemplo@exemplo.com.br"
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="input-block">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <button id="btn_submit" type="submit">
          {loading ? 'Carregando...' : 'Login'}
        </button>
      </form>
      {message && (
        <div
          style={{
            color: 'green',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {message}
        </div>
      )}
      {error && (
        <div
          style={{
            color: 'red',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {error}
        </div>
      )}
    </div>
  );
}

export default Register;
