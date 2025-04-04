import { useState } from "react";

function RandomNumber()
{

    var [count, setCount] = useState(0)

    function randomNumber()
    {
        var randomNumber = Math.floor(Math.random() * 10) + 1;
        setCount(randomNumber)
    }

    return(
        <div>
            <h1>Random Number Generator (1 - 10)</h1>
            <h1>{count}</h1>
            <button onClick={randomNumber}>Random Number</button>
        </div>
    )
}


export default RandomNumber