import { NavLink } from "react-router-dom";
import { Component } from "react";

function Link(props) {
  return <NavLink exact {...props} activeClassName="active" />;
}

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <h3>
          <Link to={"/"}>YAWA</Link>
        </h3>
        <span>
          <Link to={"/weather"} className="weather">
            Weather
          </Link>
        </span>
      </div>
    );
  }
}

export default NavBar;
