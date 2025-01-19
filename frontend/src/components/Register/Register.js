import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import './register.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  function resetStates() {
    setName('');
    setEmail('');
    setPassword('');
    setconfirmPassword('');
  }

  async function handleSubmit(event) {
    //pegar os dados que setei no form abaixo com useState e
    //jogar na api do registro de usuários.
    setLoading(true);
    setError(null);
    event.preventDefault();

    try {
      const response = await api.post('/auth/register', {
        name,
        email,
        password,
        confirmPassword,
      });
    } catch (erro) {
      setError(erro.response?.data?.msg || 'Erro ao cadastrar');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="register-form">
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
        <div className="input-block">
          <label htmlFor="password">Confirme sua senha</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(event) => setconfirmPassword(event.target.value)}
            required
          />
        </div>
        <button id="btn_submit" type="submit">
          {loading ? 'Carregando...' : 'Cadastrar'}
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
