import React from 'react';
import '../css/card.css';
function Card() {
  return (
    
        <div className="card">
            <div className="imagen">
                <img src="/assets/images/picada_clasica.jpg" alt="picada clasica" />
            </div>
            <div className="contenido">
                <h3>Picada clasica para 2 (pican 3/4) </h3>
                <p>Lorem ipsum dolor sit amet consectetur,autem!</p>
                <a href="#">Leer más</a>
            </div>
        </div>
    
  )
}

export default Card;