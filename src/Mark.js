import React, { Component } from 'react'
export default class Mark extends Component {
    constructor(props)
    {
        super(props);
        this.state = 
        {
            mid : this.props.id
        }
    }
    static getDerivedStateFromProps(props,state)
    {
        console.log("get derived");
        console.log(props,state)
        if(props.id !== state.mid)
        {
            return{
                 mid:props.id
            }
        }
        return null
    }
  //  shouldComponentUpdate(nextProps,nextState)
  //   {
        
  //       if(this.state.mid < 130)
  //       {
  //           console.log('should upadte')
  //           console.log(nextProps,nextState);
  //           return true;
  //       }
  //       return false;
  //   }
  render() {
      console.log('Marks render');
    return (
      <div>
        <h1>{this.state.mid}</h1>
      </div>
    )
  }
}
