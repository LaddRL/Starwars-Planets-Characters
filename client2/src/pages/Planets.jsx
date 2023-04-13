import { useState } from "react";
import { swapiFetch } from "../helpers/swapi";


export default function Planets(){
    console.log("hello this is the planets")
    return(
        <div>
            {swapiFetch.name}
        </div>
    )
}