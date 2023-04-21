import { useEffect, useState } from "react";
import { swapiFetch, newHopeFetch } from "../helpers/planetFetch";

export default function Planets() {
  const [newHopeData, setNewHopeData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/api/newHopePlanets")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setNewHopeData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [])

  return (
    <div>
      {newHopeData.map((planet) => {
        return (
          <div className="row">
            <div className="col s12 m12 l12">
              {/* Imagine this div as a card with its pic and info on it like its name, etc  */}
              <h2>{planet.name}</h2>
              <img
                className="img-responsive"
                style={{ width: 500, height: 500 }}
                src={planet.img}
              ></img>
              <li>Climate: {planet.climate}</li>
              <li>Terrain: {planet.terrain}</li>
              <li>Population: {planet.population}</li>
              <li>Diameter: {planet.diameter}</li>
            </div>
          </div>
        );
      })}
      );
    </div>
  );
}
