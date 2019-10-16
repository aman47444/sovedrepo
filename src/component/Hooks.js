import React from 'react'
import {useState} from 'react'
const Hooks = ()=>
{
    const x = useState("Rahul");
    // x[1]("Aman");
    const handleClick = ()=>
    {
            x[1]("Aman");
            x[2]("SAngita")
    }
    return(

        <React.Fragment>
            <h1>
                {x[0]}
            </h1>
            <button type="submit" onClick={handleClick} className="btn btn-primary">Submit</button>

        </React.Fragment>
    )
}
export default  Hooks;