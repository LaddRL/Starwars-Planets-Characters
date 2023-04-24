export function swapiFetch(movie) {
  fetch("https://swapi.dev/api/films/")
    .then((response) => response.json())
    .then((data) => {
      let planet = data.results[movie].planets;
      console.log(planet);
      return planet;
    })
    .catch((error) => console.error(error));
}


