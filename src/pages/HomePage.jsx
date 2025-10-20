import React from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'
import ProductComponent from '../components/ProductComponent'
import { useCart } from '../context/CartContext'
import BackgroundCarousel from '../components/BackgroundCarousel'

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
              <span className="highlight">Dale vida</span> a tus ideas con productos sublimados
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

      <section className="features">
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
      </section>

      <section className="featured-products">
        <div className="section-header">
          <h2>Productos destacados</h2>
          <Link to="/productos" className="view-all">Ver todos los productos</Link>
        </div>
        <div className="products-grid">
          {featured.map(product => (
            <ProductComponent
              key={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              image={product.image}
              onAddToCart={() => addItem(product)}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default HomePage
