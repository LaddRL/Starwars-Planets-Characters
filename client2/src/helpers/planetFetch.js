export function newHopeFetch (){
    fetch('http://localhost:3001/api/newHopePlanets')
    .then(response =>
        { console.log(response)
            return response
        })
        // .then(data =>{
        //     let aNewHope = data.results[0].planets
        //     console.log(aNewHope) 
        //     return aNewHope;
        // })
        .catch(error => 
            console.error(error));
}