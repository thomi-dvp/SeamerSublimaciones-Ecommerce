import React from 'react'
import './OrderProcess.css'

const OrderProcess = () => {
  const steps = [
    {
      id: 1,
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 6H20M9 12H20M9 18H20M5 6V6.01M5 12V12.01M5 18V18.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Elegí tus productos',
      description: 'Navegá nuestro catálogo y seleccioná los productos que te gusten'
    },
    {
      id: 2,
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 5H6C4.89543 5 4 5.89543 4 7V18C4 19.1046 4.89543 20 6 20H17C18.1046 20 19 19.1046 19 18V13M17.5858 3.58579C18.3668 2.80474 19.6332 2.80474 20.4142 3.58579C21.1953 4.36683 21.1953 5.63316 20.4142 6.41421L11.8284 15H9L9 12.1716L17.5858 3.58579Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Personalizá tu diseño',
      description: 'Subí tu arte o trabajemos juntos en un diseño único'
    },
    {
      id: 3,
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 12L11 14L15 10M7.83333 4H16.1667C17.2667 4 18.1667 4.9 18.1667 6V18C18.1667 19.1 17.2667 20 16.1667 20H7.83333C6.73333 20 5.83333 19.1 5.83333 18V6C5.83333 4.9 6.73333 4 7.83333 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Confirmá tu pedido',
      description: 'Revisá los detalles y realizá el pago de forma segura'
    },
    {
      id: 4,
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 13L9 17L19 7M20.618 5.984C17.45 2.344 12.133 1.789 8.365 4.131C4.596 6.473 3.547 11.709 5.715 15.587C7.883 19.465 12.745 20.999 16.948 19.001C21.15 17.002 23.225 12.065 21.538 7.775" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: '¡Listo!',
      description: 'Recibí tu pedido en el tiempo estimado'
    }
  ]

  const deliveryInfo = [
    {
      title: 'Tiempos de producción',
      description: 'Los pedidos se procesan en 3-5 días hábiles'
    },
    {
      title: 'Envíos a todo el país',
      description: 'Mediante Correo Argentino o transporte a elección'
    },
    {
      title: 'Seguimiento online',
      description: 'Mantente informado del estado de tu pedido'
    }
  ]

  const customizationOptions = [
    'Variedad de colores y tamaños disponibles',
    'Opciones de diseños predefinidos',
    'Subí tu propio diseño o arte',
    'Asesoramiento personalizado',
    'Pruebas digitales antes de producción'
  ]

  return (
    <section className="order-process">
      <div className="process-steps">
        {steps.map(step => (
          <div className="process-step" key={step.id}>
            <div className="step-icon">
              {step.icon}
            </div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>

      <div className="delivery-info">
        <h3>Tiempos de entrega</h3>
        <div className="info-grid">
          {deliveryInfo.map((info, index) => (
            <div className="info-card" key={index}>
              <h4>{info.title}</h4>
              <p>{info.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="customization-options">
        <h3>Opciones de personalización</h3>
        <ul className="options-list">
          {customizationOptions.map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default OrderProcess