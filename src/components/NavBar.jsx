import React, { useState, useEffect } from 'react';
import './NavBar.css'; // Asegúrate de que el archivo CSS sea el correcto

const NavBar = ({ scrollToServicios, scrollToContacto }) => {
  const [scrolling, setScrolling] = useState(false);

  // Efecto para cambiar la clase en el navbar cuando se hace scroll
  useEffect(() => {
    const handleScroll = () => {
      // Cambiar estado de scrolling cuando el scroll supera 100px
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    // Añadir el listener de scroll
    window.addEventListener('scroll', handleScroll);

    // Limpiar el listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`main-head ${scrolling ? 'slidedown' : ''}`}>
      <div className="container">
        <div className="main-menu">
          <div className="logo">
            <img src="/logo1.png" alt="Logo" className="logo-img" />
          </div>
          <div className="nav-menu">
            <ul className="nav-list">
              <li className="nav-list-item">
                <button className="nav-link" onClick={scrollToServicios}>Servicios</button>
              </li>
              <li className="nav-list-item">
                <button className="nav-link" onClick={scrollToContacto}>Contacto</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
