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
    this.handleCloseStreamingNode.bind(this)
  }

  static defaultProps = {
    nodes: {},
    streamingNodes: {}
  }

  addNewStreams(node) {

  }

  removeStreams(node) {

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

    clickedNode.cameraReferenceOne = React.createRef();
    clickedNode.cameraReferenceTwo = React.createRef();
    clickedNode.cameraReferenceThree = React.createRef();

    clickedNode.streamOne = new MediaStream();
    clickedNode.streamTwo = new MediaStream(); 
    clickedNode.streamThree = new MediaStream();

    var tempStreamingNodes = this.state.streamingNodes;

    tempStreamingNodes[clickedNode.name] = clickedNode
    
    this.setState({
      streamingNodes: tempStreamingNodes
    })
  }

  handleCloseStreamingNode = (e) => {
    var clickedNode = {};

    clickedNode = this.state.nodes[e.target.dataset.name];

    var tempStreamingNodes = this.state.streamingNodes;

    delete(tempStreamingNodes[clickedNode.name])

    this.setState({
      streamingNodes: tempStreamingNodes
    });
  }

  wireUpStreams(node) {
    let config = {
      iceServers: [{
        urls: ["stun:stun.l.google.com:19302"]
      }]
    };

    let pc = new RTCPeerConnection(config);

    pc.onnegotiationneeded = () => {
      let offer = await pc.createOffer();

      await pc.setLocalDescription(offer);
    }

  }

  render() {

    return (
      <div className="grid-content">

        <Map nodes={this.state.nodes} handleClick={this.handleMapIconClick} />

        <div className="camera-navigation">

          { Object.keys(this.state.streamingNodes).map( (name) => { 
            var streamingNode = this.state.nodes[name];

            return <OnlineYesAddCamerasNo 
                      cameraReferenceOne={streamingNode.cameraReferenceOne}
                      cameraReferenceTwo={streamingNode.cameraReferenceTwo}
                      cameraReferenceThree={streamingNode.cameraReferenceThree}
                      handleClose={this.handleCloseStreamingNode} 
                      key={name} 
                      name={name} 
                      address={"Node Address Here"} />
          } ) }
        </div>
      </div>
    );
  }
}

export default GridContent;
