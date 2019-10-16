import React, { Component } from 'react'
class Clock extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {date: new Date()};
    }
    componentDidMount()
    {
        console.log('enter in did mount');
        this.timerId = setInterval( ()=> this.tick,1000);// remember tic is not function

    }
    componentWillUnmount()
    {
        console.log('enter the will unmount')
        clearInterval(this.timerId);
    }
    tick()
    {
        this.setState({date: new Date()});
    }
    render()
    {
        console.log('ente in main')
        return(
            <div>
                <h1>Today is {this.state.date.toLocaleDateString()}</h1>
            </div>
        )
    }
}
export default Clock;