'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: 'Inicio', path: '/admin' },
  { name: 'Productos', path: '/admin/productos' },
  { name: 'Agregar Producto', path: '/admin/producto/new' },
  { name: 'Stock', path: '/admin/stock' },
  { name: 'Carrito', path: '/admin/carrito' },
  { name: 'Acerca de', path: '/admin/acerca' },
  { name: 'Ajustes', path: '/admin/ajustes' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="sidebar">
      <div className="sidebar-title">FishShop Admin</div>
      <ul className="sidebar-nav">
        {navItems.map((item) => (
          <li key={item.path} className={pathname === item.path ? 'active' : ''}>
            <Link href={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}
