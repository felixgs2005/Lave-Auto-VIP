import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./Styles/header.css";
import "./Styles/footer.css";
import "./Styles/accueil.css";
import "./Styles/realisation.css";
import "./Styles/forfait.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Accueil from "./pages/Accueil";
import Forfait from "./pages/Forfait";
import Realisation from "./pages/Realisation";

function Intro({ onEnd }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <video
        src="/images/videoIntro.mp4"
        autoPlay
        muted
        playsInline
        onEnded={onEnd}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <button
        onClick={onEnd}
        onMouseEnter={e => {
          e.currentTarget.style.background = "rgba(255,255,255,0.25)";
          e.currentTarget.style.letterSpacing = "0.18em";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.letterSpacing = "0.12em";
        }}
        style={{
          position: "absolute",
          bottom: "2rem",
          right: "2rem",
          background: "transparent",
          color: "#fff",
          border: "1px solid rgba(255,255,255,0.6)",
          padding: "0.6rem 1.6rem",
          borderRadius: "2rem",
          cursor: "pointer",
          fontSize: "0.75rem",
          fontWeight: "600",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          backdropFilter: "blur(6px)",
          transition: "all 0.3s ease",
        }}
      >
        Passer &nbsp;›
      </button>
    </div>
  );
}

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && <Intro onEnd={() => setShowIntro(false)} />}
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/forfait" element={<Forfait />} />
          <Route path="/realisation" element={<Realisation />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
