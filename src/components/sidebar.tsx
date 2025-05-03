// src/components/sidebar.tsx
'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  FiHome, FiPackage, FiPlusCircle, FiPieChart,
  FiShoppingCart, FiInfo, FiSettings, FiMenu, FiLogOut
} from 'react-icons/fi'

const navItems = [
  { name: 'Inicio', path: '/admin', icon: FiHome },
  { name: 'Productos', path: '/admin/productos', icon: FiPackage },
  { name: 'Agregar Producto', path: '/admin/producto/new', icon: FiPlusCircle },
  { name: 'Stock', path: '/admin/stock', icon: FiPieChart },
  { name: 'Carrito', path: '/admin/carrito', icon: FiShoppingCart },
  { name: 'Acerca de', path: '/admin/acerca', icon: FiInfo },
  { name: 'Ajustes', path: '/admin/ajustes', icon: FiSettings },
]

export default function Sidebar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <button
        className="mobile-menu-button"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <FiMenu size={24} />
      </button>

      <aside className={`sidebar ${mobileOpen ? 'open' : ''}`}>
        <div className="sidebar-title">
          <img
            src="./logo.png"
            alt="FishShop Logo"
            className="logo-image"
          />
          <span>FishShop Admin</span>
        </div>

        <ul className="sidebar-nav">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <li
                key={item.path}
                className={pathname === item.path ? 'active' : ''}
              >
                <Link href={item.path}>
                  <Icon className="nav-icon" />
                  <span>{item.name}</span>
                  {pathname === item.path && (
                    <div className="active-indicator" />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="sidebar-footer">
          <Link href="/logout" className="logout-button">
            <FiLogOut />
            <span>Cerrar sesión</span>
          </Link>
        </div>
      </aside>
    </>
  )
}