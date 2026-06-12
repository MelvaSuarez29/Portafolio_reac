import React from "react";
import "./About.css";

// Lista de tecnologías que dominas (nombre, abreviatura, color)
const techStack = [
  { name: "Python", abbr: "Py", color: "#3776AB", bg: "rgba(55,118,171,0.08)" },
  { name: "Java", abbr: "Jv", color: "#f89e0c", bg: "rgba(234, 178, 48, 0.08)" },
  { name: "C++", abbr: "C+", color: "#00599C", bg: "rgba(0,89,156,0.08)" },
  { name: "React", abbr: "Re", color: "#61DAFB", bg: "rgba(97,218,251,0.08)" },
  {
    name: "JavaScript",
    abbr: "Js",
    color: "#F7DF1E",
    bg: "rgba(247,223,30,0.08)",
  },
  {
    name: "HTML/CSS",
    abbr: "Ht",
    color: "#E34F26",
    bg: "rgba(227,79,38,0.08)",
  },
  { name: "Git", abbr: "Gi", color: "#8f12fc", bg: "rgba(152, 46, 244, 0.08)" },
  { name: "Figma", abbr: "Fi", color: "#F24E1E", bg: "rgba(242,78,30,0.08)" },
];

// Estadísticas o highlights que quieres mostrar
const highlights = [
  { value: "1+", label: "Años de experiencia" },
  { value: "5+", label: "Proyectos realizados" },
  { value: "3+", label: "Tecnologías dominadas" },
  { value: "5★", label: "Dedicación" },
];

function About() {
  return (
    <section id="sobre-mi" className="about">
      <div className="about-bg"></div>
      <div className="about-container">
        <div className="about-header">
          <span className="section-tag">Sobre Mí</span>
          <h2 className="section-title">
            Creando experiencias digitales{" "}
            <span className="gradient-text">con propósito y precisión</span>
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p className="about-description">
              ¡Hola! Soy <strong>Melva Suárez</strong>, estudiante de la carrera
              de Desarrollo de Software en la{" "}
              <strong>Escuela Politécnica Nacional</strong>. Me apasiona
              construir productos que se encuentren en la intersección de la{" "}
              <span className="highlight">ingeniería creativa</span> y el{" "}
              <span className="highlight">diseño funcional</span>.
            </p>
            <p className="about-description">
              Mi enfoque consiste en entender el problema profundamente, diseñar
              un sistema flexible que responda a las necesidades de los
              usuarios. Me gusta la creatividad, la innovación y escribir código
              limpio y escalable.
            </p>

            <div className="highlights-grid">
              {highlights.map((h) => (
                <div key={h.label} className="highlight-card">
                  <div className="highlight-value">{h.value}</div>
                  <div className="highlight-label">{h.label}</div>
                </div>
              ))}
            </div>

            <a href="#contacto" className="contact-link">
              Conoce más sobre mí →
            </a>
          </div>

          <div className="tech-stack">
            <h3 className="tech-stack-title">Tecnologías que uso</h3>
            <div className="tech-grid">
              {techStack.map(({ name, abbr, color, bg }) => (
                <div
                  key={name}
                  className="tech-card"
                  style={{ borderColor: `${color}30` }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = color;
                    el.style.transform = "translateY(-3px)";
                    el.style.background = bg;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "rgba(124, 58, 237, 0.15)";
                    el.style.transform = "translateY(0)";
                    el.style.background = "rgba(15, 17, 48, 0.6)";
                  }}
                >
                  <div
                    className="tech-icon"
                    style={{ background: bg, borderColor: `${color}30`, color }}
                  >
                    {abbr}
                  </div>
                  <span className="tech-name">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
