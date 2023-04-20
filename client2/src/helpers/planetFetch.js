export function newHopeFetch (){
    fetch('http://localhost:3001/api/newHopePlanets')
    .then(response =>{
            return response.json()
        })
        .then(data =>{
            console.log(data[0])
        })
        .catch(error => 
            console.error(error));
}