import React, { Component } from 'react'
import axios from "axios";
import Userform from "./component/Userform"
class Myapp extends Component
{
    state = 
    {
        repos : []
    }
    myUser = (e)=>
    {
        e.preventDefault();
        const user = e.target.elements.username.value;
        console.log(user)
        axios.get(`https://api.github.com/users/${user}`).then(( res)=>
        {
            this.setState({repos:res.data})
        })
        // const repos = res.data.publicreport()
    }
    render()
    {
        return(
            <div> 
                <h1><center>Welcome to Axios</center></h1>
                <div className="container-fluid" style={{backgroundColor:"green",margin:"20px 0px"}}>
                    <Userform myUser={this.myUser} />
                </div>
            </div>
           
        )
    }
}
export default Myapp;