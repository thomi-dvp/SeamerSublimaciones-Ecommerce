import React, { useState } from 'react'
import './FaqsPage.css'

const FAQS = [
  {
    id: 'q1',
    q: '¿Cómo personalizo un producto?',
    a: 'Puedes elegir el producto y usar el formulario de personalización en la página del producto para subir tu diseño o escribir el texto que quieras imprimir.',
  },
  {
    id: 'q2',
    q: '¿Cuánto tarda el envío?',
    a: 'Los tiempos de producción suelen ser de 2-4 días hábiles. El envío depende de tu zona, generalmente entre 2-7 días hábiles adicionales.',
  },
  {
    id: 'q3',
    q: '¿Aceptan pedidos al por mayor?',
    a: 'Sí. Para pedidos grandes ofrecemos descuentos y atención personalizada. Contactanos a través del formulario de contacto para coordinar.',
  },
  {
    id: 'q4',
    q: '¿Qué tipo de archivos aceptan para impresión?',
    a: 'Preferimos archivos PNG o JPEG de alta resolución. También aceptamos PDF y SVG para ciertos productos. Si tenés dudas, enviá una consulta y te asesoramos.',
  },
]

const FaqsPage = () => {
  const [openId, setOpenId] = useState(null)

  function toggle(id) {
    setOpenId(prev => (prev === id ? null : id))
  }

  return (
    <div className="faqs-page">
      <h1 className="faqs-title">Preguntas Frecuentes</h1>
      <div className="faqs-list">
        {FAQS.map(item => (
          <div key={item.id} className={`faq-item ${openId === item.id ? 'open' : ''}`}>
            <div className="faq-question" role="button" tabIndex={0} onClick={() => toggle(item.id)} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggle(item.id) }}>
              <h3>{item.q}</h3>
              <div className="faq-chevron">▶</div>
            </div>
            <div className="faq-answer" aria-hidden={openId !== item.id}>
              {item.a}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FaqsPage
