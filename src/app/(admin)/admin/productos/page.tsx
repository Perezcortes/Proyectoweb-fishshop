"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Producto } from "../../../../types/producto";
import Card from '../../../../components/card';
import styles from '../../../../styles/ProductosAdmin.module.css'; 

export default function ProductosAdmin() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get<Producto[]>("http://127.0.0.1:8000/productos/")
      .then(response => setProductos(response.data))
      .catch(error => {
        console.error("Error:", error);
        setError("Error al cargar los productos");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className={styles.loading}>Cargando...</div>;
  if (error) return <div className={styles.error}>{error}</div>;

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Gestión de Productos</h1>
      <div className={styles.grid}>
        {productos.map((producto) => (
          <Card key={producto.id_producto} producto={producto} />
        ))}
      </div>
    </main>
  );
}