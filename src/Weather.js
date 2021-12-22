import { Component } from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import weathers from "./constants/weathers";
import statusinfo from "./statusinfo.json";
import MovingArrow from "./MovingArrow";

class Weather extends Component {
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

    const link = "https://api.met.no/weatherapi/locationforecast/2.0/compact?";
    const { data: weather } = await axios.get(
      `${link}lat=${this.location.latitude}&lon=${this.location.longitude}`
    );

    await this.setStateAsync({
      weather: {
        ...weather.properties,
        current: {
          ...weather.properties.timeseries[0].data,
          symbol:
            weather.properties.timeseries[0].data.next_1_hours.summary.symbol_code.split(
              "_"
            )[0],
        },
      },
      reload: false,
    });
    console.log(this.state.weather);
  };

  render() {
    return (
      <div>
        {this.state.weather ? (
          <div>
            {this.state.reload ? null : (
              <WeatherIcon
                intensity={0.35}
                icon={weathers[this.state.weather.current.symbol]}
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
              {statusinfo[this.state.weather.current.symbol].desc_en}.
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

export default Weather;
