import React,{Component} from 'react';
import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom';

import {mapDispatchUsers} from '../reducers/actions'

class Users extends Component {
  constructor(props){
    super(props);
    this.state={users:[]}
  }
  componentDidMount(){
    // this.props.getUsers();
    // axios('https://jsonplaceholder.typicode.com/users')
    // .then(res=>{console.log(res);this.setState({users:res.data})});
    // console.log(this.props.state)
  }
  render(){
    const {state}= this.props;
    const {state}=this.props.state;
    return (
      <div className="container">
      <table className="table">
        <thead><tr><th>User Id</th><th>Name</th><th>Email</th><th>Phone</th></tr></thead>
        <UserDetails users={state.users}></UserDetails>
      </table>
    </div>)
  }
}

const UserDetails =(props)=>{
  return (<tbody>
      {props.users.map(user => (
        <tr className="text-left" key={user.id}><td><NavLink className="btn btn-info" to={"/Posts/"+user.id+"/"+user.name}>{user.id}</NavLink></td><td>{user.name}</td><td>{user.email}</td><td>{user.phone}</td></tr>
      ))}
      </tbody>);

}

const mapStateToProps = (state) => {return {state:state}}

export default connect(mapStateToProps,mapDispatchUsers)(Users);
