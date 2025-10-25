import React from 'react';

const PaymentMethods = () => {
  const paymentMethods = [
    {
      name: "Tarjeta de crédito",
      icon: <svg id="Ebene_1" dataName="Ebene 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 80">
              <path d="M46.61,24.32,33.26,56.18H24.54L18,30.76c-.41-1.57-.75-2.14-2-2.8a34.65,34.65,0,0,0-8.14-2.71l.2-.93h14a3.84,3.84,0,0,1,3.8,3.25L29.38,46,38,24.32ZM80.75,45.78c0-8.41-11.63-8.86-11.55-12.62,0-1.15,1.11-2.37,3.49-2.67a15.46,15.46,0,0,1,8.13,1.42l1.45-6.76a22.2,22.2,0,0,0-7.71-1.41c-8.15,0-13.88,4.34-13.93,10.54-.05,4.58,4.09,7.14,7.22,8.67s4.28,2.56,4.27,4c0,2.14-2.56,3.07-4.93,3.11a17.23,17.23,0,0,1-8.47-2l-1.49,7a25.05,25.05,0,0,0,9.17,1.7c8.65,0,14.32-4.29,14.35-10.91m21.51,10.4h7.62l-6.65-31.86h-7a3.77,3.77,0,0,0-3.51,2.34L80.32,56.18H89l1.72-4.75h10.57ZM93.06,44.9l4.34-12,2.5,12ZM58.39,24.32,51.57,56.18H43.32l6.83-31.86Z" fill="currentColor"/>
            </svg>
    },
    { 
      name: "Tarjeta de débito", 
      icon: <svg id="Ebene_1" dataName="Ebene 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 80">
              <g>
                <rect x="48.38" y="21.01" width="23.25" height="37.98" style={{ fill: '#ff5f00' }} />
                <path d="M50.77,40c0-7.41,3.4-14.41,9.22-18.99-10.49-8.24-25.67-6.42-33.91,4.07-8.24,10.49-6.42,25.67,4.07,33.91,8.76,6.88,21.09,6.88,29.85,0-5.83-4.58-9.23-11.58-9.22-18.99Z" fill="#eb001b" />
                <path d="M96.77,54.97v-.78h.34v-.16h-.8v.16h.32v.78h.15Zm1.55,0v-.94h-.24l-.28,.67-.28-.67h-.24v.94h.17v-.71l.26,.61h.18l.26-.61v.71h.17Z" fill="#f79e1b" />
                <path d="M99.08,40c0,13.34-10.81,24.15-24.15,24.15-5.41,0-10.67-1.82-14.93-5.17,10.49-8.24,12.31-23.43,4.07-33.91-1.19-1.51-2.55-2.88-4.07-4.07,10.49-8.24,25.67-6.43,33.91,4.06,3.35,4.26,5.17,9.51,5.17,14.93h0Z" fill="#f79e1b" />
              </g>
            </svg>
    },
    { 
      name: "Mercado Pago", 
      // Usamos una etiqueta <img> para cargar el SVG desde la carpeta public
      icon: <img src="/Mercado-Pago-Icon-Logo-Vector.svg-.png" alt="Mercado Pago" />
    },  
    
  ];

  return (
    <div className="footer-section payment-methods-section">
      <h4 className="payment-title">Medios de pago</h4>
      <ul className="payment-list">
        {paymentMethods.map((method, index) => (
          <li key={index} className="payment-item">
            <div className="payment-icon" aria-label={method.name}>{method.icon}</div>
            <span>{method.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentMethods;