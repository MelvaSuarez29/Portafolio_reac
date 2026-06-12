import React from "react";
import "./Project.css";
import img2 from "../../assets/2-img.jpg";
import img3 from "../../assets/9-img.avif";
import img4 from "../../assets/4-img.avif";
import img5 from "../../assets/5-img.avif";
import img6 from "../../assets/6-img.avif";
import img7 from "../../assets/8-img.avif";

const projectImages = [img2, img3, img4, img5, img6, img7];

const projects = [
  {
    id: 1,
    title: "Portafolio Personal",
    description:
      "Mi portafolio personal interactivo, construido con React y CSS modular. Totalmente responsive y con un diseño moderno.",
    tags: ["React", "CSS", "Vite"],
    imageIndex: 0,
    accent: "#00d4ff",
    demoLink: "#",
    codeLink: "https://github.com/MelvaSuarez29/portafolio",
  },
  {
    id: 2,
    title: "App de Clima",
    description:
      "Aplicación del clima en tiempo real que consume la API de OpenWeatherMap. Permite buscar ciudades y ver el pronóstico.",
    tags: ["JavaScript", "API", "HTML/CSS"],
    imageIndex: 1,
    accent: "#a855f7",
    demoLink: "#",
    codeLink: "https://github.com/MelvaSuarez29/clima-app",
  },
  {
    id: 3,
    title: "Sistema de Tareas",
    description:
      "CRUD de tareas desarrollado con Java y Spring Boot. Incluye autenticación de usuarios y persistencia en PostgreSQL.",
    tags: ["Java", "Spring Boot", "PostgreSQL"],
    imageIndex: 2,
    accent: "#7c3aed",
    demoLink: "#",
    codeLink: "https://github.com/MelvaSuarez29/tareas-api",
  },
  {
    id: 4,
    title: "Gestión de Notas Académicas",
    description:
      "Aplicación de escritorio desarrollada en C++ con Qt Creator que permite la administración, registro y consulta de calificaciones académicas. Incluye sistema de autenticación, CRUD completo de estudiantes y cálculo automático de promedios.",
    tags: ["C++", "Qt", "Escritorio"],
    imageIndex: 3,
    accent: "#00d4ff",
    demoLink: "#",
    codeLink: "https://github.com/MelvaSuarez29/Gestion-de-Notas",
  },
  {
    id: 5,
    title: "Diseños en Figma",
    description:
      "Colección de diseños de interfaces de usuario creadas en Figma para practicar UI/UX. Incluye wireframes y prototipos.",
    tags: ["Figma", "UI/UX"],
    imageIndex: 4,
    accent: "#a855f7",
    demoLink: "#",
    codeLink: "https://github.com/MelvaSuarez29/figma-disenos",
  },
  {
    id: 6,
    title: "Página Web para un Negocio Local",
    description:
      "Sitio web estático para un negocio local, con información de contacto, galería y mapa interactivo.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageIndex: 5,
    accent: "#7c3aed",
    demoLink: "#",
    codeLink: "https://github.com/MelvaSuarez29/negocio-local",
  },
];

function Projects() {
  return (
    <section id="proyectos" className="projects">
      <div className="projects-bg"></div>
      <div className="projects-container">
        <div className="projects-header">
          <span className="section-tag-projects">Proyectos</span>
          <h2 className="projects-title">
            Proyectos realizados durante mi formación académica
          </h2>
          <p className="projects-subtitle">
            Una selección de proyectos que abarcan desde aplicaciones web hasta
            herramientas de desarrollo y diseño.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="view-all">
          <button className="view-all-button">
            Ver Todos los Proyectos
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <div
      className="project-card"
      style={{ borderColor: `${project.accent}50` }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = `${project.accent}70`;
        el.style.transform = "translateY(-4px)";
        el.style.boxShadow = `0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px ${project.accent}20`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "rgba(124, 58, 237, 0.15)";
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "none";
      }}
    >
      <div className="project-thumbnail">
        <img src={projectImages[project.imageIndex]} alt={project.title} />
        <div className="thumbnail-overlay"></div>
        <div
          className="accent-line"
          style={{
            background: `linear-gradient(90deg, ${project.accent}, transparent)`,
          }}
        ></div>
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="tag"
              style={{
                color: project.accent,
                background: `${project.accent}12`,
                borderColor: `${project.accent}25`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="project-links">
          <a
            href={project.demoLink}
            className="demo-link"
            style={{ color: project.accent }}
          >
            Ver Demo
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 3H21V9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 14L21 3"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a href={project.codeLink} className="code-link">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21C9.5 20.77 9.5 20.14 9.5 19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18.02 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26C14.5 19.6 14.5 20.68 14.5 21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 6.48 17.52 2 12 2Z"
                fill="currentColor"
              />
            </svg>
            Código
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
