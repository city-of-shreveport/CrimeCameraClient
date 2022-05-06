import React from "react";
import GoogleMapReact from "google-map-react";
import "./Map.sass";

import Marker from "../Marker/"

class Map extends React.Component {

	
	static defaultProps = {
    center: {
      lat: 32.4368622,
      lng: -93.7550222
    },
    zoom: 12,
    nodes: {}
  };
	
  render() {
    console.log(this.props.nodes)
    return (
      <div className="map">
				<GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAxgBe1BLPLfPIPwK0ucb6-SeqkZdckChI' }}
          defaultCenter={this.props.center} defaultZoom={this.props.zoom}>	

        { Object.keys(this.props.nodes).map( (name) => {
          var lat = this.props.nodes[name].config.locationLat;
          var lon = this.props.nodes[name].config.locationLong;
          return <Marker key={name} color="green" lat={lat} lng={lon} text="Testing" onClick={() => {console.log("Click") } }/>
        }) }



				</GoogleMapReact>

			</div>
    );
  }
}

export default Map;
