import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Modal from 'react-bootstrap/Modal';
import React, { useContext } from 'react';
import ReactHlsPlayer from 'react-hls-player';
import { GlobalContext } from '../../contexts/globalContext';

export default function NodeListStreamCameraModal() {
  const [state, dispatch] = useContext(GlobalContext);

  const handleStreamModalClose = () => {
    fetch('http://rtcc-server.shreveport-it.org:3000/api/streams/stop/' + state.currentNodeInfo.name).then(
      (response) => {
        dispatch({
          type: 'setState',
          payload: { homeStreamingModal: false },
        });
      }
    );
  };

  let rtmpURL1 =
    'http://rtcc-server.shreveport-it.org:8000/streams/' + state.currentNodeInfo.name + '-camera1/index.m3u8';
  let rtmpURL2 =
    'http://rtcc-server.shreveport-it.org:8000/streams/' + state.currentNodeInfo.name + '-camera2/index.m3u8';
  let rtmpURL3 =
    'http://rtcc-server.shreveport-it.org:8000/streams/' + state.currentNodeInfo.name + '-camera3/index.m3u8';

  return (
    <Modal
      show={state.homeStreamingModal}
      onHide={() => handleStreamModalClose()}
      centered
      dialogClassName="custom-modal-streaming "
    >
      <Modal.Header closeButton>
        <Modal.Title>{state.currentNodeInfo.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CardGroup>
          <Card>
            <ReactHlsPlayer src={rtmpURL1} autoPlay={true} controls={true} width="400px" height="auto" />
          </Card>
          <Card>
            <ReactHlsPlayer src={rtmpURL2} autoPlay={true} controls={true} width="400px" height="auto" />
          </Card>
          <Card>
            <ReactHlsPlayer src={rtmpURL3} autoPlay={true} controls={true} width="400px" height="auto" />
          </Card>
        </CardGroup>
      </Modal.Body>
      <Modal.Footer>Shreveport Real Time Crime Center</Modal.Footer>
    </Modal>
  );
}
