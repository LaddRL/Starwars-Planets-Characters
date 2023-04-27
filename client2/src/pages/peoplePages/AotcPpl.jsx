import React from "react";
import { useEffect, useState } from "react";

export default function AotcPpl() {
    const [moviePplData, setMoviePplData] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3001/api/AotcPpl`)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
            setMoviePplData(data);
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);

      return (
        <div>
          {moviePplData.map((character) => {
            return (
              <div className="row">
                <div className="col s12 m12 l12">
                  <div className="card center  deep-purple lighten-3">
                  <div className="row"></div>
                  <h1>{character.name}</h1>
                  <img
                    className="img-responsive"
                    style={{ width: 500, height: 500 }}
                    src={character.img}
                  ></img>
                  <h5><font face = "Gothic edition" size = "6">Height: {character.height}</font></h5>
                  <h5>Hair Color: {character.hair_color}</h5>
                  <h5>Eye Color: {character.eye_color}</h5>
                  <h5>Birth Year: {character.birth_year}</h5>
                  <h5>Gender: {character.gender}</h5>
                  <h5>HomeWorld: {character.homeworld}</h5>
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