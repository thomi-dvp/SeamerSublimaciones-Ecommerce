import React, { useState } from 'react';
import './AuthForm.css';

const UserRegister = ({ onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    // Extraemos el nombre del campo del id (ej: 'register-name' -> 'name')
    const fieldName = id.replace('register-', '');
    setFormData(prev => ({ ...prev, [fieldName]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'El nombre es obligatorio.';
    if (!formData.email) {
      newErrors.email = 'El email es obligatorio.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El formato del email no es válido.';
    }
    if (formData.password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres.';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden.';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log('Formulario válido, registrando usuario:', formData);
      // Aquí iría la lógica para registrar al usuario (ej: llamada a una API)
    }
  };

  return (
    <div className="auth-form">
      <h2>Crear Cuenta</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="register-name">Nombre</label>
          <input type="text" id="register-name" placeholder="Tu Nombre" value={formData.name} onChange={handleChange} required />
          {errors.name && <p className="error-text">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="register-email">Email</label>
          <input type="email" id="register-email" placeholder="tuemail@ejemplo.com" value={formData.email} onChange={handleChange} required />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="register-password">Contraseña</label>
          <input type="password" id="register-password" placeholder="Mínimo 6 caracteres" value={formData.password} onChange={handleChange} required />
          {errors.password && <p className="error-text">{errors.password}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="register-confirmPassword">Confirmar Contraseña</label>
          <input type="password" id="register-confirmPassword" placeholder="Repetí tu contraseña" value={formData.confirmPassword} onChange={handleChange} required />
          {errors.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}
        </div>
        <button type="submit" className="auth-btn">Registrarse</button>
      </form>
      <p className="switch-form-text">
        ¿Ya tenés cuenta? <button onClick={onSwitchToLogin} className="switch-form-btn">Iniciá Sesión</button>
      </p>
    </div>
  );
};

export default UserRegister;
