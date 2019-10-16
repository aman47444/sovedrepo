import React from 'react';
import {Link,NavLink,withRouter} from 'react-router-dom';
const NavBar = (props)=>
{
        return(
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3">
            <div className="container">
                <Link className="navbar-band" to="/">Learn React</Link>
                <button><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link btn" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link btn" to="/Timer">Timer</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link btn" to="/Demo">Demo</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link btn" to="/MenuBar">Axios</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link btn" to="/Form">Login</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default withRouter(NavBar);