import { Component } from "react";

class HomePage extends Component {
  render() {
    return (
      <div className="intro-wrapper">
        <h2>
          <p>Yet Another</p>
          <p>Weather Application</p>
        </h2>
        <p>but clean and aesthetic for the sanity of your eyes</p>
        {/* Putting our avatar here would be a nice addition */}
        <p>RoseChilds and LeVonara</p>
        <h2>
          <p>Developed by ❤️</p>
          <p>with these people</p>
        </h2>
      </div>
    );
  }
}

export default HomePage;
