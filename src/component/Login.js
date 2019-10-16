import React, { Component } from 'react';
import axios from 'axios';
export default class Login extends Component {
  constructor(props){
    axios('http://localhost:3001/')
    .then(res=>{
      console.log(res.data)
    });
    super(props);
    this.state={alert:''}
    // props.Login();
  }
  onSubmit=(ev)=>{
    ev.preventDefault();
    let login={};
    
    for(let i in ev.target.elements){
        if(ev.target.elements[i].value!==undefined && ev.target.elements[i].value!==''){
          login[ev.target.elements[i].name]=ev.target.elements[i].value;
        }
    }
    axios.post('https://react-apis.herokuapp.com/login',login)
    .then(res=>{
      if(res.data ==='Invalid User Name or password')
        this.setState({alert:res.data})
      else{
        this.setState({alert:''})
        localStorage.setItem('JWT', res.data);
        this.props.history.push('/')
      }  
      console.log(res);
    });
  }

  render() {
    return (
      <div className="container cat">
        <br/>
        <br/>
        <h1>Login</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
          User Name<input type="text" name="email" required className="form-control"/>
          Password   <input type="Password" name="password"  required  className="form-control"/>
          <br/>
          <div hidden={!this.state.alert} className="alert alert-danger" role="alert">{this.state.alert}</div>
          <button className="form-control btn btn-dark">Login</button>
          </div>
        </form>
      </div>
    );
  }
}
