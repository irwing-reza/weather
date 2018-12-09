import React from "react";
import PropTypes from "prop-types";
import "./Forecast.scss";
import WeatherIcon from "../WeatherIcon";
import { getFullDay, titleCase, converTemperature } from "../../utils";

const Forecast = props => {
  return (
    <div className="Forecast">
      <h4>{getFullDay(props.date)}</h4>
      <WeatherIcon icon={props.icon} />
      <h3 className="Forecast-description">{titleCase(props.description)}</h3>
      <h3>
        {converTemperature(props.maxTemperature, props.unit)}º |{" "}
        {converTemperature(props.minTemperature, props.unit)}º
      </h3>
    </div>
  );
};

Forecast.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  minTemperature: PropTypes.number.isRequired,
  maxTemperature: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  unit: PropTypes.string
};

Forecast.defaultProps = {
  unit: "F"
};

export default Forecast;
