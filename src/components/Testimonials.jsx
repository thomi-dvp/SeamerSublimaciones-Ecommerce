import React from 'react'
import './Testimonials.css'

const testimonials = [
  {
    id: 1,
    name: 'María L.',
    image: 'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?auto=format&fit=crop&w=200&q=80',
    productImage: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=300&q=80',
    text: '¡Me encantaron las tazas personalizadas! La calidad de impresión es excelente y el servicio super profesional.',
    rating: 5
  },
  {
    id: 2,
    name: 'Juan P.',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80',
    productImage: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?auto=format&fit=crop&w=300&q=80',
    text: 'Hicimos remeras para todo el equipo y quedaron increíbles. Los colores son vibrantes y la tela muy cómoda.',
    rating: 5
  },
  {
    id: 3,
    name: 'Carolina M.',
    image: 'https://images.unsplash.com/photo-1619895862022-09114b41f16f?auto=format&fit=crop&w=200&q=80',
    productImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=300&q=80',
    text: 'Los almohadones quedaron hermosos, justo como los imaginaba. Definitivamente volveré a comprar.',
    rating: 5
  }
]

const Testimonials = () => {
  return (
    <section className="testimonials">
      

      <div className="testimonials-grid">
        {testimonials.map(testimonial => (
          <div className="testimonial-card" key={testimonial.id}>
            <div className="testimonial-header">
              <div className="testimonial-author">
                <img src={testimonial.image} alt={testimonial.name} className="author-image" />
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <div className="rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <p className="testimonial-text">{testimonial.text}</p>
            <div className="testimonial-product">
              <img src={testimonial.productImage} alt="Producto" />
            </div>
          </div>
        ))}
      </div>

      <div className="quality-highlights">
        <h3>Por qué elegir nuestros productos</h3>
        <div className="highlights-grid">
          <div className="highlight">
            <h4>✨ Calidad Premium</h4>
            <p>Materiales seleccionados y técnicas avanzadas de sublimación</p>
          </div>
          <div className="highlight">
            <h4>🎨 Colores Vibrantes</h4>
            <p>Impresión de alta definición que mantiene su intensidad</p>
          </div>
          <div className="highlight">
            <h4>♻️ Productos Duraderos</h4>
            <p>Resistentes al uso diario y al lavado</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials