import "./App.css";
import { Component } from "react";
import NavBar from "./NavBar";
import Weather from "./Weather";
import About from "./About";
import Credits from "./Credits";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// App class
class App extends Component {
  componentDidMount() {}
  componentWillUnmount() {
    clearInterval(this.updateInterval);
  }

  setStateAsync = (state) => {
    // this makes life a lot easier
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  };

  render() {
    return (
      <Router>
        <div className={"app"}>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Weather />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/credits">
              <Credits />
            </Route>
            <Route path={"*"}>
              <div>
                <h1>404</h1>
                <p>Page not found</p>
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
