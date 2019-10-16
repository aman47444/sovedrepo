import React, { Component } from 'react'
export default class App extends Component
{
    componentDidMount()
    {
        console.log('App Mount');
    }
    componentWillUnmount()
    {
        console.log('App component Unmount after Did Mount');
    }
    render()
    {
        console.log('App render');
        return(
            <div>
                <h1>
                    Hello App
                </h1>
            </div>
        )
    }
}