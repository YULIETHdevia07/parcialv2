// script.js - menú responsivo simple
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  }

  // Mejoras: submit falso para evitar recarga mientras pruebas
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      // Aquí puedes conectar con fetch() para enviar los datos a tu servidor
      // Por ahora mostramos una confirmación amigable
      alert("Gracias — tu mensaje ha sido enviado (simulación).");
      contactForm.reset();
    });
  }
});
