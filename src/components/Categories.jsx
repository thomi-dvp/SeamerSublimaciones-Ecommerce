import React from 'react'
import { Link } from 'react-router-dom'
import './Categories.css'

const categories = [
  {
    id: 1,
    name: 'Tazas y Jarros',
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=400&q=80',
    description: 'Personalizá tu momento del café',
    link: '/productos?categoria=tazas'
  },
  {
    id: 2,
    name: 'Remeras y Buzos',
    image: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?auto=format&fit=crop&w=400&q=80',
    description: 'Tu diseño en la mejor tela',
    link: '/productos?categoria=indumentaria'
  },
  {
    id: 3,
    name: 'Almohadones',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=400&q=80',
    description: 'Dale vida a tus espacios',
    link: '/productos?categoria=almohadones'
  },
  {
    id: 4,
    name: 'Accesorios',
    image: 'https://images.unsplash.com/photo-1631125915902-d8abe9225ff2?auto=format&fit=crop&w=400&q=80',
    description: 'Detalles únicos para tu día a día',
    link: '/productos?categoria=accesorios'
  },
  {
    id: 5,
    name: 'Papelería',
    image: 'https://images.unsplash.com/photo-1506784693919-ef06d93c28d2?auto=format&fit=crop&w=400&q=80',
    description: 'Artículos de oficina personalizados',
    link: '/productos?categoria=papeleria'
  },
  {
    id: 6,
    name: 'Regalos',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=400&q=80',
    description: 'Para ocasiones especiales',
    link: '/productos?categoria=regalos'
  }
]

const  Categories = () => {
  return (
    <section className="categories">
      
      <div className="categories-grid">
        {categories.map(category => (
          <Link to={category.link} className="category-card" key={category.id}>
            <div className="category-image">
              <img src={category.image} alt={category.name} />
            </div>
            <div className="category-content">
              <h3>{category.name}</h3>
              <p>{category.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Categories