import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Accueil from "./pages/Accueil";
import Forfait from "./pages/Forfait";
import Realisation from "./pages/Realisation";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/forfait" element={<Forfait />} />
        <Route path="/realisation" element={<Realisation />} />
      </Routes>
    </Router>
  );
}

export default App;
