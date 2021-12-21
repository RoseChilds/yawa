import "./App.css";
import { Component } from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import statusinfo from "./statusinfo.json";
import MovingArrow from "./MovingArrow";
import weathers from "./constants/weathers";
// App class
class App extends Component {
  constructor() {
    // set the initial weather state to null so we can show a loading screen
    super();
    this.state = {
      weather: null,
    };
  }

  componentDidMount() {
    this.getWeather();
    this.updateInterval = setInterval(async () => {
      await this.setStateAsync({ reload: true });
      await this.getWeather();
      await this.setStateAsync({ reload: false });
    }, 600000);
  }

  componentWillUnmount() {
    clearInterval(this.updateInterval);
  }

  setStateAsync = (state) => {
    // this makes life a lot easier
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  };
  getWeather = async () => {
    if (!this.location) {
      const { data: location } = await axios.get("https://ipapi.co/json/");
      this.location = location;
    }

    const link = 'https://api.met.no/weatherapi/locationforecast/2.0/compact?'
    const { data: weather } = await axios.get(
        `${link}lat=${this.location.latitude}&lon=${this.location.longitude}`
    );
    console.log(weather);
    await this.setStateAsync({
      weather: {
        ...weather.properties,
        current: weather.properties.timeseries[0].data,
      },
    });
  };

  render() {
    return (
      <div className={"app"}>
        <div className={"left maintitle"}>
          <h1 className={"notop nobottom"}>YAWA</h1>
          <h3 className={"notop nobottom"}>Yet another weather app</h3>
        </div>
        {this.state.weather ? (
          <div>
            {this.state.reload ? null : (
              <WeatherIcon
                intensity={0.35}
                icon={
                  weathers[
                    this.state.weather.current.next_1_hours.summary.symbol_code
                  ]
                }
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                }}
              />
            )}
            <h1 className={"status"}>
              Current weather:{" "}
              {
                statusinfo[
                  this.state.weather.current.next_1_hours.summary.symbol_code
                ].desc_en
              }
              .
              <br />
              Wind direction:{" "}
              {this.state.reload ? null : (
                <MovingArrow
                  angle={
                    this.state.weather.current.instant.details
                      .wind_from_direction
                  }
                  style={{
                    position: "relative",
                    width: "fit-content",
                    display: "inline-block",
                  }}
                />
              )}
            </h1>
          </div>
        ) : (
          <h1 className={"status"}>Loading...</h1>
        )}
      </div>
    );
  }
}

export default App;
