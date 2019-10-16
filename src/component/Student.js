import React, { Component } from 'react'
export default class Student extends Component
{
    componentDidMount()
    {
        console.log('students Mount');
    }
    componentWillUnmount()
    {
        console.log('remove compont from in stu')
    }
    // componentDidUpdate()
    // {
    //     console.log('update')
    // }
    render()
    {
        console.log('Student render')
        return(
            
            <div>
                <h1>Hello Aman</h1>
            </div>
        )
    }
}