import React from 'react';
import '../styles/card.css'; 
import { Producto } from '../types/producto';

const Card = ({ producto }: { producto: Producto }) => {
  return (
    <div className="product-card">
      <div className="image-container">
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="product-image"
        />
      </div>
      <div className="product-info">
        <h3 className="product-name">{producto.nombre}</h3>
        <p className="product-brand">{producto.marca}</p>
        <p className="product-description">{producto.descripcion}</p>
        <div className="product-footer">
          <span className="product-price">${producto.precio.toFixed(2)}</span>
          <button className="add-to-cart">Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default Card;