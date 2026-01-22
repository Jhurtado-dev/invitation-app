// src/components/ContactInfo.jsx
import { FaWhatsapp } from "react-icons/fa";
import "./ContactInfo.css";

export default function ContactInfo() {
  return (
    <section id="contacto" className="contact-section">
      <div className="contact-card">
        <p className="contact-text">
          ¡Te esperamos!
          <br />
          Por favor confirma tu asistencia con mis papis.
        </p>

        <div className="contact-whatsapp">
          <a
            href="https://wa.me/527293026498"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
            Papi
          </a>

          <a
            href="https://wa.me/527293520994"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
            Mami
          </a>
        </div>
      </div>
    </section>
  );
}
