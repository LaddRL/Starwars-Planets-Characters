import Planets from "./pages/Planets";
import React, { useState } from "react";
import M from "materialize-css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";

function App() {
  const [newHopeData, setNewHopeData] = useState([]);
  return (
    <div className="App container">
      <Router>
        <Routes>
          <Route path="/Planets" element={<Planets />} />
        </Routes>
        <div>
          <button>
            <NavLink to="/Planets">Planets</NavLink>
          </button>
        </div>
      </Router>
      <Planets />
    </div>
  );
}

export default App;
