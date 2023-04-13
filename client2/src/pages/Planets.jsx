import { useEffect, useState } from "react";
import { swapiFetch, newHopeFetch } from "../helpers/planetFetch";


export default function Planets(){
    const [newHopePlanets, setNewHopePlanets] = useState([])
    useEffect(()=>{
        newHopeFetch()
    }, [newHopePlanets])



    return(
        <div>
            {newHopePlanets}
        </div>
    )
}