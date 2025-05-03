import React from 'react';
import '../styles/card.css'; 
import { Producto } from '../types/producto';

const Card = ({ producto }: { producto: Producto }) => {
  return (
    <div className="product-card">
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="product-image"
      />
      <p className="product-name">{producto.nombre}</p>
      <p className="product-description">{producto.descripcion}</p>
      <div className="product-footer">
        <p className="product-price">${producto.precio.toFixed(2)}</p>
        <p className="product-stock">Stock: {producto.stock}</p>
      </div>
    </div>
  );
};

export default Card;