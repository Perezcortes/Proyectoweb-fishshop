'use client'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import '../../../../styles/StockPage.css';
import 'react-toastify/dist/ReactToastify.css'

interface Producto {
  id_producto: number
  nombre: string
  marca: string
  stock: number
}

export default function StockPage() {
  const [productos, setProductos] = useState<Producto[]>([])

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const res = await axios.get('http://127.0.0.1:8000/productos/')
        setProductos(res.data)

        // Verificar productos con stock bajo
        const productosBajoStock = res.data.filter((p: Producto) => p.stock < 10)
        if (productosBajoStock.length > 0) {
          toast.warning(`¡Atención! ${productosBajoStock.length} producto(s) con stock bajo`, {
            position: 'top-right',
            autoClose: 4000,
          })
        }
      } catch (error) {
        console.error('Error al obtener productos:', error)
        toast.error('Error al cargar productos')
      }
    }

    fetchProductos()
  }, [])

  return (
    <div className="stock-container">
      <h2>Inventario de Productos</h2>
      <table className="stock-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Marca</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id_producto}>
              <td>{producto.id_producto}</td>
              <td>{producto.nombre}</td>
              <td>{producto.marca}</td>
              <td className={producto.stock < 10 ? 'low-stock' : ''}>
                {producto.stock < 10 ? (
                  <span className="warning">
                    ⚠️ Stock bajo: {producto.stock}
                  </span>
                ) : (
                  producto.stock
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
