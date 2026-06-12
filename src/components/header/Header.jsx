import React, { useState, useEffect } from "react";
import "./Header.css";

// Enlaces de navegación (secciones del portafolio)
const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);   // Controla menú móvil
  const [scrolled, setScrolled] = useState(false); // Controla fondo al hacer scroll
  const [active, setActive] = useState("Inicio");  // Enlace activo

  // Efecto para detectar scroll y cambiar estilo del header
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Función para navegar suavemente a una sección y cerrar menú móvil
  const handleNav = (label, href) => {
    setActive(label);
    setIsOpen(false);          // Cierra menú si está abierto
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div className="header-content">
          <button onClick={() => handleNav("Inicio", "#inicio")} className="logo-button">
            <img src="/public/favicon.svg" alt="Logo Melva" className="logo-svg" />
              <span className="logo-text">
                Melvitap_s <span className="logo-accent">Dev</span>
              </span>
          </button>

          {/* Enlaces para escritorio */}
          <div className="desktop-links">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.label, link.href)}
                className={`nav-link ${active === link.label ? "active" : ""}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Botón de CTA (Contáctame) */}
          <button
            onClick={() => handleNav("Contacto", "#contacto")}
            className="cta-button desktop-cta"
          >
            Contáctame
          </button>

          {/* Botón de menú hamburguesa para móvil */}
          <button onClick={() => setIsOpen(!isOpen)} className="mobile-toggle">
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Menú desplegable móvil */}
        {isOpen && (
          <div className="mobile-menu">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.label, link.href)}
                className={`mobile-nav-link ${active === link.label ? "active" : ""}`}
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;