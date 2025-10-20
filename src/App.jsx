import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import CartPage from './pages/CartPage'
import AboutPage from './pages/AboutPage'
import FaqsPage from './pages/FaqsPage'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productos" element={<ProductsPage />} />
          <Route path="/carrito" element={<CartPage />} />
          <Route path="/sobre-nosotros" element={<AboutPage />} />
          <Route path="/faqs" element={<FaqsPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
