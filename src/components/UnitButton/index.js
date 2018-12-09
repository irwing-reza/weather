import React from "react";
import PropTypes from "prop-types";
import "./UnitButton.scss";

const UnitButton = props => {
  return (
    <button className="UnitButton" onClick={props.changeUnit} type="button">
      º{props.unit}
    </button>
  );
};

UnitButton.propTypes = {
  unit: PropTypes.string.isRequired,
  changeUnit: PropTypes.func.isRequired
};

export default UnitButton;
