import { NavLink } from "react-router-dom";
import { Component } from "react";

function Link(props) {
  return <NavLink exact {...props} activeClassName="active" />;
}

class NavBar extends Component {
  render() {
    return (
      <div className={"navbar"}>
        <h1 className={"site-name"}>YAWA</h1>
        <ul className={"nav-container"}>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/weather"}>Weather</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/credits"}>Credits</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
