import React from "react";
import { useEffect, useState } from "react";

export default function TesbPpl() {
    const [moviePplData, setMoviePplData] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3001/api/TesbPpl`)
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
                  <div className="card center  grey darken-4">
                    <div className="row"></div>
                    <h1>
                      <font face="Gothic edition" color="#ffff00">
                        {character.name}
                      </font>
                    </h1>
                    <img
                      className="img-responsive"
                      style={{ width: 500, height: 500 }}
                      src={character.img}
                    ></img>
                    <h5>
                      <font face="Gothic edition" size="6" color="#ffff00">
                        Height: {character.height}
                      </font>
                    </h5>
                    <h5>
                      <font face="Gothic edition" size="6" color="#ffff00">
                        Hair Color: {character.hair_color}
                      </font>
                    </h5>
                    <h5>
                      <font face="Gothic edition" size="6" color="#ffff00">
                        Eye Color: {character.eye_color}
                      </font>
                    </h5>
                    <h5>
                      <font face="Gothic edition" size="6" color="#ffff00">
                        Birth Year: {character.birth_year}
                      </font>
                    </h5>
                    <h5>
                      <font face="Gothic edition" size="6" color="#ffff00">
                        Gender: {character.gender}
                      </font>
                    </h5>
                    {/* <h5>
                      <font face="Gothic edition" size="6" color="#ffff00">
                        HomeWorld: {character.homeworld}
                      </font>
                    </h5> */}
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