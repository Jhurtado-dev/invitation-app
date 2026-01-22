// src/components/BirthdayHighlight.jsx
import image from "../assets/number.png";
import "./BirthdayHighlight.css";

export default function BirthdayHighlight() {
  return (
    <section id="cumpleanos" className="birthday-highlight">
        <div className="bithday-card">


      <img
        src={image}
        alt="El cumpleaños de nuestra princesa"
        className="birthday-image"
        />
        </div>
    </section>
  );
}
