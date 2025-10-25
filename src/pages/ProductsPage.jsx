

import React, { useState } from 'react'
import ProductComponent from '../components/ProductComponent'
import './ProductsPage.css'
import { useCart } from '../context/CartContext'


const products = [
  {
    id: 1,
    name: 'Taza personalizada',
    description: 'Taza de cerámica con diseño a elección.',
    price: 2500,
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    category: 'Hogar',
  },
  {
    id: 2,
    name: 'Remera estampada',
    description: 'Remera 100% algodón con estampado personalizado.',
    price: 4500,
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
    category: 'Indumentaria',
  },
  {
    id: 3,
    name: 'Almohadón decorativo',
    description: 'Almohadón sublimado, varios tamaños y colores.',
    price: 3200,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    category: 'Hogar',
  },
  {
    id: 4,
    name: 'Gorra Trucker',
    description: 'Gorra con frente sublimable, ideal para logos.',
    price: 3800,
    image: 'https://images.unsplash.com/photo-1588850561407-ed28a28a8945?auto=format&fit=crop&w=400&q=80',
    category: 'Accesorios',
  },
  {
    id: 5,
    name: 'Llavero Personalizado',
    description: 'Llavero de polímero con tu foto o diseño.',
    price: 1500,
    image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=400&q=80',
    category: 'Accesorios',
  },
  {
    id: 6,
    name: 'Mousepad Sublimado',
    description: 'Base de goma antideslizante y superficie de tela.',
    price: 2800,
    image: 'https://images.unsplash.com/photo-1615916342992-928de4593460?auto=format&fit=crop&w=400&q=80',
    category: 'Oficina',
  },
  {
    id: 7,
    name: 'Jarro Térmico',
    description: 'Mantené tus bebidas a la temperatura ideal.',
    price: 4200,
    image: 'https://images.unsplash.com/photo-1579680189351-b0186d07810c?auto=format&fit=crop&w=400&q=80',
    category: 'Hogar',
  },
  {
    id: 8,
    name: 'Rompecabezas',
    description: 'Un regalo original con tu foto favorita.',
    price: 3500,
    image: 'https://images.unsplash.com/photo-1561816544-21ec92675e25?auto=format&fit=crop&w=400&q=80',
    category: 'Regalos',
  },
  {
    id: 9,
    name: 'Bolso de Tela',
    description: 'Tote bag de tela, ideal para uso diario.',
    price: 3000,
    image: 'https://images.unsplash.com/photo-1579108333313-2b6953355c6c?auto=format&fit=crop&w=400&q=80',
    category: 'Accesorios',
  },
  {
    id: 10,
    name: 'Funda de Celular',
    description: 'Protegé tu celular con un diseño 100% tuyo.',
    price: 2900,
    image: 'https://images.unsplash.com/photo-1598331666166-2b13a34383c9?auto=format&fit=crop&w=400&q=80',
    category: 'Accesorios',
  },
]

const categories = [...new Set(products.map(p => p.category))];

const ProductsPage = () => {
  const { addItem } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryToggle = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category) 
        : [...prev, category]
    );
  };

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="products-page">
      <h1>Nuestros Productos</h1>
      <div className="filters-container">
        <div className="search-bar-container">
          <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <input 
            type="text"
            placeholder="Buscar por nombre..."
            className="search-bar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="category-filters">
          {categories.map(category => (
            <button 
              key={category}
              className={`category-btn ${selectedCategories.includes(category) ? 'active' : ''}`}
              onClick={() => handleCategoryToggle(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      {filteredProducts.length > 0 ? (
        <div className="products-grid">
          {filteredProducts.map(product => (
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
      ) : (
        <div className="no-products-found">
          <p>No se encontraron productos que coincidan con tu búsqueda.</p>
        </div>
      )}
    </div>
  )
}

export default ProductsPage
