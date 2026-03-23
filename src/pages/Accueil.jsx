import Header from "../components/Header";
import "../Styles/accueil.css";

const Accueil = () => {
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
          <h1>Lave Auto VIP Club</h1>
          <p>Le soin que votre véhicule mérite</p>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
