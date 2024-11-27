import React from "react";
import "./Modelo.css"; // Asegúrate de importar el archivo de estilos

function Modelo({ scrollToContacto }) {
  return (
    <div className="modelo-container">
      <img
        className="modelo-img"
        src="/modelo.png" // Cambia según tu estructura
        alt="Modelo"
      />
      <div className="modelo-content">
        <h1 className="texto-principal">MANTÉN TU LOOK</h1>
        <h2 className="texto-secundario">LOOK PERFECTO</h2>
        <p className="texto-parrafo">
          En Didy Style nos hemos especializado en gustos y necesidades del
          hombre, estableciéndonos claramente como una barbería para barbudos.
        </p>
        <button
          className="modelo-btn"
          onClick={scrollToContacto}
        >
          Reserva tu cita
        </button>
      </div>
    </div>
  );
}

export default Modelo;
