import Planets from "./pages/planets";
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
  const [newHopeData, setNewHopeData] = useState([]);
  return (
    <div className="App container">
      <Router>
        <div>
          <button>
            <NavLink to="/Planets">Planets</NavLink>
          </button>
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Planets" element={<Planets />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
