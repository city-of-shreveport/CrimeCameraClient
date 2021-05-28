import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import React, { useContext } from 'react';
import { GlobalContext } from '../contexts/globalContext';
import Modal from 'react-bootstrap/Modal';
import JsmpegPlayer from './jsmpegPlayer';
import md5 from 'md5';
export default function NodeListStreamCameraModal() {
  const [state, dispatch] = useContext(GlobalContext);

  const handleStreamModalClose = () =>
    dispatch({
      type: 'HOMESTREAMINGMODAL',
      payload: false,
    });
  let checkSum1 = md5('/' + state.currentNodeInfo.name + '/camera1-9999999999-nodemedia2017privatekey');
  let rtmpURL1 = 'http://10.10.10.10:8000/' + state.currentNodeInfo.name + '/camera1.flv?sign=9999999999-' + checkSum1;

  let checkSum2 = md5('/' + state.currentNodeInfo.name + '/camera2-9999999999-nodemedia2017privatekey');
  let rtmpURL2 = 'http://10.10.10.10:8000/' + state.currentNodeInfo.name + '/camera2.flv?sign=9999999999-' + checkSum2;

  let checkSum3 = md5('/' + state.currentNodeInfo.name + '/camera3-9999999999-nodemedia2017privatekey');
  let rtmpURL3 = 'http://10.10.10.10:8000/' + state.currentNodeInfo.name + '/camera3.flv?sign=9999999999-' + checkSum3;
  return (
    <Modal show={state.homeStreamingModal} onHide={() => handleStreamModalClose()} centered size="lg">
      <Card className="text-center">
        <Card.Header as="h5">Streaming {state.homeSelectedNode}</Card.Header>
        <Card.Body>
          <CardGroup>
            <Card>
              <JsmpegPlayer wrapperClassName="video-wrapper" videoUrl={rtmpURL1} />
            </Card>
            <Card>
              <JsmpegPlayer wrapperClassName="video-wrapper" videoUrl={rtmpURL2} />
            </Card>
            <Card>
              <JsmpegPlayer wrapperClassName="video-wrapper" videoUrl={rtmpURL3} />
            </Card>
          </CardGroup>
        </Card.Body>
      </Card>
      <Card.Footer className="text-muted"></Card.Footer>
    </Modal>
  );
}
