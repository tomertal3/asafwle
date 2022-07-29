import React, { useState }  from "react";
import './wordle.css';
import Grid from '../boxes/grid'

import Keyboard from "../keyboard/keyboard";

export default function Wordle(){
    const [gusses,setGusses] = useState([...Array(6)])
    const [myGuess, setMyGuess] = useState('')
    const [rowNum , setRowNum] = useState(0)
    const sol = 'תפוחי'
    return(
        <div>
            <div >
                <Grid gusses={gusses} myGuess={myGuess} rowNum={rowNum}/>
            </div>

            <div className="keyboard">
                <Keyboard myGuess={myGuess} setMyGuess={setMyGuess} setGusses={setGusses} gusses={gusses} rowNum={rowNum} setRowNum={setRowNum} sol={sol}/>
            </div>
        </div>
    )
}

