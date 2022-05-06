import React from 'react';
import PropTypes from 'prop-types';
import "./Marker.sass";

import cameraIcon from "./cameraIcon.png"

const Marker = ({ text, onClick, color }) => <div className={'mapMarker ' + color} onClick={onClick} ><img src={cameraIcon} /></div>;

Marker.defaultProps = {
	color: "#FF0000",
  onClick: null,
};

Marker.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

export default Marker;

