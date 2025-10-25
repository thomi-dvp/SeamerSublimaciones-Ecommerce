import React from 'react'
import { Link } from 'react-router-dom'

// 1. Importar Swiper y sus módulos
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './HomePage.css'
import ProductComponent from '../components/ProductComponent'
import { useCart } from '../context/CartContext'
import BackgroundCarousel from '../components/BackgroundCarousel'
import Categories from '../components/Categories'
import OrderProcess from '../components/OrderProcess'
import Testimonials from '../components/Testimonials'

// SVG icons for features
const QualityIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 15L8.5 12L12 9M12 15L15.5 12L12 9M12 15V9" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#2563eb" strokeWidth="1.5"/>
  </svg>
)

const CustomizeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 5L19 9M19 9L15 13M19 9H9M9 19L5 15M5 15L9 11M5 15H15" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

const ShippingIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 7L17 11M17 11L13 15M17 11H3M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

const featured = [
  {
    id: 1,
    name: 'Taza personalizada',
    description: 'Taza de cerámica con diseño a elección.',
    price: 2500,
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 2,
    name: 'Remera estampada',
    description: 'Remera 100% algodón con estampado personalizado.',
    price: 4500,
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 3,
    name: 'Almohadón decorativo',
    description: 'Almohadón sublimado, varios tamaños y colores.',
    price: 3200,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 4,
    name: 'Gorra Trucker',
    description: 'Gorra con frente sublimable, ideal para logos.',
    price: 3800,
    image: 'https://images.unsplash.com/photo-1588850561407-ed28a28a8945?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 5,
    name: 'Llavero Personalizado',
    description: 'Llavero de polímero con tu foto o diseño.',
    price: 1500,
    image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 6,
    name: 'Mousepad Sublimado',
    description: 'Base de goma antideslizante y superficie de tela.',
    price: 2800,
    image: 'https://images.unsplash.com/photo-1615916342992-928de4593460?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 7,
    name: 'Jarro Térmico',
    description: 'Mantené tus bebidas a la temperatura ideal.',
    price: 4200,
    image: 'https://images.unsplash.com/photo-1579680189351-b0186d07810c?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 8,
    name: 'Rompecabezas',
    description: 'Un regalo original con tu foto favorita.',
    price: 3500,
    image: 'https://images.unsplash.com/photo-1561816544-21ec92675e25?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 9,
    name: 'Bolso de Tela',
    description: 'Tote bag de tela, ideal para uso diario.',
    price: 3000,
    image: 'https://images.unsplash.com/photo-1579108333313-2b6953355c6c?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 10,
    name: 'Funda de Celular',
    description: 'Protegé tu celular con un diseño 100% tuyo.',
    price: 2900,
    image: 'https://images.unsplash.com/photo-1598331666166-2b13a34383c9?auto=format&fit=crop&w=400&q=80',
  },
]

const HomePage = () => {
  const { addItem } = useCart();
  return (
    <div className="home-page">
      <section className="hero">
        <BackgroundCarousel />
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Dale vida a tus ideas con productos sublimados
            </h1>
            <p className="hero-sub">Regalos únicos, merchandising para tu marca y recuerdos personalizados con la mejor calidad.</p>
            <div className="hero-cta">
              <Link to="/productos" className="btn-primary">
                Ver Productos
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link to="/sobre-nosotros" className="btn-ghost">Sobre Nosotros</Link>
            </div>
          </div>
          
        </div>
      </section>

      <section className="featured-products">
        <div className="section-header" style={{ textAlign: 'center', flexDirection: 'column', marginBottom: '3rem' }}>
          <h2>¿Por qué confiar en nosotros?</h2>
          <p style={{ color: 'var(--muted)', fontSize: '1.1rem', maxWidth: '700px' }}>
            Combinamos pasión y tecnología para ofrecerte productos que superen tus expectativas.
          </p>
        </div>
        <div className="features">
          <div className="feature">
            <div className="feature-icon">
              <QualityIcon />
            </div>
            <h3>Calidad profesional</h3>
            <p>Materiales resistentes y estampados duraderos para que tu diseño perdure.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">
              <CustomizeIcon />
            </div>
            <h3>Personalización simple</h3>
            <p>Subí tu arte o diseñá con nuestras plantillas en pocos pasos.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">
              <ShippingIcon />
            </div>
            <h3>Envíos rápidos</h3>
            <p>Producción y despacho nacional en tiempos competitivos.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15L8.5 12L12 9M12 15L15.5 12L12 9M12 15V9" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#2563eb" strokeWidth="1.5"/>
              </svg>
            </div>
            <h3>Calidad Premium</h3>
            <p>Materiales seleccionados y técnicas avanzadas de sublimación</p>
          </div>
          <div className="feature">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.389 7.611l-5.778 5.778M5.121 15.343A6.002 6.002 0 0015.343 5.12a6 6 0 00-10.222 10.223zM18.879 8.657a6 6 0 00-10.222 10.222A6.002 6.002 0 0018.88 8.657z" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <h3>Colores Vibrantes</h3>
            <p>Impresión de alta definición que mantiene su intensidad</p>
          </div>
          <div className="feature">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <h3>Productos Duraderos</h3>
            <p>Resistentes al uso diario y al lavado</p>
          </div>
        </div>
      </section>

      <section className="featured-products">
        <div className="container">
          <div className="section-header">
            <h2>Productos destacados</h2>
            <Link to="/productos" className="view-all">Ver todos los productos</Link>
          </div>
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            navigation
            autoplay={{
              delay: 2000, 
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            className="products-carousel"
          >
            {featured.map(product => (
              <SwiperSlide key={product.id}>
                <ProductComponent
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  image={product.image}
                  onAddToCart={() => addItem(product)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="featured-products">
        <div className="container">
          <div className="section-header">
            <h2>Categorías destacadas</h2>
            <Link to="/productos" className="view-all">Ver todas las categorías de productos</Link>
          </div>
        </div>
        <Categories />
      </section>
      
      <section className="order-process-wrapper">
        <div className="section-header">
          <h2>Cómo realizar un pedido?</h2>
          <Link to="/productos" className="view-all">A continuación te mostramos los pasos</Link>
        </div>
        <OrderProcess />
      </section>

      <section className="featured-products">
        <div className="container">
          <div className="section-header">
            <h2>Qué dicen nuestros clientes?</h2>
            <Link to="/productos" className="view-all">Experiencias reales con nuestros productos</Link>
          </div>
        </div>
        <Testimonials />
      </section>
      
    </div>
  )
}

export default HomePage
