import Planets from "./pages/Planets";
import React, { useState } from "react";
import M from "materialize-css";
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from "react-router-dom";

function App() {
  const [newHopeData, setNewHopeData] = useState([]);
  return (
    <div className="App container">
      <Router>
        <Routes>
          <Route path="/" element={<Planets />} />
          <Route path="/planets" element={<Planets />} />
        </Routes>
      </Router>
      <Planets />
      <div>
        <button><NavLink to="/planets">Planets</NavLink></button>
      </div>
    </div>
  );
}

export default App;
