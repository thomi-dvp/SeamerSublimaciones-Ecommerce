import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Seamer Sublimaciones</h3>
          <p>Productos personalizados de alta calidad</p>
        </div>
        
        <div className="footer-section">
          <h4>Contacto</h4>
          <p>Email: contacto@seamer.com</p>
          <p>Tel: (123) 456-7890</p>
        </div>
        
        <div className="footer-section">
          <h4>Síguenos</h4>
          <div className="social-links">
            <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Seamer Sublimaciones. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer