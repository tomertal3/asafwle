import React from "react";
import Row from '../boxes/row'

export default function Grid({gusses,myGuess,rowNum}){
    return(
        <div>
            {gusses.map((x,index) =>
            <Row key={index} guess={x} cur = {rowNum === index ? myGuess:''}></Row>
            )}
        </div>
    )
}