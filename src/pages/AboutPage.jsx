import React from 'react'
import './AboutPage.css'

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1 className="about-title">Sobre Seamer Sublimaciones</h1>
      <div className="about-content">
        Bienvenido a nuestra tienda online de productos sublimados personalizados. Nos apasiona transformar ideas en objetos únicos y especiales, ofreciendo calidad, creatividad y dedicación en cada producto.
      </div>
      <div className="about-section">
        <div className="about-section-title">Objetivo del Proyecto</div>
        <div>
          El objetivo de este proyecto es brindar una experiencia de compra simple, moderna y segura para quienes buscan regalos, recuerdos o productos personalizados para empresas y particulares. Queremos que cada cliente pueda encontrar inspiración y personalizar fácilmente sus productos favoritos.
        </div>
      </div>
      <div className="about-section">
        <div className="about-section-title">¿Qué Ofrecemos?</div>
        <div>
          <ul style={{textAlign: 'left', maxWidth: 600, margin: '0 auto', paddingLeft: 20}}>
            <li>Tazas, remeras, almohadones y más, todos personalizables.</li>
            <li>Diseños exclusivos y atención a pedidos especiales.</li>
            <li>Materiales de alta calidad y terminaciones profesionales.</li>
            <li>Atención personalizada y envíos a todo el país.</li>
          </ul>
        </div>
      </div>
      <div className="about-section">
        <div className="about-section-title">Expectativas</div>
        <div>
          Aspiramos a crecer junto a nuestros clientes, mejorando continuamente la plataforma y sumando nuevos productos y funcionalidades. Queremos ser referentes en el mundo de la sublimación, destacándonos por la innovación, la confianza y la satisfacción de quienes nos eligen.
        </div>
      </div>
    </div>
  )
}

export default AboutPage
