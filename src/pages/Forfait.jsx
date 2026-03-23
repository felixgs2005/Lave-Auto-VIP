import React, { useState } from "react";
import "../Styles/forfait.css";

const forfaitsData = [
  {
    id: 1,
    category: "auto",
    title: "CIRE PERFECTION WAX 324 AUTO",
    description:
      "Application à la main de la cire, offre une protection d'une durée de 9 à 13 mois selon usage du véhicule.",
    duration: "1 h 30 min",
    price: "79,99 $CA",
  },
  {
    id: 2,
    category: "camion",
    title: "REMISE À NEUF CAMION",
    description:
      "- Lavage int/ext\n- Tornardo trappe à air\n- Balayeuse\n- Protecteur de vinyle\n- Vitre int.\n- Shampoing tapis/tissu (au besoin)\n- Shampoing moteur\n- Cire 324\n- Lustre à pneu\n- Vitre ext.",
    duration: "6 h",
    price: "299,99 $CA",
  },
  {
    id: 3,
    category: "auto",
    title: "REMISE À NEUF AUTO",
    description:
      "- Lavage int/ext\n- Tornardo trappe à air\n- Balayeuse\n- Protecteur de vinyle\n- Vitre int.\n- Shampoing tapis/tissu (au besoin)\n- Shampoing moteur\n- Cire 324\n- Décontamination peinture\n- Lustre à pneu\n- Vitre ext.",
    duration: "4 h",
    price: "229,99 $CA",
  },
  {
    id: 4,
    category: "auto",
    title: "POSE DE PNEU AUTO (DÉJÀ MONTÉ)",
    description:
      "- Installer 4 pneus déjà montés sur les roues\n- Effectuer la rotation",
    duration: "45 min",
    price: "49,99 $CA",
  },
  {
    id: 5,
    category: "auto",
    title: "PNEU POSÉ + BALANCÉ (ACIER 13 À 15 POUCES)",
    description: "- Montage\n- Démontage\n- Balancement",
    duration: "1 h",
    price: "59,99 $CA",
  },
  {
    id: 6,
    category: "auto",
    title: "PNEU POSÉ + BALANCÉ (ACIER 16 POUCES)",
    description: "- Montage\n- Démontage\n- Balancement",
    duration: "1 h",
    price: "64,99 $CA",
  },
  {
    id: 7,
    category: "auto",
    title: "PNEU POSÉ + BALANCÉ (ACIER 17 À 18 POUCES)",
    description: "- Montage\n- Démontage\n- Balancement",
    duration: "1 h",
    price: "69,99 $CA",
  },
  {
    id: 8,
    category: "auto",
    title: "PNEU POSÉ + BALANCÉ (ACIER 19 À 21 POUCES)",
    description: "- Montage\n- Démontage\n- Balancement",
    duration: "1 h",
    price: "79,99 $CA",
  },
  {
    id: 9,
    category: "all",
    title: "SHAMPOING TAPIS/TISSU (AVANT) AUTO",
    description: "Shampoing tapis/tissu sur la partie avant du véhicule",
    duration: "1 h",
    price: "24,99 $CA",
  },
  {
    id: 10,
    category: "all",
    title: "SHAMPOING TAPIS/TISSU (AVANT) CAMION",
    description:
      "Shampoing tapis/tissu sur la partie avant seulement du véhicule",
    duration: "1 h 30 min",
    price: "39,99 $CA",
  },
  {
    id: 11,
    category: "all",
    title: "VÉHICULE DE COURTOISIE",
    description: "Véhicule de courtoisie pour déplacement rapide",
    duration: "5 min",
    price: "14,99 $CA",
  },
  {
    id: 12,
    category: "vus",
    title: "SHAMPOING TAPIS/TISSU (AVANT) VUS",
    description:
      "Shampoing tapis/tissu sur la partie avant seulement du véhicule",
    duration: "1 h 15 min",
    price: "29,99 $CA",
  },
  // ... tu peux continuer à ajouter toutes les autres prestations de la même manière
];
const categories = ["auto", "vus", "camion"];

const Forfait = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Si aucune catégorie sélectionnée, on affiche toutes les cartes
  const filteredForfaits = selectedCategory
    ? forfaitsData.filter(
        (f) => f.category === selectedCategory || f.category === "all",
      )
    : forfaitsData;

  return (
    <div className="forfait-page">
      <div className="forfait-overlay" />
      <div className="text-index">
        <div className="forfait-header">
          <h1 className="forfait-title">
            Nos Forfaits{" "}
            {selectedCategory ? selectedCategory.toUpperCase() : ""}
          </h1>
          <div className="dropdown-container">
            <button
              className="contact-btn"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Choisis ton véhicule
            </button>
            {dropdownOpen && (
              <div className="dropdown-content">
                <div
                  className="dropdown-item"
                  onClick={() => {
                    setSelectedCategory(""); // "Tout afficher"
                    setDropdownOpen(false);
                  }}
                >
                  TOUT
                </div>
                {categories.map((cat) => (
                  <div
                    key={cat}
                    className="dropdown-item"
                    onClick={() => {
                      setSelectedCategory(cat);
                      setDropdownOpen(false);
                    }}
                  >
                    {cat.toUpperCase()}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="forfait-cards">
          {filteredForfaits.map((f) => (
            <div className="forfait-card">
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
    </div>
  );
};

export default Forfait;
