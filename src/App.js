import './App.css';
import {Component} from "react";
import axios from 'axios';

// App class
class App extends Component {
    constructor() {
        // set the initial weather state to null so we can show a loading screen
        super();
        this.state = {
            weather: null
        }
        this.getWeather();
    }

    setStateAsync = (state) => {
        // this makes life a lot easier
        return new Promise((resolve) => {
            this.setState(state, resolve);
        });
    }
    getWeather = async () => {
        const {data: location} = await axios.get('https://ipapi.co/json/');

        const {data: weather} = await axios.get(`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${location.latitude}&lon=${location.longitude}`);
        console.log(weather);
        await this.setStateAsync({weather: weather.properties});
    }

    render() {
        return (
            <div className={"app"}>
                <h1>hello world</h1>
                {this.state.weather ? <div>
                    <h2>weather data collected (check console)</h2>
                    <code>{JSON.stringify(this.state.weather)}</code>
                </div> : <h2>weather data loading</h2>}
            </div>
        );
    }
}

export default App;
