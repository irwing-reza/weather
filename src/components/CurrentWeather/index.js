import React from "react";
import PropTypes from "prop-types";
import "./CurrentWeather.scss";
import WeatherIcon from "../WeatherIcon";
import utils from "../../utils";

class CurrentWeather extends React.PureComponent {
  formatDate = date => {
    return new Date(date.dt * 1000).toString().split(" ");
  };

  /**
   * Get the time from date
   */
  getTime = () => {
    return this.props.date
      .toString()
      .split(" ")[4]
      .substring(0, 5);
  };

  render() {
    return (
      <React.Fragment>
        <h1>
          {this.props.city.toUpperCase()}, {this.props.country}
        </h1>
        <h2 className="CurrentWeather-date">
          {`${utils.getFullDay(this.props.date)} ${this.getTime()}`}
        </h2>
        <h2 className="CurrentWeather-temperature">
          {utils.converTemperature(this.props.temperature)}º
        </h2>
        <WeatherIcon icon={this.props.icon} />
        <h3 className="CurrentWeather-description">
          {utils.titleCase(this.props.description)}
        </h3>
        <h3>
          {utils.converTemperature(this.props.maxTemperature, this.props.unit)}º
          |{" "}
          {utils.converTemperature(this.props.minTemperature, this.props.unit)}º
        </h3>
      </React.Fragment>
    );
  }
}

CurrentWeather.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  unit: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  minTemperature: PropTypes.number.isRequired,
  maxTemperature: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default CurrentWeather;
