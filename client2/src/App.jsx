import Planets from "./pages/Planets";
import React from "react";


function App() {
  function handleClick() {
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
          .catch(error => {
              console.error(error);
            })
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