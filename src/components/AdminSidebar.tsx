import Link from 'next/link'
import { FiHome, FiBox, FiShoppingCart, FiUsers, FiBarChart2, FiSettings } from 'react-icons/fi'

export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-blue-900 text-white flex-shrink-0">
      <div className="p-4">
        <h1 className="text-2xl font-bold flex items-center">
          <span className="bg-yellow-500 text-blue-900 p-1 rounded mr-2">
            <FiBox />
          </span>
          FishShop Admin
        </h1>
      </div>
      <nav className="mt-6">
        <div className="px-4 py-2 text-blue-200 uppercase text-xs font-semibold">Principal</div>
        <Link 
          href="/admin" 
          className="flex items-center px-6 py-3 text-white bg-blue-800 hover:bg-blue-700 transition-colors duration-200"
        >
          <FiHome className="mr-3" />
          Dashboard
        </Link>
        <Link 
          href="/admin/products" 
          className="flex items-center px-6 py-3 text-white hover:bg-blue-800 transition-colors duration-200"
        >
          <FiBox className="mr-3" />
          Productos
        </Link>
        <Link 
          href="/admin/orders" 
          className="flex items-center px-6 py-3 text-white hover:bg-blue-800 transition-colors duration-200"
        >
          <FiShoppingCart className="mr-3" />
          Pedidos
        </Link>
        <Link 
          href="/admin/customers" 
          className="flex items-center px-6 py-3 text-white hover:bg-blue-800 transition-colors duration-200"
        >
          <FiUsers className="mr-3" />
          Clientes
        </Link>
        <div className="px-4 py-2 text-blue-200 uppercase text-xs font-semibold mt-4">Analítica</div>
        <Link 
          href="/admin/analytics" 
          className="flex items-center px-6 py-3 text-white hover:bg-blue-800 transition-colors duration-200"
        >
          <FiBarChart2 className="mr-3" />
          Reportes
        </Link>
        <div className="px-4 py-2 text-blue-200 uppercase text-xs font-semibold mt-4">Configuración</div>
        <Link 
          href="/admin/settings" 
          className="flex items-center px-6 py-3 text-white hover:bg-blue-800 transition-colors duration-200"
        >
          <FiSettings className="mr-3" />
          Ajustes
        </Link>
      </nav>
    </aside>
  )
}