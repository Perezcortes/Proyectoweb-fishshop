// src/app/(admin)/admin/ajustes/page.tsx
'use client'
import React from 'react';
import '../../../../styles/AjustesAdmin.css';

export default function AjustesPage() {
  return (
    <div className="settings-container">
      <h1>Configuración de la Tienda</h1>
      
      <div className="settings-sections">
        {/* Sección Información Básica */}
        <section className="settings-section">
          <h2>Información Básica</h2>
          <div className="settings-form">
            <div className="form-group">
              <label htmlFor="store-name">Nombre de la Tienda</label>
              <input 
                type="text" 
                id="store-name" 
                defaultValue="FishShop"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="store-description">Descripción</label>
              <textarea 
                id="store-description" 
                defaultValue="Especialistas en equipo de pesca deportiva"
                className="form-input"
                rows={3}
              />
            </div>
          </div>
        </section>

        {/* Sección Contacto */}
        <section className="settings-section">
          <h2>Información de Contacto</h2>
          <div className="settings-form">
            <div className="form-group">
              <label htmlFor="store-email">Email</label>
              <input 
                type="email" 
                id="store-email" 
                defaultValue="contacto@fishshop.com"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="store-phone">Teléfono</label>
              <input 
                type="tel" 
                id="store-phone" 
                defaultValue="+52 555 123 4567"
                className="form-input"
              />
            </div>
          </div>
        </section>

        {/* Sección Redes Sociales */}
        <section className="settings-section">
          <h2>Redes Sociales</h2>
          <div className="settings-form">
            <div className="form-group">
              <label htmlFor="store-facebook">Facebook</label>
              <input 
                type="url" 
                id="store-facebook" 
                defaultValue="https://facebook.com/fishshop"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="store-instagram">Instagram</label>
              <input 
                type="url" 
                id="store-instagram" 
                defaultValue="https://instagram.com/fishshop"
                className="form-input"
              />
            </div>
          </div>
        </section>

        <button className="save-button">Guardar Cambios</button>
      </div>
    </div>
  );
}