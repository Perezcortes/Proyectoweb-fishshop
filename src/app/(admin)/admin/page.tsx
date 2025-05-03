'use client'
import { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import {
  FiPackage, FiShoppingCart, FiAlertTriangle,
  FiDollarSign, FiTrendingUp, FiPlus, FiBarChart
} from 'react-icons/fi'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '../../../styles/AgregarProductoModal.css'

interface Producto {
  id_producto: number;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  marca: string;
  imagen: string;
}

export default function AdminHome() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null); // Referencia al formulario

  const fetchProductos = async () => {
    try {
      const res = await axios.get('http://127.0.0.1:8000/productos/');
      setProductos(res.data);
    } catch (error) {
      console.error('Error al obtener productos:', error);
    }
  };

  useEffect(() => {
    fetchProductos();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const nuevoProducto = {
      nombre: formData.get('nombre'),
      descripcion: formData.get('descripcion'),
      precio: parseFloat(formData.get('precio') as string),
      stock: parseInt(formData.get('stock') as string),
      marca: formData.get('marca'),
      imagen: formData.get('imagen'),
    };

    try {
      await axios.post('http://127.0.0.1:8000/productos/', nuevoProducto);
      toast.success('Producto agregado correctamente');
      setShowForm(false);
      form.reset();
      fetchProductos();
    } catch (error) {
      console.error('Error al agregar producto:', error);
      toast.error('Error al agregar el producto');
    }
  };

  const handleCancel = () => {
    if (formRef.current) formRef.current.reset(); // Limpia el formulario
    setShowForm(false); // Cierra el modal
  };

  return (
    <div className="dashboard-home">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="dashboard-header">
        <h1>Bienvenido al Panel de Administración</h1>
        <div className="dashboard-stats">
          <span className="stat-badge success">+12% ventas</span>
          <span className="stat-badge warning">5 alertas</span>
        </div>
      </div>

      <div className="dashboard-cards">
        <div className="dashboard-card">
          <div className="card-icon bg-accent">
            <FiPackage size={24} />
          </div>
          <h2>Productos</h2>
          <p>{productos.length}</p>
          <span className="card-trend success">
            <FiTrendingUp /> +5%
          </span>
        </div>
      </div>

      <div className="dashboard-actions">
        <button className="btn primary" onClick={() => setShowForm(true)}>
          <FiPlus /> Agregar producto
        </button>
        <button className="btn secondary">
          <FiBarChart /> Ver reportes
        </button>
      </div>

      {/* Modal para agregar producto */}
      <div className={`modal ${showForm ? 'active' : ''}`}>
        <div className="modal-content">
          <div className="modal-header">
            <h2>Agregar Producto</h2>
            <button className="modal-close" onClick={handleCancel}>&times;</button>
          </div>

          <form ref={formRef} className="product-form" onSubmit={handleSubmit}>
            <input name="nombre" type="text" placeholder="Nombre del producto" required />
            <input name="descripcion" type="text" placeholder="Descripción" required />
            <input name="precio" type="number" step="0.01" placeholder="Precio" required />
            <input name="stock" type="number" placeholder="Stock" required />
            <input name="marca" type="text" placeholder="Marca" required />
            <input name="imagen" type="url" placeholder="URL de la imagen" required />
            <button type="submit" className="btn primary">Guardar</button>
            <button type="button" className="btn secondary" onClick={handleCancel}>Cancelar</button>
          </form>
        </div>
      </div>
    </div>
  );
}
