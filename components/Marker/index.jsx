import React from 'react';
import PropTypes from 'prop-types';
import "./Marker.sass";

import cameraIcon from "./cameraIcon.png"

const Marker = ({ onClick, color, cameraName }) => <div data-name={cameraName} className={'mapMarker ' + color} onClick={onClick}><img src={cameraIcon} /></div>;

Marker.defaultProps = {
	color: "#FF0000",
  onClick: null,
  cameraName: "",
};

Marker.propTypes = {
  onClick: PropTypes.func,
  cameraName: PropTypes.string.isRequired
};

export default Marker;

