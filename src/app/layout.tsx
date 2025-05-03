// src/app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { CartProvider } from '../context/CartContext'

export const metadata: Metadata = {
  title: 'FishShop',
  description: 'Admin dashboard para tienda de pesca',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}
