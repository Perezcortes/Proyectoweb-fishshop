'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
  FiHome, FiPackage, FiPlusCircle, FiPieChart,
  FiShoppingCart, FiInfo, FiSettings, FiMenu, FiLogOut
} from 'react-icons/fi'
import { toast, ToastContainer } from 'react-toastify'
import { confirmAlert } from 'react-confirm-alert'
import 'react-toastify/dist/ReactToastify.css'
import 'react-confirm-alert/src/react-confirm-alert.css'

const navItems = [
  { name: 'Inicio', path: '/admin', icon: FiHome },
  { name: 'Productos', path: '/admin/productos', icon: FiPackage },
  { name: 'Stock', path: '/admin/stock', icon: FiPieChart },
  { name: 'Carrito', path: '/admin/carrito', icon: FiShoppingCart },
  { name: 'Acerca de', path: '/admin/acerca', icon: FiInfo },
  { name: 'Ajustes', path: '/admin/ajustes', icon: FiSettings },
]

export default function Sidebar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const router = useRouter()

  const handleLogout = () => {
    confirmAlert({
      title: '¿Cerrar sesión?',
      message: '¿Estás seguro de que deseas cerrar sesión?',
      buttons: [
        {
          label: 'Sí',
          onClick: () => {
            toast.success('¡Hasta luego!', {
              position: 'top-center',
              autoClose: 1500,
              onClose: () => router.push('/')
            })
          }
        },
        {
          label: 'Cancelar',
          onClick: () => {
            // Ya no mostramos ninguna notificación
          }
        }
      ]
    })
  }  

  return (
    <>
      <ToastContainer />
      <button
        className="mobile-menu-button"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <FiMenu size={24} />
      </button>

      <aside className={`sidebar ${mobileOpen ? 'open' : ''}`}>
        <div className="sidebar-title">
          <img src="/logo.png" alt="FishShop Logo" className="logo-image" />
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
          <button className="logout-button" onClick={handleLogout}>
            <FiLogOut />
            <span>Cerrar sesión</span>
          </button>
        </div>
      </aside>
    </>
  )
}
