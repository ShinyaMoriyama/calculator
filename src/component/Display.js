import React from "react";
import PropTypes from "prop-types";

import "./Display.css";

function Display({value}) {
  return (
    <div className="component-display">
      <div>{value}</div>
    </div>
  );
}

Display.propTypes = {
  name: PropTypes.string
}

export default Display