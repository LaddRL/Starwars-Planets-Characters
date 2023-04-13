import Planets from "./pages/Planets";
import React from "react";


function App() {
  function handleClick() {
    fetch('https://swapi.dev/api/films/')
    .then(response => 
      response.json())
      .then(data => { 
        console.log(data.results[0].planets[0])
        
      })
      .catch(error => 
        console.error(error));
  }

  return (
    <div className='App'>
      <Planets/>
      <div>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </div>
  )
}

export default App;