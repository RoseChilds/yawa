import { NavLink } from "react-router-dom";
import { Component } from "react";

function Link(props) {
  return <NavLink exact {...props} activeClassName="active" />;
}

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <h1>YAWA</h1>
        <span>
          <Link to={"/"}>Home</Link>
        </span>
        <span>
          <Link to={"/weather"}>Weather</Link>
        </span>
        <span>
          <Link to={"/about"}>About</Link>
        </span>
        <span>
          <Link to={"/credits"}>Credits</Link>
        </span>
      </div>
    );
  }
}

export default NavBar;
