import { useEffect, useState } from "react";

export default function HomePage(){
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
        <div>
            <div>
                <h1>Welcome to the galaxy!</h1>
            </div>
            <div>
                <h3>Click on the movie to see the planets featured!</h3>
            </div>
            <div>
                <ul>
                    {filmData.map((swMovie, index) =>{
                        return (
                        <li>
                            <a href={`/Planets/${index + 1}`}>
                            {swMovie.title}
                          
                            </a>
                        </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}