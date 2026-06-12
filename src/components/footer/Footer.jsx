import React from "react";
import "./Footer.css";

// Enlaces de navegación y redes sociales para el footer
const footerLinks = {
  Navegación: [
    { label: "Inicio", href: "#inicio" },
    { label: "Sobre mí", href: "#sobre-mi" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Contacto", href: "#contacto" },
  ],
  Conecta: [
    { label: "GitHub", href: "https://github.com/MelvaSuarez29" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/melvasu%C3%A1rez/",
    },
    { label: "Pinterest", href: "https://pin.it/2dyFTs5us" },
    { label: "Threads", href: "https://www.threads.com/@melvitap_s" },
    { label: "YouTube", href: "https://www.youtube.com/@melvitap_s" },
  ],
};

function Footer() {
  // Función para scroll suave en enlaces internos
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Columna de marca */}
          <div className="footer-brand">
            <div className="brand-logo">
              <img src="/icon-5.svg" alt="Logo Melva" className="logo-img" />
              <span className="logo-text">
                Melvitap_s<span className="logo-accent">  Dev</span>
              </span>
            </div>
            <p className="brand-description">
              Estudiante de Desarrollo de Software & Creadora Frontend soy de la
              Ciudad de Quito, Ecuador. Construyendo aplicaciones web rápidas,
              accesibles y hermosas, con un toque de creatividad.
            </p>
            <div className="availability-badge-footer">
              <span className="status-dot-footer"></span>
              <span>Abierta a nuevas oportunidades</span>
            </div>
          </div>

          {/* Columnas de enlaces dinámicas */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section} className="footer-links">
              <h4>{section}</h4>
              <ul>
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith("#")) {
                          e.preventDefault();
                          scrollTo(link.href);
                        }
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p>©melvitap_s 2026. Todos los derechos reservados.</p>
          <p>
            Autora <span className="heart">: </span> Melva Suarez Portafolio
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
