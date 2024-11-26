import React, { useState } from "react";
import "./Galeria.css";

const Galeria = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Lista de imágenes
  const images = [
    { id: 1, src: "galeria1.png", alt: "corte" },
    { id: 2, src: "galeria2.png", alt: "Estilo 2" },
    { id: 3, src: "galeria3.png", alt: "Estilo 3" },
    { id: 4, src: "galeria4.png", alt: "Estilo 4" },
  ];

  return (
    <div className="galeria-container">
      {/* Encabezado */}
      <div className="header">
        <img src="/use5.png" alt="Icono de galería" className="header-icon" />
        <h2>Galería</h2>
        <h3>Ejemplos de nuestros trabajos</h3>
      </div>

      {/* Galería */}
      <div className="grid">
        {images.map((image) => (
          <div
            key={image.id}
            className="image-wrapper"
            onClick={() => setSelectedImage(image.src)}
          >
            <img src={image.src} alt={image.alt} className="image" />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Imagen seleccionada" />
        </div>
      )}
    </div>
  );
};

export default Galeria;
