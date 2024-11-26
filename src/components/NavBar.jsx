import React, { useState, useEffect } from 'react';
import './NavBar.css'; // Asegúrate de que el archivo CSS sea el correcto

const NavBar = ({ scrollToServicios, scrollToContacto, scrollToGaleria }) => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Estado para manejar el menú en móviles

  // Efecto para cambiar la clase en el navbar cuando se hace scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Función para alternar el menú en dispositivos móviles
  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  return (
    <header className={`main-head ${scrolling ? 'slidedown' : ''} ${menuOpen ? 'active' : ''}`}>
      <div className="container">
        <div className="main-menu">
          <div className="logo">
            <img src="/marcas.png" alt="Logo" className="logo-img" />
          </div>
          
          {/* Menú hamburguesa */}
          <div className="toggle-btn" onClick={toggleMenu}>
            &#9776; {/* Símbolo de hamburguesa */}
          </div>

          {/* Menú de navegación */}
          <div className={`nav-menu ${menuOpen ? 'show' : ''}`}>
            <ul className="nav-list">
              <li className="nav-list-item">
                <button className="nav-link" onClick={scrollToServicios}>Servicios</button>
              </li>
              <li className="nav-list-item">
                <button className="nav-link" onClick={scrollToContacto}>Contacto</button>
              </li>
              <li className="nav-list-item">
                <button className="nav-link" onClick={scrollToGaleria}>Galería</button> {/* Aquí agregamos el enlace a la galería */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
