import React from "react";

export default function Row({guess, cur}){
    if(cur){
        return(
            <div className="row">
                <div>{cur[4]}</div>
                <div>{cur[3]}</div>
                <div>{cur[2]}</div>
                <div>{cur[1]}</div>
                <div>{cur[0]}</div>
            </div>
        )
    }
     else if (guess){
        return(
            <div className="row">
               { guess.slice(0).reverse().map((letter,index) => (
                    <div className={letter.color} key={index}>{letter.key}</div>
                ))}
            </div>
        )
            }
    else{
        return(
            <div className="row">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        )
}
}