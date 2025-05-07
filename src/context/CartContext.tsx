'use client';

import React, { createContext, useContext, useState } from 'react';
import { Producto } from '../types/producto';
import ModalViewProducto from '../components/ModalViewProducto';

type CartItem = Producto & { cantidad: number };

type CartContextType = {
  carrito: CartItem[];
  agregarAlCarrito: (producto: Producto) => void;
  updateQuantity: (id_producto: number, cantidad: number) => void;
  eliminarDelCarrito: (id_producto: number) => void;
  mostrarInfoProducto: (producto: Producto) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [carrito, setCarrito] = useState<CartItem[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState<Producto | null>(null);

  const agregarAlCarrito = (producto: Producto) => {
    setCarrito((prev) => {
      const existente = prev.find((item) => item.id_producto === producto.id_producto);
      if (existente) {
        return prev.map((item) =>
          item.id_producto === producto.id_producto && item.cantidad < 50
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }
      return [...prev, { ...producto, cantidad: 1 }];
    });
  };

  const updateQuantity = (id_producto: number, cantidad: number) => {
    setCarrito((prev) =>
      prev.map((item) =>
        item.id_producto === id_producto ? { ...item, cantidad: Math.max(1, cantidad) } : item
      )
    );
  };

  const eliminarDelCarrito = (id_producto: number) => {
    setCarrito((prev) => prev.filter(item => item.id_producto !== id_producto));
  };

  const mostrarInfoProducto = (producto: Producto) => {
    setProductoSeleccionado(producto);
    setModalVisible(true);
  };

  return (
    <CartContext.Provider value={{ carrito, agregarAlCarrito, updateQuantity, eliminarDelCarrito, mostrarInfoProducto }}>
      {children}

      {modalVisible && productoSeleccionado && (
        <ModalViewProducto onClose={() => setModalVisible(false)}>
          <h2>{productoSeleccionado.nombre}</h2>
          <img
            src={productoSeleccionado.imagen}
            alt={productoSeleccionado.nombre}
            style={{ width: '100%', maxHeight: '300px', objectFit: 'contain', marginBottom: '1rem' }}
          />
          <p><strong>Marca:</strong> {productoSeleccionado.marca}</p>
          <p><strong>Descripción:</strong> {productoSeleccionado.descripcion}</p>
          <p><strong>Precio:</strong> ${productoSeleccionado.precio}</p>
          <button onClick={() => setModalVisible(false)}>Cerrar</button>
        </ModalViewProducto>
      )}

    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart debe usarse dentro de CartProvider');
  return context;
};
