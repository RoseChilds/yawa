import {NavLink} from "react-router-dom";
import {Component} from "react";

class NavBar extends Component{
    render(){
        return (
            <div className={"navbar"}>
                <h1 className={"site-name"}>YAWA</h1>
                <ul className={"nav-container"}>
                    <li><NavLink activeClassName="active" exact to={"/"}>Home</NavLink></li>
                    <li><NavLink activeClassName="active" exact to={"/weather"}>Weather</NavLink></li>
                    <li><NavLink activeClassName="active" exact to={"/about"}>About</NavLink></li>
                    <li><NavLink activeClassName="active" exact to={"/credits"}>Credits</NavLink></li>
                </ul>
            </div>
        )
    }
}

export default NavBar;