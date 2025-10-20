import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Seamer Sublimaciones
        </Link>
        
        <nav className="navbar-menu">
          <Link to="/" className="nav-link">Inicio</Link>
          <Link to="/productos" className="nav-link">Productos</Link>
          <Link to="/carrito" className="nav-link">Carrito</Link>
          <Link to="/sobre-nosotros" className="nav-link">Sobre Nosotros</Link>
          <Link to="/faqs" className="nav-link">FAQs</Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar