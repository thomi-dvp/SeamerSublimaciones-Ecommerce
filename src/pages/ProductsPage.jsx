

import React from 'react'
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


const ProductsPage = () => {
  const { addItem } = useCart();
  return (
    <div className="products-page">
      <h1>Nuestros Productos</h1>
      <div className="products-grid">
        {products.map(product => (
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
    </div>
  )
}

export default ProductsPage
