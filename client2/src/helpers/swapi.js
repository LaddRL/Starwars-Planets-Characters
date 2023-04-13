export function swapiFetch (){
    fetch('https://swapi.dev/api/films/')
    .then(response =>
        response.json())
        .then(data =>{
            let aNewHope = data.results[0].planets
            console.log(aNewHope) 
            return aNewHope;
        })
        .catch(error => 
            console.error(error));
}