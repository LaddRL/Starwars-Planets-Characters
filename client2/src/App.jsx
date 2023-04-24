
import ANewHope from "./pages/aNewHope";
import Tesb from "./pages/Tesb";
import Rotj from "./pages/Rotj";
import Tpm from "./pages/Tpm";
import Aotc from "./pages/Aotc";
import Rots from "./pages/Rots";
import React, { useState } from "react";
import M from "materialize-css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/homePage";

function App() {
  const [moviePlData, setMoviePlData] = useState([]);
  return (
    <div className="App container">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Movies/1" element={<ANewHope />} />
          <Route path="/Movies/2" element={<Tesb />} />
          <Route path="/Movies/3" element={<Rotj />} />
          <Route path="/Movies/4" element={<Tpm />} />
          <Route path="/Movies/5" element={<Aotc />} />
          <Route path="/Movies/6" element={<Rots />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
