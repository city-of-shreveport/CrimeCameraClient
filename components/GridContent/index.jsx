import React from "react";
import Map from "../Map";
import OnlineYesAddCamerasNo from "../OnlineYesAddCamerasNo";
import FirstPageYes from "../FirstPageYes";
import "./GridContent.sass";

window.GlobalRefresh = null;

class GridContent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
      nodes: {}		
		}

    this.refreshRecentlyCheckedIn()

    GlobalRefresh = () => { this.refreshRecentlyCheckedIn() }
	}

	static defaultProps = {
		nodes: {}
	}

  refreshRecentlyCheckedIn() {
    var nodeHash = {}

    fetch('http://rtcc-server.shreveport-it.org:3000/api/nodes/recentlyCheckedIn')
      .then((response) => response.json())
      .then( (json) => {
        json.forEach(node => {
          nodeHash[node.name] = node
        })

        console.log(nodeHash);

        this.setState({
          nodes: nodeHash
        });
      });
  }

  render() {
    const { mapProps, mapProps2 } = this.props;

    return (
      <div className="grid-content">
        <Map nodes={this.state.nodes} />
        <div className="camera-navigation">
          { Object.keys(this.state.nodes).map( (name) => { 
            return <OnlineYesAddCamerasNo key={name} name={name} addRemoveSimpleProps={mapProps2.addRemoveSimpleProps} />
          } ) }
          <FirstPageYes />
        </div>
      </div>
    );
  }
}

export default GridContent;
