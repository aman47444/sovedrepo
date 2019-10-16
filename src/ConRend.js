import React, { Component } from "react";
class ConRend extends Component
{
    render()
    {
        return(
            <div>
                <Status isLoggedIn={false}></Status>
            </div>
        )
    }
}
ExistingUser = (props) =>
{
    return (
        <p>Welcome to my page</p>
        )
}
Status = (props)=>
{
 return(
     <p>This is my Status</p>
 )   
}
const isLoggedIn = (props)=>
{
    
}