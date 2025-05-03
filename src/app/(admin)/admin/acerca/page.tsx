'use client'
import React from 'react';
import '../../../../styles/AcercaAdmin.css'; 

export default function AcercaAdmin() {
  return (
    <div className="acerca-container">
      <h1>Acerca de la Tienda</h1>
      <p>
        Bienvenido al panel de administración de nuestra tienda especializada en equipo de pesca.
        Nuestra misión es proporcionar productos de alta calidad para pescadores de todos los niveles,
        desde principiantes hasta profesionales.
      </p>

      <p>
        Nos apasiona la pesca deportiva y creemos que contar con el equipo adecuado hace una gran diferencia.
        Por eso, trabajamos con marcas reconocidas como Shimano, Daiwa, Abu Garcia y muchas más.
      </p>

      <p>
        Desde cañas, carretes, señuelos y accesorios, nuestro catálogo está cuidadosamente seleccionado
        para garantizar la satisfacción de nuestros clientes. ¡Gracias por formar parte de esta comunidad!
      </p>

      <div className="acerca-info-boxes">
        <div className="box">
          <h3>+10 años</h3>
          <p>de experiencia</p>
        </div>
        <div className="box">
          <h3>+500 productos</h3>
          <p>disponibles</p>
        </div>
        <div className="box">
          <h3>24/7</h3>
          <p>soporte técnico</p>
        </div>
      </div>
    </div>
  );
}
