import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contacto.css';

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'YOUR_SERVICE_ID', // Reemplaza con tu Service ID de EmailJS
        'YOUR_TEMPLATE_ID', // Reemplaza con tu Template ID de EmailJS
        formData,
        'YOUR_USER_ID' // Reemplaza con tu User ID de EmailJS
      )
      .then(
        () => {
          setSuccessMessage('¡Cita solicitada correctamente! Nos pondremos en contacto contigo pronto.');
          setErrorMessage('');
          setFormData({ name: '', email: '', phone: '', date: '', message: '' });
        },
        () => {
          setErrorMessage('Hubo un problema al solicitar la cita. Por favor, intenta de nuevo.');
          setSuccessMessage('');
        }
      );
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Solicitar Cita</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Tu nombre completo"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Tu correo electrónico"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Tu número de teléfono"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Detalles adicionales (opcional)"
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit" className="submit-btn">
          Solicitar Cita
        </button>
      </form>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default Contacto;
