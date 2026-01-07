// src/components/SectionDivider.jsx
import banner from "../assets/banner.png";
import "./SectionDivider.css";

export default function SectionDivider() {
  return (
    <div className="section-divider">
      <img
        src={banner}
        alt="Separador decorativo"
        className="section-divider-image"
      />
    </div>
  );
}
