import React from "react";

import Map from "../Map";

import OnlineYesAddCamerasNo from "../OnlineYesAddCamerasNo";

import FirstPageYes from "../FirstPageYes";

import "./GridContent.sass";

class GridContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nodes: {},
      streamingNodes: {}
    }

    this.refreshRecentlyCheckedIn()

    this.handleMapIconClick.bind(this)
  }

  static defaultProps = {
    nodes: {},
    streamingNodes: {}
  }

  refreshRecentlyCheckedIn() {
    var nodeHash = {}

    fetch('http://rtcc-server.shreveport-it.org:3000/api/nodes/recentlyCheckedIn')
      .then((response) => response.json())
      .then( (json) => {
        json.forEach(node => {
          nodeHash[node.name] = node
        })

        this.setState({
          nodes: nodeHash
        });
      });
  }

  handleMapIconClick = (e) => {
    var clickedNode = {};

    clickedNode = this.state.nodes[e.target.dataset.name];

    var tempStreamingNodes = this.state.streamingNodes;

    tempStreamingNodes[clickedNode.name] = clickedNode

    this.setState({
      streamingNodes: tempStreamingNodes
    })
  }

  render() {
    const { mapProps, mapProps2 } = this.props;

    return (
      <div className="grid-content">

        <Map nodes={this.state.nodes} handleClick={this.handleMapIconClick} />

        <div className="camera-navigation">

          { Object.keys(this.state.streamingNodes).map( (name) => { 
            console.log(name);
            return <OnlineYesAddCamerasNo key={name} name={name} address={"Node Address Here"} addRemoveSimpleProps={mapProps2.addRemoveSimpleProps} />
          } ) }
        </div>
      </div>
    );
  }
}

export default GridContent;
