import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import React, { useContext } from 'react';
import { GlobalContext } from '../../contexts/globalContext';
import Modal from 'react-bootstrap/Modal';
import ReactHlsPlayer from 'react-hls-player';
import Image from 'react-bootstrap/Image';
export default function NodeListStreamCameraModal() {
  const [state, dispatch] = useContext(GlobalContext);

  const handleStreamModalClose = () =>
    dispatch({
      type: 'HOMESTREAMINGMODAL',
      payload: false,
    });

  let rtmpURL1 = 'http://10.10.200.10:8000/' + state.currentNodeInfo.name + '/camera1.flv';

  let rtmpURL2 = 'http://10.10.200.10:8000/' + state.currentNodeInfo.name + '/camera2.flv';

  let rtmpURL3 = 'http://10.10.200.10:8000/' + state.currentNodeInfo.name + '/camera3.flv';

  return (
    <Modal show={state.homeStreamingModal} onHide={() => handleStreamModalClose()} centered size="lg">
      <Card className="text-center">
        <Card.Header as="h5">Streaming {state.homeSelectedNode}</Card.Header>
        <Card.Body>
          <CardGroup>
            <Card>
              <ReactHlsPlayer
                src="http://10.10.200.41:8000/cameras/test/index.m3u8"
                autoPlay={true}
                controls={true}
                width="100%"
                height="auto"
              />
              ,{' '}
            </Card>
          </CardGroup>
        </Card.Body>
      </Card>
      <Card.Footer className="text-muted"></Card.Footer>
    </Modal>
  );
}
