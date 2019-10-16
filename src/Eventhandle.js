import React, { Component } from 'react'
class Eventhandle extends Component
{
    //1- constructor(props)
    // {
    //     super(props);
    //     this.state = 
    //     {
    //         name:"Aman",
    //         roll:this.props.roll // ye props ye hai ki pahle ek constructor banaya jisme mujhe props ki jarurat padi 
    //         // agar nhi padti to nhi lete, to hua ye ki fir super method se parent ko call jo ki index.js hai
    //         // waha pe humne roll  =127 diya hai to yaha par props k through roll ko yha access kr pa rhe hai 
    //     };
    //     this.handleclick = this.handleclick.bind(this);

    // }
    state = {
        name: "Aman",
        roll: '127',
        id:1
    }
    handleclick = (id)=>
    {
        // 2-console.log('clic button ',this )//this is regular function
        // 3-this.setState({name:"Raghav",roll:"122"});
        //4- this.setState((state,props)=>
        // {
        //     console.log(props.roll);
        // });  
        console.log(id);
    } 
    handleclickarg = ()=>
    {
        this.handleclick(this.state.id);// 5-to is case me kya hua ki humne event ko as argument pass kiya kisme apne handeler me
    }
    // handleclick = ()=>
    // {
    //     console.log('click button',this);
    // }
    //3- if we will use arrow function in react then "keyword this" is bind by rect and "return" this as Object
    // otherwise it gives undefine in regular function, because this keyword in javascript 
    // behave diffrent way as denoting current object
    //so, in regular fuction if we want bind the this keyword then we have to use constructor as we can see that above
    // but the problem is this is long process so, we can use only arrow function to bind the this keyword  
    render()
    {
        return(
            <div>
                <h1>Your name is {this.state.name}</h1>
                <h1>Your roll numer is {this.props.roll}</h1>
                <button onClick={this.handleclickarg}>Click</button>
            </div>
        )
    }
}
export default Eventhandle;