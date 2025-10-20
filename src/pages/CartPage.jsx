
import React from 'react'
import { useCart } from '../context/CartContext'
import './CartPage.css'

const CartPage = () => {
  const {
    items,
    addItem,
    decreaseItem,
    removeItem,
    clearCart,
    subtotal,
    iva,
    impuestoExtra,
    total,
  } = useCart();

  return (
    <div className="cart-page">
      <h1 className="cart-title">Carrito de Compras</h1>
      {items.length === 0 ? (
        <div className="cart-empty">Tu carrito está vacío.</div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items-list">
            {items.map(item => (
              <div key={item.id} className="cart-item-card">
                <div className="cart-item-info">
                  {item.image && (
                    <img src={item.image} alt={item.name} className="cart-item-img" />
                  )}
                  <div className="cart-item-details">
                    <div className="cart-item-name">{item.name}</div>
                    <div className="cart-item-desc">{item.description}</div>
                    <div className="cart-item-price">${item.price}</div>
                  </div>
                </div>
                <div className="cart-item-actions">
                  <button className="cart-btn" onClick={() => decreaseItem(item.id)}>-</button>
                  <span style={{ minWidth: 28, textAlign: 'center', fontWeight: 600, fontSize: 17 }}>{item.quantity}</span>
                  <button className="cart-btn" onClick={() => addItem(item)}>+</button>
                  <button className="cart-btn-remove" onClick={() => removeItem(item.id)}>Quitar</button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h2 className="cart-summary-title">Resumen</h2>
            <div className="cart-summary-row">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="cart-summary-row">
              <span>IVA (21%)</span>
              <span>${iva.toFixed(2)}</span>
            </div>
            <div className="cart-summary-row">
              <span>Impuesto extra (5%)</span>
              <span>${impuestoExtra.toFixed(2)}</span>
            </div>
            <div className="cart-summary-total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button className="cart-btn-clear" onClick={clearCart}>Vaciar carrito</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default CartPage
