import React from 'react'
import './ProductComponent.css'


const ProductComponent = ({ name, description, price, image, onAddToCart }) => {
  return (
    <div className="product-card">
      {image && (
        <div className="product-image-container">
          <img src={image} alt={name} className="product-image" />
        </div>
      )}
      <div className="product-info">
        <h2 className="product-name">{name}</h2>
        <p className="product-description">{description}</p>
        <p className="product-price">${price}</p>
        <button className="add-to-cart-btn" onClick={onAddToCart} type="button">
          Agregar al carrito
        </button>
      </div>
    </div>
  )
}

export default ProductComponent
