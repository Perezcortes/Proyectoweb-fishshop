"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Producto } from "../types/producto";

export default function Home() {
  const [productos, setProductos] = useState<Producto[]>([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/productos/")
      .then((response) => setProductos(response.data))
      .catch((error) =>
        console.error("Error al obtener productos:", error)
      );
  }, []);

  return (
    <>
      <main style={{ padding: "2rem" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1.5rem", textAlign: "center" }}>
          Catálogo de Productos de Pesca 🎣
        </h1>
        <div className="productos-grid">
          {productos.map((producto) => (
            <div key={producto.id_producto} className="producto-card">
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="producto-imagen"
              />
              <h2 className="producto-nombre">{producto.nombre}</h2>
              <p className="producto-descripcion">{producto.descripcion}</p>
              <p className="producto-precio">${producto.precio.toFixed(2)}</p>
              <p className="producto-info">Stock: {producto.stock}</p>
              <p className="producto-info">Marca: {producto.marca}</p>
            </div>
          ))}
        </div>
      </main>

      <style jsx>{`
        .productos-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 1.5rem;
        }

        .producto-card {
          border: 1px solid #ddd;
          border-radius: 10px;
          padding: 1rem;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
          background-color: #fff;
          transition: transform 0.2s ease;
        }

        .producto-card:hover {
          transform: translateY(-4px);
        }

        .producto-imagen {
          width: 100%;
          height: 180px;
          object-fit: cover;
          border-radius: 6px;
          margin-bottom: 1rem;
        }

        .producto-nombre {
          font-size: 1.2rem;
          font-weight: bold;
          margin: 0.5rem 0;
          color: #333;
        }

        .producto-descripcion {
          font-size: 0.95rem;
          color: #555;
        }

        .producto-precio {
          font-size: 1.1rem;
          font-weight: bold;
          color: green;
          margin-top: 0.5rem;
        }

        .producto-info {
          font-size: 0.85rem;
          color: #777;
        }
      `}</style>
    </>
  );
}
