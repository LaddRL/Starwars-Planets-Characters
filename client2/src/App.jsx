import Planets from "./pages/planets";
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
