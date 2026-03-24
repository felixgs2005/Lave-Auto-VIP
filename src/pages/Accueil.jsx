import { useState } from "react";
import Header from "../components/Header";
import "../Styles/accueil.css";

const realisations = [
  "/images/laveautorealisation.png",
  "/images/laveautorealisation2.png",
  "/images/laveautorealisation3.png",
  "/images/laveautorealisation4.png",
  "/images/laveautorealisation5.png",
  "/images/laveautorealisation6.png",
  "/images/laveautorealisation7.png",
];

const temoignages = [
  {
    nom: "Alexandre R.",
    note: 5,
    texte:
      "Service exceptionnel ! Ma voiture n'a jamais été aussi propre. L'équipe est professionnelle et le résultat est impeccable.",
  },
  {
    nom: "Sophie M.",
    note: 5,
    texte:
      "Je suis cliente depuis 6 mois et je ne changerais pour rien au monde. Qualité VIP à chaque passage, vraiment bluffant.",
  },
  {
    nom: "Thomas L.",
    note: 5,
    texte:
      "Le forfait Premium vaut chaque centime. Intérieur et extérieur traités avec un soin incroyable. Je recommande vivement !",
  },
];

const categories = [
  { icone: "🚿", nom: "Lavage" },
  { icone: "✨", nom: "Remise à Neuf" },
  { icone: "🧴", nom: "Shampoing Tapis/Tissu" },
  { icone: "🪡", nom: "Cire" },
  { icone: "🔧", nom: "Pneus" },
  { icone: "💎", nom: "Polissage" },
  { icone: "🛡️", nom: "Décontamination Peinture" },
  { icone: "⚙️", nom: "Shampoing Moteur" },
  { icone: "🪣", nom: "Protecteur de Vinyle" },
  { icone: "⚫", nom: "Lustre à Pneu" },
];

const Accueil = () => {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i - 1 + realisations.length) % realisations.length);
  const next = () => setIndex((i) => (i + 1) % realisations.length);

  return (
    <div className="accueil">
      <Header />
      <div className="hero">
        <video
          className="hero-video"
          src="/images/laveAutoVipClub.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>BIENVENUE DANS L'EXPÉRIENCE <span className="color-change">VIP</span></h1>
        </div>
      </div>

      <section className="section realisations" id="realisations">
        <h2 className="section-title">NOS RÉALISATIONS</h2>
        <div className="carousel">
          <button className="carousel-btn" onClick={prev}>
            &#8592;
          </button>
          <div className="carousel-track">
            {realisations.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Réalisation ${i + 1}`}
                className={`carousel-img ${i === index ? "active" : ""}`}
              />
            ))}
          </div>
          <button className="carousel-btn" onClick={next}>
            &#8594;
          </button>
        </div>
        <div className="carousel-dots">
          {realisations.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </section>

      <section className="section temoignages" id="temoignages">
        <h2 className="section-title">CE QUE DISENT NOS CLIENTS</h2>
        <div className="temoignages-grid">
          {temoignages.map((t, i) => (
            <div className="temoignage-card" key={i}>
              <div className="etoiles">{"★".repeat(t.note)}</div>
              <p className="temoignage-texte">"{t.texte}"</p>
              <span className="temoignage-nom">— {t.nom}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section forfaits" id="forfaits">
        <h2 className="section-title">NOS FORFAITS</h2>
        <div className="categories-grid">
          {categories.map((c, i) => (
            <div className="categorie-card" key={i}>
              <span className="categorie-icone">{c.icone}</span>
              <span className="categorie-nom">{c.nom}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section contact" id="contact">
        <h2 className="section-title">CONTACTEZ-NOUS</h2>
        <div className="contact-wrapper">
          <div className="contact-info">
            <p>📍 95 Bd Armand-Paris, Québec, QC G1C 7T2</p>
            <p>📞 418 614-0847</p>
            <p>✉️ info@laveautovipqc.com</p>
            <p>🕐 Lun – Ven: 9h – 17h</p>
          </div>
          <form className="contact-form">
            <input type="text" placeholder="Votre nom" required />
            <input type="email" placeholder="Votre e-mail" required />
            <input type="tel" placeholder="Votre téléphone" />
            <textarea placeholder="Votre message" rows={5} required />
            <button type="submit" className="contact-submit">
              Envoyer le message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Accueil;
