import React from "react";

function Modelo({ scrollToContacto }) {
  const containerStyles = {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: "auto",
    position: "relative",
    marginTop: "0",
    padding: "0",
  };

  const imageStyles = {
    width: "100%",
    height: "auto",
    maxHeight: "80vh",
    objectFit: "cover",
  };

  const contentStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    color: "#fff",
    paddingLeft: "30px",
    position: "absolute",
    left: "0",
    width: "50%",
    backgroundColor: "transparent",
  };

  const titleStyles = {
    fontSize: "4rem",
    fontWeight: "bold",
    color: "#33d1cc",
    margin: "0",
    textTransform: "uppercase",
    lineHeight: "1.2",
  };

  const subtitleStyles = {
    fontSize: "2.5rem",
    fontWeight: "700",
    color: "#fff",
    marginTop: "10px",
  };

  const paragraphStyles = {
    fontSize: "1.2rem",
    marginTop: "20px",
    maxWidth: "600px",
    lineHeight: "1.5",
  };

  const buttonStyles = {
    marginTop: "30px",
    padding: "10px 20px",
    backgroundColor: "#33d1cc",
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "bold",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const buttonHoverStyles = {
    backgroundColor: "#29b4b0",
  };

  const mediaQueryStyles = `
    @media screen and (max-width: 768px) {
      .modelo-container {
        flex-direction: column;
        height: auto;
      }

      .modelo-img {
        max-height: 50vh;
      }

      .modelo-content {
        align-items: center;
        padding: 20px;
        width: 100%;
        text-align: center;
        position: relative;
      }

      .texto-principal {
        font-size: 2.5rem;
      }

      .texto-secundario {
        font-size: 1.8rem;
      }

      .modelo-btn {
        width: 100%;
      }
    }

    @media screen and (max-width: 480px) {
      .modelo-img {
        max-height: 40vh;
      }

      .texto-principal {
        font-size: 2rem;
      }

      .texto-secundario {
        font-size: 1.5rem;
      }

      .texto-parrafo {
        font-size: 1rem;
      }

      .modelo-btn {
        padding: 12px;
        font-size: 1rem;
      }
    }
  `;

  return (
    <div className="modelo-container" style={containerStyles}>
      {/* Estilo CSS-in-JS dinámico */}
      <style>{mediaQueryStyles}</style>

      {/* Imagen */}
      <img
        className="modelo-img"
        style={imageStyles}
        src="/modelo.png" // Cambia según tu estructura
        alt="Modelo"
      />

      {/* Contenido */}
      <div className="modelo-content" style={contentStyles}>
        <h1 className="texto-principal" style={titleStyles}>
          MANTEN TU LOOK
        </h1>
        <h2 className="texto-secundario" style={subtitleStyles}>
          LOOK PERFECTO
        </h2>
        <p className="texto-parrafo" style={paragraphStyles}>
          En Didy Style nos hemos especializado en gustos y necesidades del
          hombre, estableciéndonos claramente como una barbería para barbudos.
        </p>
        <button
          className="modelo-btn"
          style={buttonStyles}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#29b4b0")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#33d1cc")}
          onClick={scrollToContacto}
        >
          Reserva tu cita
        </button>
      </div>
    </div>
  );
}

export default Modelo;
