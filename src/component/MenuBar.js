import React from 'react'
import {NavLink} from 'react-router-dom';
const MenuBar = (props)=>{   
    
           return(
            <div className="container-fluid">
                <div class="card" style={{width:"18rem;", marginTop:"10px"}}>
                    <div class="card-body">
                        <NavLink className="nav-link btn" to="/MenuBar">Users</NavLink>
                    </div>
                    <div class="card-body">
                        <NavLink className="nav-link btn" to="/MenuBar">Albums</NavLink>
                    </div>
                    <div class="card-body">
                        <NavLink className="nav-link btn" to="/MenuBar">Photo</NavLink>
                    </div>
                    <div class="card-body">
                        <NavLink className="nav-link btn" to="/MenuBar">Users</NavLink>
                    </div>
                </div>
            </div>
        )    
}
export default MenuBar;