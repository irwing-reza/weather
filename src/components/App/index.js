import React from "react";
import "./App.scss";
import Search from "../Search";
import CurrentWeather from "../CurrentWeather";
import ForecastList from "../ForecastList";
import Error from "../Error";
import UnitButton from "../UnitButton";
import api from "../../utils/api";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "Bellevue",
      current: {},
      forecast: [],
      unit: "F",
      showError: false,
      errorMessage: ""
    };
  }
  componentDidMount() {
    this.getData();
  }

  getData = () => {
    api
      .getCurrent(this.state.city)
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (data.cod !== "404") {
          this.setState({ current: data });
        } else {
          this.setState({
            showError: true,
            errorMessage: data.message
          });
        }
      })
      .catch(error => {
        console.log(error);
      });

    api
      .getForecast(this.state.city)
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (data.cod !== "404") {
          /**
           * Becase we are using the 5 day / 3 hour forecast {@link https://openweathermap.org/forecast5},
           * we will grab only the initial data of each day.
           * If you wanna use the {@link https://openweathermap.org/forecast16} this method needs to be updated.
           */
          const days = data.list.filter(value => {
            return /^\d{4}-\d{2}-\d{2}.?00:00:00$/.test(value.dt_txt);
          });

          // Let's format the information the way the ForecastList will expect it.
          const formattedDays = days.map(value => {
            return {
              key: value.dt,
              date: new Date(value.dt * 1000),
              minTemperature: value.main.temp_min,
              maxTemperature: value.main.temp_max,
              icon: value.weather[0].icon,
              description: value.weather[0].description
            };
          });

          this.setState({
            forecast: formattedDays
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  /**
   * Update city value from Search component
   */
  handleQueryChange = e => {
    this.setState({ city: e.target.value });
  };

  /**
   * Handle submit from search component
   */
  handleSearchSubmit = e => {
    e.preventDefault();
    // Check user has tipped something
    if (this.state.city.trim().length > 1) {
      // Remove any previous errors
      this.setState({
        showError: false,
        errorMessage: ""
      });
      this.getData();
    }
  };

  /**
   * Change the current temperatue unit
   */
  changeUnit = () => {
    switch (this.state.unit) {
      case "F":
        this.setState({ unit: "C" });
        break;
      case "C":
        this.setState({ unit: "F" });
        break;
      default:
        this.setState({ unit: "F" });
    }
  };

  /**
   * Show CurrentWeather only when we have information
   */
  showCurrentWeather = () => {
    return Object.keys(this.state.current).length > 0 ? (
      <CurrentWeather
        date={new Date(this.state.current.dt * 1000)}
        unit={this.state.unit}
        temperature={this.state.current.main.temp}
        minTemperature={this.state.current.main.temp_min}
        maxTemperature={this.state.current.main.temp_max}
        description={this.state.current.weather[0].description}
        city={this.state.current.name}
        country={this.state.current.sys.country}
        icon={this.state.current.weather[0].icon}
      />
    ) : null;
  };

  /**
   * Show ForecastList only when we have information
   */
  showWeatherForecast = () => {
    return this.state.forecast.length > 0 ? (
      <ForecastList days={this.state.forecast} unit={this.state.unit} />
    ) : null;
  };

  showError = () => {
    return this.state.showError ? (
      <Error message={this.state.errorMessage} />
    ) : null;
  };

  render() {
    return (
      <div className="App">
        <div className="App-content">
          {this.showError()}
          <UnitButton unit={this.state.unit} changeUnit={this.changeUnit} />
          <Search
            query={this.state.city}
            onChange={this.handleQueryChange}
            onSubmit={this.handleSearchSubmit}
          />
          {this.showCurrentWeather()}
          {this.showWeatherForecast()}
        </div>
      </div>
    );
  }
}

export default App;
