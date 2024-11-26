import React, { useRef } from "react";
import NavBar from "./components/NavBar"; // Asegúrate de que el archivo sea correcto

import Item from "./components/Item";
import Modelo from "./components/Modelo";
import Servicios from "./components/Servicios";
import Galeria from "./components/Galeria";
import Footer from "./components/Footer";

function App() {
  const contactoRef = useRef(null);  // Referencia para la sección de contacto
  const serviciosRef = useRef(null);  // Nueva referencia para la sección de servicios

  // Función para hacer scroll a la sección de contacto
  const scrollToContacto = () => {
    contactoRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // Función para hacer scroll a la sección de servicios
  const scrollToServicios = () => {
    serviciosRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <NavBar 
        scrollToServicios={scrollToServicios} 
        scrollToContacto={scrollToContacto} 
      /> {/* Pasamos las funciones al Navbar */}
      <Modelo scrollToContacto={scrollToContacto} />
      <Item />
      
      <div ref={serviciosRef}>
        <Servicios />
      </div>
      <Galeria/>

      <div ref={contactoRef}>
      
      </div>
      <Footer />
    </div>
  );
}

export default App;
