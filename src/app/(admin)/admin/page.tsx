// src/app/(admin)/admin/page.tsx
import { 
  FiPackage, FiShoppingCart, FiAlertTriangle, 
  FiDollarSign, FiTrendingUp, FiPlus, FiBarChart 
} from 'react-icons/fi'

export default function AdminHome() {
  return (
    <div className="dashboard-home">
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
          <p>120</p>
          <span className="card-trend success">
            <FiTrendingUp /> +5%
          </span>
        </div>
        
        {/* Otras cards... */}
      </div>
      
      <div className="dashboard-actions">
        <button className="btn primary">
          <FiPlus /> Agregar producto
        </button>
        <button className="btn secondary">
          <FiBarChart /> Ver reportes
        </button>
      </div>
    </div>
  )
}