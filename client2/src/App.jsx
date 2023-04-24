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
  const [moviePlData, setMoviePlData] = useState([]);
  return (
    <div className="App container">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Planets/:movieNum" element={<Planets />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
