// app/producto/[id].tsx

'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Producto } from "../../../../../types/producto";
import styles from '../../../../../styles/ProductoDetalle.module.css';

const ProductoDetalle = () => {
  const [producto, setProducto] = useState<Producto | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  const { id } = router.query; // Obtenemos el id del producto de la URL

  useEffect(() => {
    if (id) {
      axios.get<Producto>(`http://127.0.0.1:8000/productos/${id}`)
        .then(response => {
          setProducto(response.data);
        })
        .catch(error => {
          console.error("Error:", error);
          setError("Error al cargar el producto");
        })
        .finally(() => setLoading(false));
    }
  }, [id]);

  if (loading) return <div className={styles.loading}>Cargando...</div>;
  if (error) return <div className={styles.error}>{error}</div>;

  if (!producto) return <div>Producto no encontrado</div>;

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>{producto.nombre}</h1>
      <div className={styles.productDetails}>
        <img src={producto.imagen} alt={producto.nombre} className={styles.productImage} />
        <div className={styles.productInfo}>
          <p><strong>Marca:</strong> {producto.marca}</p>
          <p><strong>Descripción:</strong> {producto.descripcion}</p>
          <p><strong>Precio:</strong> ${producto.precio.toFixed(2)}</p>
          <button className={styles.addToCart}>Añadir al carrito</button>
        </div>
      </div>
    </main>
  );
};

export default ProductoDetalle;
