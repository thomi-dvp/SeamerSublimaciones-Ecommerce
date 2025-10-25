import React, { useState } from 'react';
import './AuthForm.css';

const UserLogin = ({ onSwitchToRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); // Limpiamos errores previos

    if (!email || !password) {
      setError('Por favor, completá todos los campos.');
      return;
    }

    console.log('Iniciando sesión con:', { email, password });
    // Aquí iría la lógica para autenticar al usuario
  };

  return (
    <div className="auth-form">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="login-email">Email</label>
          <input type="email" id="login-email" placeholder="tuemail@ejemplo.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="login-password">Contraseña</label>
          <input type="password" id="login-password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        {error && <p className="error-text">{error}</p>}
        <button type="submit" className="auth-btn">Ingresar</button>
      </form>
      <p className="switch-form-text">
        ¿No tenés cuenta? <button onClick={onSwitchToRegister} className="switch-form-btn">Registrate</button>
      </p>
    </div>
  );
};

export default UserLogin;
