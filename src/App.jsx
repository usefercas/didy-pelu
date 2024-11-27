import React, { useRef } from "react";
import NavBar from "./components/NavBar"; // Asegúrate de que el archivo sea el correcto
import Item from "./components/Item";
import Modelo from "./components/Modelo";
import Servicios from "./components/Servicios";
import Galeria from "./components/Galeria";
import Footer from "./components/Footer";
import Contacto from "./components/Contacto"; // Nuevo componente Contacto

function App() {
  const contactoRef = useRef(null);  // Referencia para la sección de contacto
  const serviciosRef = useRef(null);  // Nueva referencia para la sección de servicios
  const galeriaRef = useRef(null);    // Nueva referencia para la sección de galería

  // Función para hacer scroll a la sección de contacto
  const scrollToContacto = () => {
    contactoRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // Función para hacer scroll a la sección de servicios
  const scrollToServicios = () => {
    serviciosRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // Función para hacer scroll a la sección de galería
  const scrollToGaleria = () => {
    galeriaRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <NavBar 
        scrollToServicios={scrollToServicios} 
        scrollToContacto={scrollToContacto} 
        scrollToGaleria={scrollToGaleria}  // Pasamos la función de galería
      /> {/* Pasamos las funciones al Navbar */}
      
      <Modelo scrollToContacto={scrollToContacto} />
      <Item />
      
      <div ref={serviciosRef}>
        <Servicios />
      </div>

      <div ref={galeriaRef}>
        <Galeria />
      </div>

      <div ref={contactoRef}> {/* Contacto integrado aquí */}
        <Contacto />
        <Footer />
      </div>
    </div>
  );
}

export default App;
