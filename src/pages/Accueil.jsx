import "../Styles/accueil.css";

const Accueil = () => {
  return (
    <div className="accueil">
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
          <h1>Bienvenue dans l'expérience <span className="color-change">VIP</span></h1>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
