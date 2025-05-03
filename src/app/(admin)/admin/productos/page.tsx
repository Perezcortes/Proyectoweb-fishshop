"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Producto } from "../../../../types/producto";
import Card from '../../../../components/card'; // Ruta relativa correcta

export default function ProductosAdmin() {
  const [productos, setProductos] = useState<Producto[]>([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/productos/")
      .then((response) => setProductos(response.data))
      .catch((error) => console.error("Error al obtener productos:", error));
  }, []);

  return (
    <div className="products-grid">
      {productos.map((producto) => (
        <Card key={producto.id_producto} producto={producto} />
      ))}
    </div>
  );
}