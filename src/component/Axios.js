import React, { Component } from 'react'
import axios from 'axios';
export default class Axio extends Component
{
    state = {
        person:[]
    }
    componentDidMount()
    {
        axios.get("https://jsonplaceholder.typicode.com/users").then(res=>
        {
            // console.log(res.data)
            this.setState({
                person:res.data
            })
        }).catch( (err)=>
        {
            alert(err);
        });
    }
    render()
    {   
           return(
            <div className="container">
                <table className="table">
                    <thead>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Website</th>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                        {this.state.person.map( e=>
                            <li className="list-group-item">{e.id}</li>
                            
                        )}
                        </td>
                        <td>
                            {
                                this.state.person.map(e=>
                                    {
                                        return e.id === 3 ?
                                        <li className="list-group-item">{e.name}</li>
                                        :<h2>Hello</h2>
                                    }
                                )}
                        </td>
                        <td>
                            {
                                this.state.person.map(e=>
                                <li className="list-group-item">{e.website}</li>)
                            }
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    
    }
}