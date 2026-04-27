// src/components/Countdown.jsx
import { useEffect, useState } from "react";
import "./Countdown.css";

export default function Countdown() {
  const targetDate = new Date("2026-05-16T14:00:00");

  const getTimeLeft = () => {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      return null;
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return (
      <section id="contador" className="countdown">
        <h2>🎉 ¡Hoy es el gran día! 🎉</h2>
      </section>
    );
  }

  return (
    <section id="contador" className="countdown">
      <h2 className="countdown-title">Faltan</h2>

      <div className="countdown-timer">
        <div className="time-box">
          <span>{timeLeft.days}</span>
          <small>Días</small>
        </div>

        <div className="time-box">
          <span>{timeLeft.hours}</span>
          <small>Horas</small>
        </div>

        <div className="time-box">
          <span>{timeLeft.minutes}</span>
          <small>Minutos</small>
        </div>

        <div className="time-box">
          <span>{timeLeft.seconds}</span>
          <small>Segundos</small>
        </div>
      </div>
    </section>
  );
}
