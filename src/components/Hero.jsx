// src/components/Hero.jsx
import bienvenida from "../assets/bienvenida.png";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <img
        src={bienvenida}
        alt="Bienvenida Amelia Giovanna"
        className="hero-image"
      />
    </section>
  );
}
