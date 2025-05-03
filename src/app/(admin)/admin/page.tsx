export default function AdminHome() {
  return (
    <div className="dashboard-home">
      <h1>Bienvenido al Panel de Administración</h1>
      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h2>Productos</h2>
          <p>120</p>
        </div>
        <div className="dashboard-card">
          <h2>Pedidos</h2>
          <p>8</p>
        </div>
        <div className="dashboard-card">
          <h2>Stock bajo</h2>
          <p>5</p>
        </div>
        <div className="dashboard-card">
          <h2>Ventas hoy</h2>
          <p>$2,350.00</p>
        </div>
      </div>
    </div>
  )
}
