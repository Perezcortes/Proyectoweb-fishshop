'use client';

import React from 'react';
import '../styles/card.css';
import { Producto } from '../types/producto';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { toast, Bounce } from 'react-toastify'; // Importamos la función toast y transicion Bounce

const Card = ({ producto }: { producto: Producto }) => {
  const { agregarAlCarrito } = useCart();

  const handleAddToCart = () => {
    agregarAlCarrito(producto);
    toast.success('🛒 Añadido al carrito', {
      position: 'bottom-center',
      autoClose: 1500, // Notificación breve
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      style: {
        backgroundColor: '#2b6cb0', // Fondo azul oscuro
        color: '#f7fafc', // Texto blanco
        fontSize: '14px',
        borderRadius: '12px', // Bordes redondeados
        padding: '10px 18px',
        marginBottom: '15px',
      },
    });    
  };

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
          <button
            className="add-to-cart"
            aria-label="Agregar al carrito"
            onClick={handleAddToCart} // Usamos handleAddToCart
          >
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
