// src/components/Navbar.jsx
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo"> 🎉 Cumple de Amelia 🎂</div>

        <nav className={`navbar-menu ${open ? "open" : ""}`}>
          <a href="#inicio" onClick={handleClick}>Inicio</a>
          <a href="#invitacion" onClick={handleClick}>Invitación</a>
          <a href="#contador" onClick={handleClick}>Cuenta regresiva</a>
          <a href="#galeria" onClick={handleClick}>Galería</a>
          <a href="#contacto" onClick={handleClick}>Contacto</a>
        </nav>

        <button
          className="navbar-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          ☰
        </button>
      </div>
    </header>
  );
}
