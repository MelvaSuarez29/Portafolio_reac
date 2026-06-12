import React, { useState } from "react";
import "./Contact.css";

// Enlaces redes sociales
const socials = [
  { icon: "github", label: "GitHub", handle: "@MelvaSuarez29", href: "https://github.com/MelvaSuarez29" },
  { icon: "linkedin", label: "LinkedIn", handle: "Melva Suárez", href: "https://www.linkedin.com/in/melvasu%C3%A1rez/" },
  { icon: "pinterest", label: "Pinterest", handle: "@melvasuarez", href: "https://pin.it/2dyFTs5us" },
  { icon: "threads", label: "Threads", handle: "@melvitap_s", href: "https://www.threads.com/@melvitap_s" },
  { icon: "youtube", label: "YouTube", handle: "@melvitap_s", href: "https://www.youtube.com/@melvitap_s" },
];

// Información de contacto adicional
const contactInfo = [
  { icon: "map", label: "Ubicación", value: "Quito, Ecuador" },
  { icon: "clock", label: "Zona horaria", value: "ECT — UTC−5" },
  { icon: "mail", label: "Tiempo de respuesta", value: "Dentro de 24 horas" },
];

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle, sending, sent

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  // Simula el envío del formulario (debes conectarlo a un backend o servicio)
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <section id="contacto" className="contact">
      <div className="contact-bg"></div>
      <div className="contact-container">
        {/* Encabezado */}
        <div className="contact-header">
          <span className="section-tag-contact">Contacto</span>
          <h2 className="contact-title">
            Construyamos algo{" "}
            <span className="gradient-text">extraordinario</span>
          </h2>
          <p className="contact-subtitle">
            Estoy abierta a oportunidades de trabajo, proyectos colaborativos
            y conversaciones interesantes. Escríbeme y te responderé.
          </p>
        </div>

        <div className="contact-grid">
          {/* Formulario */}
          <div className="contact-form-wrapper">
            {status === "sent" ? (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h3>¡Mensaje enviado!</h3>
                <p>Gracias por contactarme. Te responderé lo antes posible.</p>
                <button onClick={() => setStatus("idle")} className="reset-button">
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <h3>Envía un mensaje</h3>
                <div className="form-group">
                  <label htmlFor="name">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="tu@email.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Cuéntame sobre tu proyecto, presupuesto, etc."
                  />
                </div>
                <button type="submit" disabled={status === "sending"} className="submit-button">
                  {status === "sending" ? "Enviando..." : "Enviar Mensaje"}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>
            )}
          </div>

          {/* Información de contacto y redes */}
          <div className="contact-info">
            <div className="info-card">
              <h3>Información rápida</h3>
              <div className="info-list">
                {contactInfo.map(({ icon, label, value }) => (
                  <div key={label} className="info-item">
                    <div className="info-icon">
                      {icon === "map" && (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2C8.13 2 5 5.13 5 9C5 13.17 12 22 12 22C12 22 19 13.17 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor"/>
                        </svg>
                      )}
                      {icon === "clock" && (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {icon === "mail" && (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {icon === "youtube" && (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.376.505A3.016 3.016 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.376-.505a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      )}    
                    </div>
                    <div>
                      <div className="info-label">{label}</div>
                      <div className="info-value">{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="info-card">
              <h3>Encuéntrame en línea</h3>
              <div className="social-list">
                {socials.map(({ icon, label, handle, href }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="social-item">
                    <div className="social-icon">
                      {icon === "github" && (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2C6.48 2 2 6.48 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21C9.5 20.77 9.5 20.14 9.5 19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18.02 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26C14.5 19.6 14.5 20.68 14.5 21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 6.48 17.52 2 12 2Z" fill="currentColor"/>
                        </svg>
                      )}
                      {icon === "linkedin" && (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C0.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.203 0 22.222 0h.003z" fill="currentColor"/>
                        </svg>
                      )}
                      {icon === "pinterest" && (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2C6.48 2 2 6.48 2 12C2 16.45 4.87 20.17 8.84 21.5C8.74 20.93 8.66 20.01 8.86 19.3C9.04 18.7 10.01 14.72 10.01 14.72C9.78 14.18 9.51 13.41 9.51 12.42C9.51 10.23 10.88 8.65 12.63 8.65C14.18 8.65 14.94 9.85 14.94 11.28C14.94 13.01 14.03 15.1 13.52 16.68C13.26 17.53 13.9 18.25 14.76 18.25C16.58 18.25 18 16.07 18 13.22C18 9.97 15.76 7.83 12.7 7.83C9.15 7.83 7.25 10.42 7.25 13.19C7.25 14.47 7.77 15.65 8.53 16.22C8.65 16.32 8.67 16.44 8.64 16.56C8.57 16.89 8.4 17.57 8.34 17.81C8.27 18.09 8.1 18.14 7.85 18.03C6.37 17.35 5.5 15.48 5.5 13.08C5.5 9.31 8.51 5.61 13.3 5.61C17.15 5.61 20 8.29 20 12.62C20 16.52 17.57 19.17 14.25 19.17C13.32 19.17 12.45 18.7 12.15 18.04C12.15 18.04 11.6 20.13 11.47 20.59C11.23 21.45 10.63 22.36 10.15 22.99C10.75 23.09 11.37 23.14 12 23.14C17.52 23.14 22 18.62 22 12.07C22 6.48 17.52 2 12 2Z" fill="currentColor"/>
                        </svg>
                      )}
                      {icon === "threads" && (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="currentColor"/>
                        </svg>
                      )}
                      {icon === "youtube" && (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.376.505A3.016 3.016 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.376-.505a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      )}
                    </div>
                    <div>
                      <div className="social-label">{label}</div>
                      <div className="social-handle">{handle}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;