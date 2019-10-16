import React, { Component } from 'react';
import './Demo.css'
class Demo extends Component {
  state = { emp: [{ name: "Johnson", age: 20, gender: 'Male' }, { name: "Hari", age: 30, gender: 'Male' }, { name: "Simmy", age: 25, gender: 'Male' }], search: '' }
  delEmp = (index)=>
  {
    // console.log(index);
    this.state.emp.splice(index,1);//splice is use for delete and add data
    // console.log(del);
    this.setState({emp:this.state.emp});
    // agar hum humene kisi bhi variable ko declare kiya aur agar "use" ya "define" nhi kiya to compiled with warnig aageya
    // jo ki batayega thar variable assigned but never used;
    //setState data ko update krne k liye use hota hai
    //remember one thing outsite the class you cant update the data 
    //one more thing yadi koi component create kiya hai to usko must hai return krna otherwise it will show error
    // arrow function should be clear in your mind how to used it.
    // Component first letter should be capital 
  }
  handleChange = (e) => { this.setState({ search: e.target.value }) }
  render() {
    return (
      <div className="p-3 bg-light d-line">
        <input type="text" onChange={this.handleChange} className="mt-3" />
        <EmpTbl emp={this.state.emp} search={this.state.search} delEmp={this.delEmp}></EmpTbl>
      </div>
    );
  }
  
}
const EmpTbl = (props) => {
  let emps
  let name =props.emp;
  console.log(props.search)
  if (props.search.length > 0) {
    // emps.map(emp => emp.name);
    console.log(props.search.toUpperCase());
    if(name.map(emp => emp.name.toUpperCase()===props.search.toUpperCase()) || name.map(emp => emp.name.toLowerCase()===props.search.toLowerCase()))
    {
      emps = name.filter(e => e.name.indexOf(props.search.toUpperCase() || props.search.toLowerCase()) > -1);
      // consonole.log(emps);
    }
  }
  else {
    emps = props.emp;
  }
  return <table className="table table-striped mt-3">
        <thead>
        <th>Name</th>
        <th>Age</th>
        <th>Gender</th>
      </thead>
    <tbody>

      {emps.map((emp,index) => <tr  className="link hstrike" title="Click to Delete" onClick={()=>props.delEmp(index)} key={emp.name}><td>{emp.name}</td><td>{emp.age}</td><td>{emp.gender}</td></tr>)}
    </tbody>
  </table>
}
export default Demo;