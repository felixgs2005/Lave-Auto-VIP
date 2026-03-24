import React from "react";
import "../Styles/carriere.css";

const postes = [
  {
    img: "/images/poste1.png",
    titre: "Laveur(se) d'automobile",
    description: "Formation offerte.",
    type: "Temps plein",
  },
  {
    img: "/images/poste2.png",
    titre: "Monteur(se) de pneus",
    description: "Expérience requisem Permis de conduire demandé",
    type: "Temps plein",
  },
  {
    img: "/images/poste3.png",
    titre: "Monteur(se) de pneus",
    description: "Expérience requisem Permis de conduire demandé",
    type: "Temps plein",
  },
];

const Carriere = () => {
  return (
    <section className="carriere">
      <div className="title-carriere">
        <h1>Nos Opportunités</h1>
      </div>
      <div className="container">
        <div className="grid">
          {postes.map((poste, idx) => (
            <div className="poste-card" key={idx}>
              <div className="img-container">
                <img src={poste.img} alt={poste.titre} />
              </div>
              <div className="poste-info">
                <h2>{poste.titre}</h2>
                <p>{poste.description}</p>
                <span className="poste-type">{poste.type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="formulaire-section">
        <h2>Postulez maintenant</h2>
        <form className="cv-form">
          <input type="text" placeholder="Votre nom" required />
          <input type="email" placeholder="Votre email" required />
          <select required>
            <option value="">Choisissez le poste</option>
            <option value="autre">Aucun de ceux affichés</option>
            {postes.map((poste, idx) => (
              <option key={idx} value={poste.titre}>
                {poste.titre}
              </option>
            ))}
          </select>
          <textarea
            placeholder="Message / lettre de motivation"
            rows="5"
          ></textarea>
          <input type="file" accept=".pdf,.doc,.docx" required />
          <button type="submit">Envoyer votre CV</button>
        </form>
      </div>
    </section>
  );
};

export default Carriere;
