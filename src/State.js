import React, { Component } from 'react'
class State extends Component
{
    state = {
       user:[ {name:"aman"},{age:123}]
    }
    render()
    {
        return(
            <div>
                <h1>{this.state.user.map(e => e.name)}</h1>
                <h1>{this.state.user.map(e => e.age)}</h1>
            </div>
        )
    }
}
export default State;