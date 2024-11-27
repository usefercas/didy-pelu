import React from "react";
import "./Item.css"; // Importa los estilos para el componente

function Item() {
  return (
    <div className="item-container">
      <div className="text-container">
        <h1 className="title">BIENVENIDO A NUESTRAS</h1>
        <h2 className="subtitle">Barberías</h2>
        <p className="description">
          <strong>EN BARBERÍAS BEARBERO NOS HEMOS ESPECIALIZADO EN CORTES DE PELO Y ARREGLOS DE BARBA. ESTABLECIÉNDONOS COMO UNA DE LAS MEJORES BARBERÍAS DE MADRID PARA BARBUDOS.</strong>
          <br /><br />
          En las mejores barberías en Madrid, queremos que tu experiencia comience en el momento en que entras por la puerta...
        </p>
      </div>
    </div>
  );
}

export default Item;
