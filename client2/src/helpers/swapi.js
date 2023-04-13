export function swapiFetch (){
    fetch('https://swapi.dev/api/planets/1/')
    .then(response =>
        response.json())
        .then(data =>{
            console.log(data) 
            return data;
        })
        .catch(error => 
            console.error(error));
}