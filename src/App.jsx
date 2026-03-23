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

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/forfait" element={<Forfait />} />
        <Route path="/realisation" element={<Realisation />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
