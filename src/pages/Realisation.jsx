import React from "react";
import "../Styles/realisation.css";

const images = [
  { img: "/images/laveautorealisation.png" },
  { img: "/images/laveautorealisation2.png" },
  { img: "/images/laveautorealisation3.png" },
  { img: "/images/laveautorealisation4.png" },

  { img: "/images/laveautorealisation9.png", horizontal: true },
  { img: "/images/laveautorealisation10.png", horizontal: true },

  { img: "/images/laveautorealisation5.png" },
  { img: "/images/laveautorealisation6.png" },
  { img: "/images/laveautorealisation7.png" },
  { img: "/images/laveautorealisation8.png" },

  { img: "/images/laveautorealisation11.jpg" },
  { img: "/images/laveautorealisation12.jpg" },
];

const RealisationGallery = () => {
  return (
    <section className="gallery">
      <div className="title-realisation">
        <h1>Nos Réalisations</h1>
      </div>
      <div className="container">
        <div className="grid">
          {images.map((img, idx) => (
            <div
              className={`grid-item ${img.horizontal ? "horizontal" : ""}`}
              key={idx}
            >
              <img src={img.img} alt={`Réalisations ${idx + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealisationGallery;
