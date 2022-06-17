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
    this.wireUpStream.bind(this)
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
          nodeHash[node.name] = node;


          for(var i = 1; i < 4; i++) {
            var streamName = `${node.name}Camera${i}`;

            var requestBody = {
              "name": streamName,
                "channels": {
                  "0": {
                    "name": "ch1",
                    "url": `rtsp://admin:UUnv9njxg123@${node.config.ip}:${553 + i}/cam/realmonitor?channel=1&subtype=1`,
                    "on_demand": true,
                    "debug": false,
                    "status": 0
                  }
                }
            };

            var requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(requestBody)
            };

            console.log(`Adding stream: ${streamName}`);
            fetch(`http://rtcc-restreamer.shreveport-it.org/stream/${streamName}/add`, requestOptions);

          }
        });

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

  addStream(name) {

  }

  wireUpStream(nodeName, streamChannel, videoElementReference) {
    let videoPlayer = videoElementReference.current;

    let stream = new MediaStream();

    let config = {
      iceServers: [{
        urls: ["stun:stun.l.google.com:19302"]
      }]
    };

    let pc = new RTCPeerConnection(config);

    pc.onnegotiationneeded = async () => {
      let offer = await pc.createOffer();

      await pc.setLocalDescription(offer);

      let receiverUrl = `http://rtcc-restreamer.shreveport-it.org/stream/${nodeName}Camera${streamChannel}/channel/0/webrtc`;

      fetch(receiverUrl, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          data: btoa(pc.localDescription.sdp)
        })
      })
      .then( (data) => {

        data.text().then(function(blob) {

          try {
            pc.setRemoteDescription(new RTCSessionDescription({
              type: 'answer',
              sdp: atob(blob)
            }))
          } catch (e) {
            console.warn(e);
          }

        });

      })
      .catch(function(e) {
        console.log(e);
      });
    }

    pc.ontrack = function(event) {
      stream.addTrack(event.track);
      videoPlayer.srcObject = stream;
    }

    pc.addTransceiver('video', { 'direction': 'sendrecv' })
  }

  render() {

    return (
      <div className="grid-content">

        <Map nodes={this.state.nodes} handleClick={this.handleMapIconClick} />

        <div className="camera-navigation">

          { Object.keys(this.state.streamingNodes).reverse().map( (name) => { 
            var streamingNode = this.state.nodes[name];

            return <OnlineYesAddCamerasNo 
                      cameraReferenceOne={streamingNode.cameraReferenceOne}
                      cameraReferenceTwo={streamingNode.cameraReferenceTwo}
                      cameraReferenceThree={streamingNode.cameraReferenceThree}
                      addStream={this.addStream}
                      wireUpStream={this.wireUpStream}
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
