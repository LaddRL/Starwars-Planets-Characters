import { useEffect, useState,  } from "react";
import { swapiFetch, newHopeFetch } from "../helpers/planetFetch";
import { useParams } from "react-router-dom";

export default function Rots() {
  const [moviePlData, setMoviePlData] = useState([]);
  const {movieNum} = useParams();
  useEffect(() => {
    fetch(`http://localhost:3001/api/RotsPlanets`)
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
              <div className="card center  grey darken-4">
                <div className="row"></div>
                <h1>
                  <font face="Gothic edition" color="#ffff00">
                    {planet.name}
                  </font>
                </h1>
                <img
                  className="img-responsive"
                  style={{ width: 500, height: 500 }}
                  src={planet.img}
                ></img>
                <h5>
                  <font face="Gothic edition" size="6" color="#ffff00">
                    Climate: {planet.climate}
                  </font>
                </h5>
                <h5>
                  <font face="Gothic edition" size="6" color="#ffff00">
                    Terrain: {planet.terrain}
                  </font>
                </h5>
                <h5>
                  <font face="Gothic edition" size="6" color="#ffff00">
                    Population: {planet.population}
                  </font>
                </h5>
                <h5>
                  <font face="Gothic edition" size="6" color="#ffff00">
                    Diameter: {planet.diameter}
                  </font>
                </h5>
                <h5>
                  <font face="Gothic edition" size="6" color="#ffff00">
                    Gravity: {planet.gravity}
                  </font>
                </h5>
                <h5>
                  <font face="Gothic edition" size="6" color="#ffff00">
                    Surface Water: {planet.surface_water}
                  </font>
                </h5>
                <div className="row"></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
);
}