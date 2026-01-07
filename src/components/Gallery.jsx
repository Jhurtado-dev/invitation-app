// src/components/Gallery.jsx
import { useState } from "react";
import "./Gallery.css";

import foto1 from "../assets/gallery/foto1.jpg";
import foto2 from "../assets/gallery/foto2.jpg";
import foto3 from "../assets/gallery/foto3.jpg";
import foto4 from "../assets/gallery/foto4.jpg";
import foto5 from "../assets/gallery/foto5.jpg";

const photos = [foto1, foto2, foto3, foto4, foto5];

export default function Gallery() {
  const [activePhoto, setActivePhoto] = useState(null);

  return (
    <section id="galeria" className="gallery">
      <h2 className="gallery-title">Momentos especiales 💕</h2>

      <div className="gallery-grid">
        {photos.map((photo, index) => (
          <div
            className="gallery-item"
            key={index}
            onClick={() => setActivePhoto(photo)}
          >
            <img src={photo} alt={`Foto ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* 🔍 LIGHTBOX COLLAGE */}
      {activePhoto && (
        <div className="lightbox" onClick={() => setActivePhoto(null)}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setActivePhoto(null)}
            >
              ✕
            </button>

            <div className="lightbox-main">
              <img src={activePhoto} alt="Foto ampliada" />
            </div>

            <div className="lightbox-thumbs">
              {photos.map((photo, index) => (
                <img
                  key={index}
                  src={photo}
                  alt={`Miniatura ${index + 1}`}
                  className={photo === activePhoto ? "active" : ""}
                  onClick={() => setActivePhoto(photo)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
