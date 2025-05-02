import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './admin.css'
import AdminSidebar from '../../components/AdminSidebar'
import AdminHeader from '../../components/AdminHeader'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FishShop Admin - Gestión de Equipo de Pesca Black Bass',
  description: 'Panel de administración para tienda de equipo de pesca',
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-gray-50`}>
        <div className="flex h-screen overflow-hidden">
          <AdminSidebar />
          <div className="flex-1 overflow-auto">
            <AdminHeader />
            <main className="p-6">{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}