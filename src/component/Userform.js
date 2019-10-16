// import React, { Component } from 'react'
import React from 'react'
const Userform = (props)=>
{
    return(
        <div className="constainer">
            <form className="form text-center" onSubmit={props.myUser}>
                <input type="text" name="username" style={{margin:"10px 0px"}}/><br/>
                <button type="submit">Submit</button>
            </form>
        </div>
   );       
}
export default Userform;