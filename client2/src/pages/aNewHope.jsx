import { useEffect, useState,  } from "react";
import { swapiFetch, newHopeFetch } from "../helpers/planetFetch";
import { useParams } from "react-router-dom";

export default function ANewHope() {
  const [moviePlData, setMoviePlData] = useState([]);
  const {movieNum} = useParams();
  // console.log("movieNum"+ movieNum)
  useEffect(() => {
    // switch(movieNum) {
    //   case 0:
    //     fetch(`http://localhost:3001/api/newHopePlanets `)
    // }
    fetch(`http://localhost:3001/api/newHopePlanets`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data);
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
              <div className="card center  deep-purple lighten-3">
              <div className="row"></div>
              <h1>{planet.name}</h1>
              <img
                className="img-responsive"
                style={{ width: 500, height: 500 }}
                src={planet.img}
              ></img>
              <h5>Climate: {planet.climate}</h5>
              <h5>Terrain: {planet.terrain}</h5>
              <h5>Population: {planet.population}</h5>
              <h5>Diameter: {planet.diameter}</h5>
              <div className="row"></div>
              </div>
              {/* Imagine this div as a card with its pic and info on it like its name, etc  */}
            </div>
          </div>
        );
      })}
    </div>
  );
}