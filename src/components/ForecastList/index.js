import React from "react";
import PropTypes from "prop-types";
import "./ForecastList.scss";
import Forecast from "../Forecast";

const ForecastList = props => {
  return (
    <div className="ForecastList">
      <h2 className="ForecastList-title">Forecast</h2>
      <div className="ForecastList-content">
        {props.days.map(day => {
          return (
            <Forecast
              key={day.key}
              date={day.date}
              unit={props.unit}
              minTemperature={day.minTemperature}
              maxTemperature={day.maxTemperature}
              icon={day.icon}
              description={day.description}
            />
          );
        })}
      </div>
    </div>
  );
};

ForecastList.propTypes = {
  days: PropTypes.array.isRequired,
  unit: PropTypes.string
};

ForecastList.defaultProps = {
  unit: "f"
};

export default ForecastList;
