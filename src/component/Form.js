import React from 'react'
const Form = (props)=>
{
    return(
        <div className="container" style={{margin:"100px auto",backgroundColor:""}}>
            <form onSubmit={props.getData}>
                <div className="form-group">
                    <label>Username</label>
                    <input className="form-control" type="text"  name="username" placeholder="Enter Username" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input className="form-control" type="text"  name="password" placeholder="Enter Password" />
                </div>
                <div className="form-group">
                    <input className="form-check-lable" type="checkbox"  placeholder="Enter Password" />
                    <label>Remember me</label>
                </div>
                <button type="submit" className="form-control btn btn-dark">Submit</button>
            </form>
        </div>
    )
}
export default Form;