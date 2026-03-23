import React, { useState } from "react";
import "../Styles/forfait.css";

// Exemple simplifié des forfaits
const forfaitsData = [
  {
    id: 1,
    category: "auto",
    title: "Cire Perfection Wax 324",
    description: "Application à la main de la cire, protection 9-13 mois",
    duration: "1 h 30 min",
    price: "79,99 $CA",
  },
  {
    id: 2,
    category: "camion",
    title: "Remise à neuf Camion",
    description: "Lavage int/ext + Shampoing moteur + etc.",
    duration: "6 h",
    price: "299,99 $CA",
  },
  {
    id: 3,
    category: "vus",
    title: "Cire Perfection Wax 324 VUS",
    description: "Application à la main de la cire, protection 9-13 mois",
    duration: "2 h",
    price: "99,99 $CA",
  },
  {
    id: 4,
    category: "all",
    title: "Shampoing tapis/tissu (avant)",
    description: "Machine professionnelle sur sièges & tapis",
    duration: "2 h",
    price: "49,99 $CA",
  },
];

const categories = ["auto", "vus", "camion"];

const Forfait = () => {
  const [selectedCategory, setSelectedCategory] = useState(""); // aucun mot au départ

  const filteredForfaits = forfaitsData.filter(
    (f) => f.category === selectedCategory || f.category === "all",
  );

  return (
    <div className="forfait-page">
      <div className="forfait-header">
        <h1 className="forfait-title">
          Nos Forfaits {selectedCategory ? selectedCategory.toUpperCase() : ""}
        </h1>
        <div className="dropdown-container">
          <button className="contact-btn">Choisis ton véhicule</button>
          <div className="dropdown-content">
            {categories.map((cat) => (
              <div
                key={cat}
                className="dropdown-item"
                onClick={() => setSelectedCategory(cat)}
              >
                {cat.toUpperCase()}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="forfait-cards">
        {filteredForfaits.map((f) => (
          <div key={f.id} className="forfait-card">
            <h3>{f.title}</h3>
            <p>{f.description}</p>
            <div className="forfait-info">
              <span>{f.duration}</span>
              <span>{f.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forfait;
