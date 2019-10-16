import React, { Component } from 'react';

class Demo extends Component {
  state={name:"Sesh",age:20,gender:'Male'}
  state = { emp: [{ name: "Johnson", age: 20, gender: 'Male' }, { name: "Jackson", age: 30, gender: 'Male' }, { name: "Jimmy", age: 25, gender: 'Male' }], search: '' }

  handleChange = (e) => { this.setState({ search: e.target.value }) }

  render() {
    return (
      <div className="p-3 bg-light d-line">
        <div>Gender={this.state.gender}</div>
        <EmpTbl name={this.state.name} age={this.state.age}></EmpTbl>
        <input type="text" onChange={this.handleChange} />
        <EmpTbl emp={this.state.emp} search={this.state.search}></EmpTbl>
      </div>
    );
  }
}
const EmpTbl=(props)=>
{
  return  <div>{props.name=='Sesha'?<div>name={props.name}</div>:''}<div>age={props.age}</div></div>
const EmpTbl = (props) => 
{
  let emps
  console.log(props.search)
  if (props.search.length > 0) 
  {
    emps = props.emp.filter(e => e.name.indexOf(props.search) > -1);
  }
  else 
  {
    emps = props.emp
  }
  return <table className="table">
    <tbody>
      {emps.map((emp) => <tr className="link hstrike" title="Click to Delete" onClick={() => props.delEmp(emp)} key={emp.name}><td>{emp.name}</td><td>{emp.age}</td><td>{emp.gender}</td></tr>)}
    </tbody>
  </table>
}
export default Demo;