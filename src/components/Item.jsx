import React from "react";
import "./Item.css"; // Importa los estilos para el componente

function Item() {
  return (
    <div className="item-container">
      <div className="text-container">
        <h1 className="title">BIENVENIDO A NUESTRAS</h1>
        <h2 className="subtitle">Barberias</h2>
        <p className="description">
          <strong>EN BARBERIAS BEARBERO NOS HEMOS ESPECIALIZADO EN CORTES DE PELO Y ARREGLOS DE BARBA. ESTABLECIÉNDONOS COMO UNA DE LAS MEJORES BARBERIAS DE MADRID PARA BARBUDOS.</strong>
          <br /><br />
          En las mejores barberías en Madrid, queremos que tu experiencia comience en el momento en que entras por la puerta. Una barbería donde el olor, la música y la decoración, te llevan de vuelta a un tiempo que recuerda a barberías clásicas de antaño. Barber shop donde el corte de pelo y el arreglo de barba era algo cotidiano. Si te preguntas, ¿una barbería cerca de mi?, pues somos una de las mejores barberías posicionadas en Madrid centro, barbería Lavapies, y barbería Chueca, son zonas donde tenemos ubicadas. En nuestras barberías son hábiles con las técnicas de corte de pelo y arreglo de barba.
        </p>
      </div>
    </div>
  );
}

export default Item;
