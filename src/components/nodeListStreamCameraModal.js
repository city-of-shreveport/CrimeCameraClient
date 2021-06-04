import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import React, { useContext } from 'react';
import { GlobalContext } from '../contexts/globalContext';
import Modal from 'react-bootstrap/Modal';
import JsmpegPlayer from './jsmpegPlayer';
import ReactPlayer from 'react-player';
import md5 from 'md5';
export default function NodeListStreamCameraModal() {
  const [state, dispatch] = useContext(GlobalContext);

  const handleStreamModalClose = () =>
    dispatch({
      type: 'HOMESTREAMINGMODAL',
      payload: false,
    });
  fetch('http://10.10.200.10:4000/streams/start/' + state.currentNodeInfo.name + '/' + state.currentNodeInfo.ip)
    .then((response) => response.json())
    .then((json) => {
      console.log('steeam started');
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
              <ReactPlayer
                url={rtmpURL1}
                config={{
                  file: {},
                }}
              />
            </Card>
            <Card>
              {' '}
              <ReactPlayer
                url={rtmpURL2}
                config={{
                  file: {},
                }}
              />
            </Card>
            <Card>
              {' '}
              <ReactPlayer
                url={rtmpURL3}
                config={{
                  file: {},
                }}
              />
            </Card>
          </CardGroup>
        </Card.Body>
      </Card>
      <Card.Footer className="text-muted"></Card.Footer>
    </Modal>
  );
}
