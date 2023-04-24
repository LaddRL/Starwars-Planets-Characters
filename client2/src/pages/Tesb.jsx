import { useEffect, useState,  } from "react";
import { swapiFetch, newHopeFetch } from "../helpers/planetFetch";
import { useParams } from "react-router-dom";

export default function Tesb() {
  const [moviePlData, setMoviePlData] = useState([]);
  const {movieNum} = useParams();
  // console.log("movieNum"+ movieNum)
  useEffect(() => {
    // switch(movieNum) {
    //   case 0:
    //     fetch(`http://localhost:3001/api/newHopePlanets `)
    // }
    fetch(`http://localhost:3001/api/TesbPlanets`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setMoviePlData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {moviePlData.map((planet) => {
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
    </div>
  );
}