import React from "react";
import PropTypes from "prop-types";
import "./Search.scss";

const Search = props => {
  return (
    <form onSubmit={props.onSubmit} className="Search">
      <input
        type="text"
        className="Search-input"
        onChange={props.onChange}
        value={props.query}
        placeholder="Enter City"
      />
      <button type="submit" className="Search-button">
        Search
      </button>
    </form>
  );
};

Search.propTypes = {
  query: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Search;
