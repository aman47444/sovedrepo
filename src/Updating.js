import React, { Component } from 'react'
import Mark from './Mark';
export default class Updating extends Component {
    // here we use mask.js to update the component
    constructor()
    {
        super();
        this.state = 
        {
            name:"Aman",
            id: 127
        }
    } 
    handleclick = ()=>
    {
        console.log('button clicked');
        this.setState({id:this.state.id + 2})
    }
  render() {
      console.log('updating render')
    return (
      <div>
        <Mark id={this.state.id}></Mark>
        <button onClick={this.handleclick}>Button</button>
      </div>
    )
  }
}