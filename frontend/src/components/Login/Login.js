import React, { useState } from 'react';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-block">
        <label htmlFor="username">Usuário</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Nome"
          required
        />
      </div>
      <div className="input-block">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          pattern=".+@example\.com"
          placeholder="exemplo@exemplo.com.br"
          required
        />
      </div>
      <div className="input-block">
        <label htmlFor="password">Senha</label>
        <input type="password" id="password" name="password" required />
      </div>
      <button id="btn_submit" type="submit">
        login
      </button>
    </form>
  );
}

export default Register;
