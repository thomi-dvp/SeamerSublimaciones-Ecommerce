import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../../../seamer-logo.jpg'
import { useCart } from '../../context/CartContext'
import AuthModal from '../auth/AuthModal'

const Navbar = () => {
  const { items } = useCart() || { items: [] }; // Usamos 'items' que es el nombre correcto del array en el contexto
  // Calculamos la cantidad total de ítems sumando las cantidades de cada producto
  const itemCount = (items || []).reduce((total, item) => total + item.quantity, 0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img src={logo} alt="Seamer Sublimaciones" className="navbar-logo-img" />
          </Link>
          
          <div className="navbar-menu-container">
            <nav className="navbar-menu">
              <Link to="/" className="nav-link">Inicio</Link>
              <Link to="/productos" className="nav-link">Productos</Link>
              <Link to="/sobre-nosotros" className="nav-link">Sobre Nosotros</Link>
            </nav>
            
            <button 
              className="user-icon" 
              aria-label="Iniciar sesión"
              onClick={() => setIsModalOpen(true)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <Link to="/carrito" className="cart-icon" aria-label="Carrito de compras">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                {/* Ruedas del carrito */}
                <circle cx="8" cy="21" r="1.5" fill="currentColor"/>
                <circle cx="19" cy="21" r="1.5" fill="currentColor"/>
                
                {/* Canasta principal */}
                <path d="M2.5 4.5h3l2.7 12.1c0.2 0.8 0.9 1.4 1.8 1.4h8.5c0.9 0 1.6-0.6 1.8-1.4L22 7.5H6" 
                  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                
                {/* Mango del carrito */}
                <path d="M6.5 7.5l1 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                
                {/* Detalles de la canasta */}
                <path d="M16.5 11.5v-2m-4 2v-2m-4 2v-2" 
                  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {/* Mostramos el contador solo si hay ítems en el carrito */}
              {itemCount > 0 && <span className="cart-counter">{itemCount}</span>}
            </Link>
          </div>
        </div>
      </header>
      <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

export default Navbar