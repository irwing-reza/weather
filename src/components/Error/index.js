import React from "react";
import PropTypes from "prop-types";
import "./Error.scss";

const Error = props => {
  return (
    <div className="Error">
      <p className="Error-message">{props.message}</p>
    </div>
  );
};

Error.propTypes = {
  message: PropTypes.string.isRequired
};

export default Error;
