
import ANewHope from "./pages/aNewHope";
import Tesb from "./pages/Tesb";
import Rotj from "./pages/Rotj";
import Tpm from "./pages/Tpm";
import Aotc from "./pages/Aotc";
import Rots from "./pages/Rots";
import AnhPpl from "./pages/peoplePages/AnhPpl";
import TesbPpl from "./pages/peoplePages/TesbPpl";
import RotjPpl from "./pages/peoplePages/RotjPpl";
import TpmPpl from "./pages/peoplePages/TpmPpl";
import AotcPpl from "./pages/peoplePages/AotcPpl";
import RotsPpl from "./pages/peoplePages/RotsPpl";
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
          <Route path="/People/1" element={<AnhPpl />} />
          <Route path="/People/2" element={<TesbPpl />} />
          <Route path="/People/3" element={<RotjPpl />} />
          <Route path="/People/4" element={<TpmPpl />} />
          <Route path="/People/5" element={<AotcPpl />} />
          <Route path="/People/6" element={<RotsPpl />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
