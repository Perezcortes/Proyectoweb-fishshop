import DashboardStats from '../../components/DashboardStats'
import SalesChart from '../../components/SalesChart'

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-blue-900">Panel de Control</h1>
      
      {/* Estadísticas rápidas */}
      <DashboardStats />
      
      {/* Gráfico de ventas */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Ventas Mensuales</h2>
        <SalesChart />
      </div>
      
    </div>
  )
}