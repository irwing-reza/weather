import React from "react";
import PropTypes from "prop-types";
import "./WeatherIcon.scss";
import { getIcon } from "../../utils";

const WeatherIcon = props => {
  return (
    <div className="WeatherIcon">
      <i className={getIcon(props.icon)} />
    </div>
  );
};

WeatherIcon.propTypes = {
  icon: PropTypes.string.isRequired
};

export default WeatherIcon;
