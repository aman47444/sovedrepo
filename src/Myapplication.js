import React, { Component } from 'react';
import Form from './component/Form';
export default class Myapp extends Component
{
    state = 
    {
        users : [{username:"aman15", password:"aman15"}]
    }
    getData = (e)=>
    {
        e.preventDefault();
        const uName = e.target.username.value;
        const pName = e.target.password.value;
       
        this.state.users.map(emp=>{
        console.log("Hello")
            if(uName===emp.username && pName===emp.password)
            {
                return(console.log("yes"))
            }
            
        })
    }
    render()
    {
        return(
            <div className="container-fluid">
            <h1 className="text-center">My Form</h1>
                <Form getData={this.getData}/>
            </div>
        )
    }


}