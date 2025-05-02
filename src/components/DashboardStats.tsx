import { FiDollarSign, FiShoppingBag, FiUsers, FiTrendingUp } from 'react-icons/fi'

export default function DashboardStats() {
  const stats = [
    {
      title: 'Ventas Totales',
      value: '$12,345',
      change: '+12%',
      icon: <FiDollarSign className="h-6 w-6" />,
      color: 'bg-green-100 text-green-600',
    },
    {
      title: 'Pedidos',
      value: '245',
      change: '+5%',
      icon: <FiShoppingBag className="h-6 w-6" />,
      color: 'bg-blue-100 text-blue-600',
    },
    {
      title: 'Clientes',
      value: '128',
      change: '+8%',
      icon: <FiUsers className="h-6 w-6" />,
      color: 'bg-purple-100 text-purple-600',
    },
    {
      title: 'Rendimiento',
      value: '92%',
      change: '+3%',
      icon: <FiTrendingUp className="h-6 w-6" />,
      color: 'bg-yellow-100 text-yellow-600',
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div 
          key={index} 
          className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-300"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">{stat.title}</p>
              <p className="text-2xl font-semibold text-gray-900 mt-1">{stat.value}</p>
              <p className="text-sm text-gray-500 mt-1">
                <span className={`${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                  {stat.change}
                </span>{' '}
                vs mes pasado
              </p>
            </div>
            <div className={`p-3 rounded-full ${stat.color}`}>
              {stat.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}