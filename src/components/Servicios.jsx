import React from 'react';
import './Servicios.css';  // Importamos el archivo de estilo CSS

const Servicio = () => {
  return (
    <div className="services-container">
      {/* Encabezado centrado con los títulos */}
      <div className="services-header">
        <h1 className="services-title">Servicios</h1>
        <h3 className="services-subtitle">Algunos de nuestros servicios</h3>
      </div>
      
      {/* Contenedor de los items de servicio */}
      <div className="services-items-container">
        <div className="service-item">
          <img src="/public/corte.png" alt="Corte de Pelo" className="service-image" />
          <div className="service-description">
            <h2>CORTE DE PELO</h2>
            <p className="price">20€</p>
            <p>Servicio especializado en el corte de pelo de hombres...</p>
            <p><strong>INCLUYE:</strong> Corte de pelo de caballero, lavado con champú de tratamiento y peinado con productos de terminación y/o fijación.</p>
          </div>
        </div>
        <div className="service-item">
          <img src="/public/arreglo.png" alt="Arreglo de barba" className="service-image" />
          <div className="service-description">
            <h2>ARREGLO DE BARBA</h2>
            <p className="price">18€</p>
            <p>Servicio especializado en el arreglo de barba...</p>
            <p><strong>INCLUYE:</strong> Arreglo de barba, afeitado de contornos con toallas caliente y fría, acondicionador, after shave y productos de barbería.</p>
          </div>
        </div>
        <div className="service-item">
          <img src="/public/afeitado.png" alt="Afeitado de barba" className="service-image" />
          <div className="service-description">
            <h2>AFEITADO DE BARBA</h2>
            <p className="price">20€</p>
            <p>Servicio especializado en el afeitado de barba...</p>
            <p><strong>INCLUYE:</strong> Afeitado suave con toalla caliente y fría, After shave y/o aceites esenciales.</p>
          </div>
        </div>
        <div className="service-item">
          <img src="/public/tinte.png" alt="Color de barba" className="service-image" />
          <div className="service-description">
            <h2>COLOR DE BARBA</h2>
            <p className="price">16€</p>
            <p>Servicio especializado en coloración de barba...</p>
            <p><strong>INCLUYE:</strong> Coloración de efecto natural sin amoniacos con bajo tiempo de exposición.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicio;
