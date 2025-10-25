import React, { useState } from 'react';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para suscribir al newsletter
    console.log('Email suscrito:', email);
    setSubscribed(true);
    setEmail('');
    
    // Resetear el estado después de 3 segundos
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <div className="newsletter-form">
      {subscribed ? (
        <div className="success-message">
          ✅ ¡Gracias por suscribirte!
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="tu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="newsletter-input"
          />
          <button type="submit" className="newsletter-btn">
            Unirme
          </button>
        </form>
      )}
      <p className="newsletter-note">
        Tips semanales de sublimación sin spam
      </p>
    </div>
  );
};

export default NewsletterForm;