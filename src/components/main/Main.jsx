import React from "react";
import "./Main.css";
import profileImg from "../../assets/1-Perfil.jpg";

function Main() {
  const scrollToProjects = () => {
    document.querySelector("#proyectos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="hero">
      <div className="hero-bg">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        <div className="grid-lines"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="availability-badge">
            <span className="status-dot"></span>
            <span>Disponible para trabajar</span>
          </div>

          <h1 className="hero-title">Melva Suárez</h1>

          <h2 className="hero-subtitle">
            Estudiante de Desarrollo de Software
            <br />& Creadora Frontend
          </h2>

          <p className="hero-description">
            Apasionada por crear aplicaciones web de alto rendimiento con interfaces elegantes.
            Me encanta transformar problemas complejos en soluciones limpias y escalables.
            Estudiante en la Escuela Politécnica Nacional.
          </p>

          <div className="hero-buttons">
            <button onClick={scrollToProjects} className="btn-primary">
              Mis Proyectos
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <button className="btn-secondary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3V16M12 16L9 13M12 16L15 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5 21H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Currículum
            </button>
          </div>

          <div className="social-links">
            <a href="https://github.com/MelvaSuarez29" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21C9.5 20.77 9.5 20.14 9.5 19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18.02 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26C14.5 19.6 14.5 20.68 14.5 21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 6.48 17.52 2 12 2Z" fill="currentColor"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/melvasu%C3%A1rez/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C0.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.203 0 22.222 0h.003z" fill="currentColor"/>
              </svg>
            </a>
            <a href="https://pin.it/2dyFTs5us" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 16.45 4.87 20.17 8.84 21.5C8.74 20.93 8.66 20.01 8.86 19.3C9.04 18.7 10.01 14.72 10.01 14.72C9.78 14.18 9.51 13.41 9.51 12.42C9.51 10.23 10.88 8.65 12.63 8.65C14.18 8.65 14.94 9.85 14.94 11.28C14.94 13.01 14.03 15.1 13.52 16.68C13.26 17.53 13.9 18.25 14.76 18.25C16.58 18.25 18 16.07 18 13.22C18 9.97 15.76 7.83 12.7 7.83C9.15 7.83 7.25 10.42 7.25 13.19C7.25 14.47 7.77 15.65 8.53 16.22C8.65 16.32 8.67 16.44 8.64 16.56C8.57 16.89 8.4 17.57 8.34 17.81C8.27 18.09 8.1 18.14 7.85 18.03C6.37 17.35 5.5 15.48 5.5 13.08C5.5 9.31 8.51 5.61 13.3 5.61C17.15 5.61 20 8.29 20 12.62C20 16.52 17.57 19.17 14.25 19.17C13.32 19.17 12.45 18.7 12.15 18.04C12.15 18.04 11.6 20.13 11.47 20.59C11.23 21.45 10.63 22.36 10.15 22.99C10.75 23.09 11.37 23.14 12 23.14C17.52 23.14 22 18.62 22 12.07C22 6.48 17.52 2 12 2Z" fill="currentColor"/>
              </svg>
            </a>
            <a href="https://www.threads.com/@melvitap_s" target="_blank" rel="noopener noreferrer" aria-label="Threads">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="currentColor"/>
              </svg>
            </a>
            <a href="https://www.youtube.com/@melvitap_s" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.376.505A3.016 3.016 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.376-.505a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="hero-avatar">
          <div className="avatar-wrapper">
            <div className="avatar-glow"></div>
            <div className="avatar-image">
              <img src={profileImg} alt="Melva Suárez" />
            </div>
            <div className="badge badge-1">
              <div>Proyectos</div>
              <div>5+</div>
            </div>
            <div className="badge badge-2">
              <div>Experiencia</div>
              <div>1+ años</div>
            </div>
          </div>
          <div className="avatar-stats">
            <div className="stat">
              <div>5+</div>
              <div>Proyectos</div>
            </div>
            <div className="stat">
              <div>3+</div>
              <div>Tecnologías</div>
            </div>
            <div className="stat">
              <div>5★</div>
              <div>Dedicación</div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
      </div>
    </section>
  );
}

export default Main;
