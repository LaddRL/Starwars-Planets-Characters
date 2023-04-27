import { useEffect, useState } from "react";

export default function HomePage() {
  const [filmData, setFilmData] = useState([]);
  useEffect(() => {
    fetch("https://swapi.dev/api/films/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFilmData(data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(filmData);
  return (
    <div className="container">
      <div>
        <h1>Welcome to the galaxy!</h1>
      </div>
      <div className="col s12 m6 l6">
        <h3 className="left-align">Planets featured!</h3>
        <div className="left-align">
          {filmData.map((swMovie, index) => {
            return (
              <h5 className="card-content">
                <a href={`/Movies/${index + 1}`}>{swMovie.title}</a>
              </h5>
            );
          })}
        </div>
      </div>
      <div className="col s12 m6 l6">
        <h3 className="right-align">Characters featured!</h3>
        <div className="right-align">
          <h5 className="card-content">
            <a href="/People/1">A New Hope Characters</a><br />
            <a href="/People/2">The Empire Strikes Back Characters</a><br />
            <a href="/People/3">Return of the Jedi Characters</a><br />
            <a href="/People/4">The Phantom Menace Characters</a><br />
            <a href="/People/5">Attack of the Clones Characters</a><br />
            <a href="/People/6">Revenge of the Sith Characters</a><br />
          </h5>
        </div>
      </div>
    </div>
  );
}
