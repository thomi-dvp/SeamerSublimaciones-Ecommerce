import React from 'react'
import './Testimonials.css'

// 1. Importar Swiper y sus módulos
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
  },
  {
    id: 4,
    name: 'Lucas G.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    productImage: 'https://images.unsplash.com/photo-1588850561407-ed28a28a8945?auto=format&fit=crop&w=300&q=80',
    text: 'Las gorras que pedí para mi emprendimiento quedaron geniales. Muy buena atención y rapidez en la entrega.',
    rating: 5
  },
  {
    id: 5,
    name: 'Sofía R.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    productImage: 'https://images.unsplash.com/photo-1615916342992-928de4593460?auto=format&fit=crop&w=300&q=80',
    text: 'El mousepad con la foto de mi mascota es lo más. La calidad de la imagen es perfecta, ¡gracias!',
    rating: 5
  },
  {
    id: 6,
    name: 'Martín F.',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=200&q=80',
    productImage: 'https://images.unsplash.com/photo-1579108333313-2b6953355c6c?auto=format&fit=crop&w=300&q=80',
    text: 'Compré un bolso de tela y lo uso para todo. Es súper práctico y el estampado resiste los lavados.',
    rating: 4
  },
  {
    id: 7,
    name: 'Valentina S.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    productImage: 'https://images.unsplash.com/photo-1579680189351-b0186d07810c?auto=format&fit=crop&w=300&q=80',
    text: 'El jarro térmico es mi nuevo compañero de oficina. Mantiene el café caliente por horas y el diseño es único.',
    rating: 5
  }
]

const Testimonials = () => {
  return (
    <section className="testimonials">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
        className="testimonials-carousel"
      >
        {testimonials.map(testimonial => (
          <SwiperSlide key={testimonial.id}>
            <div className="testimonial-card">
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
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials