import { useEffect, useState } from "react"

export default function HomePage(){
    const [filmData, setFilmData] = useState([]);
    useEffect(() => {
        fetch("https://swapi.dev/api/films/")
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            // console.log(JSON.stringify(data.results[0]))
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
                    {filmData.map((x) =>{
                        return (
                        <li>
                            {x.title}
                        </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}