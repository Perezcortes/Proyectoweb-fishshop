'use client'
import React from 'react';
import styles from './HomePage.module.css';
import Link from 'next/link';
import { FiArrowRight, FiShoppingCart, FiTruck, FiShield } from 'react-icons/fi';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Bienvenido a <span>FishShop</span></h1>
          <p className={styles.heroText}>Tu tienda especializada en equipo de pesca de alta calidad</p>
          <div className={styles.heroButtons}>
            <Link href="/admin" className={styles.primaryButton}>
              Panel de Administración <FiArrowRight />
            </Link>
            <Link href="/productos" className={styles.secondaryButton}>
              Ver Catálogo
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.feature}>
          <FiShoppingCart className={styles.featureIcon} />
          <h3>Productos de Calidad</h3>
          <p>Equipos de las mejores marcas para todos los tipos de pesca</p>
        </div>
        <div className={styles.feature}>
          <FiTruck className={styles.featureIcon} />
          <h3>Envío Rápido</h3>
          <p>Recibe tus productos en 24-48 horas en toda la república</p>
        </div>
        <div className={styles.feature}>
          <FiShield className={styles.featureIcon} />
          <h3>Garantía</h3>
          <p>Todos nuestros productos incluyen garantía del fabricante</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.cta}>
        <h2>¿Listo para administrar tu tienda?</h2>
        <Link href="/admin" className={styles.primaryButton}>
          Acceder al Panel de Control <FiArrowRight />
        </Link>
      </section>
    </>
  );
}