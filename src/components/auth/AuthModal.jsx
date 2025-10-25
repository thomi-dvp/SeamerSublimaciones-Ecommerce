import React, { useState, useEffect } from 'react';
import UserLogin from './UserLogin';
import UserRegister from './UserRegister';
import './AuthForm.css';

const AuthModal = ({ isOpen, onClose }) => {
  const [isLoginView, setIsLoginView] = useState(true);
  
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    
    // Limpiamos el event listener cuando el componente se desmonta o el modal se cierra
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]); // El efecto depende de si el modal está abierto y de la función de cierre
  
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose} aria-label="Cerrar">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        {isLoginView ? (
          <UserLogin onSwitchToRegister={() => setIsLoginView(false)} />
        ) : (
          <UserRegister onSwitchToLogin={() => setIsLoginView(true)} />
        )}
      </div>
    </div>
  );
};

export default AuthModal;
