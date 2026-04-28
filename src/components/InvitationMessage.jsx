// src/components/InvitationMessage.jsx
import "./InvitationMessage.css";

export default function InvitationMessage() {
  return (
    <section id="invitacion" className="invitation-message">
      <div className="invitation-card">
        <p>
          Te invitamos a festejar mi cumpleaños {" "}
          <strong>#5</strong>, será el{" "}
          <strong>sábado 16 de mayo</strong> a las{" "}
          <strong>2:00 PM</strong>
        </p>

        <p className="highlight">
          ¡No faltes! 🎉🎂
        </p>

         {/* 📍 UBICACIÓN */}
        <a
          href="https://maps.app.goo.gl/QSqe8QVpQPhHe1kn6"
          target="_blank"
          rel="noopener noreferrer"
          className="location-link"
        >
          <span className="location-icon">📍</span>
          Ver ubicación
        </a>
      </div>
    </section>
  );
}
