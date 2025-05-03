// src/app/(admin)/admin/layout.tsx
'use client'
import Sidebar from '../../../components/sidebar'
import '../../../styles/admin-dashboard.css'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="dashboard-content">{children}</main>
    </div>
  )
}
