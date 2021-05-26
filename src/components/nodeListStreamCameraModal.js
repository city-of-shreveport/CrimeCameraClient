import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import React, { useContext } from 'react';
import { GlobalContext } from '../contexts/globalContext';
import Modal from 'react-bootstrap/Modal';
import JsmpegPlayer from "./jsmpegPlayer";
import md5 from "md5"
export default function NodeListStreamCameraModal() {
  const [state, dispatch] = useContext(GlobalContext);

  const handleStreamModalClose = () =>
    dispatch({
      type: 'HOMESTREAMINGMODAL',
      payload: false,
    });
    let checkSum1 = md5("/"+ state.currentNodeInfo.name +"/camera1-9999999999-nodemedia2017privatekey")
    let rtmpURL1 = "https://crime-camera-system-restreamer.shreveport-it.org/"+ state.currentNodeInfo.name +"/camera1.flv?sign=9999999999-"+checkSum1

    let checkSum2 = md5("/"+ state.currentNodeInfo.name +"/camera2-9999999999-nodemedia2017privatekey")
    let rtmpURL2 = "https://crime-camera-system-restreamer.shreveport-it.org/"+ state.currentNodeInfo.name +"/camera2.flv?sign=9999999999-"+checkSum2

<<<<<<< HEAD
    let checkSum3 = md5("/"+ state.currentNodeInfo.name +"/camera3-9999999999-nodemedia2017privatekey")
    let rtmpURL3 = "https://crime-camera-system-restreamer.shreveport-it.org/"+ state.currentNodeInfo.name +"/camera3.flv?sign=9999999999-"+checkSum3
    return (
        <Modal show={state.homeStreamingModal} onHide={() => handleStreamModalClose()} centered size="lg">

        <Card className="text-center">
          <Card.Header as="h5">Streaming {state.homeSelectedNode}</Card.Header>
          <Card.Body>
            <CardGroup>
              <Card>
              <JsmpegPlayer
                wrapperClassName="video-wrapper"
                videoUrl={rtmpURL1}
              />
              </Card>
              <Card>
              <JsmpegPlayer
                wrapperClassName="video-wrapper"
                videoUrl={rtmpURL2}
              />              
              </Card>
              <Card>
              <JsmpegPlayer
                wrapperClassName="video-wrapper"
                videoUrl={rtmpURL3}
              />
                      </Card>
            </CardGroup>
          </Card.Body>
        </Card>
        <Card.Footer className="text-muted"></Card.Footer>
      </Modal>

    )
}
=======
  return (
    <Modal show={state.homeStreamingModal} onHide={() => handleStreamModalClose()} centered size="lg">
      <Card className="text-center">
        <Card.Header as="h5">Streaming {state.homeSelectedNode}</Card.Header>
        <Card.Body>
          <CardGroup>
            <Card>
              <Player autoPlay muted>
                <source src="ws://crime-camera-system.shreveport-it.org/CrimeCamera003/camera1?sign=9999999999-bec4b16eca3f98f3e016c30ef060c897" />
              </Player>
            </Card>
            <Card>
              <Player autoPlay muted>
                <source src="ws://crime-camera-system.shreveport-it.org/CrimeCamera003/camera1?sign=9999999999-bec4b16eca3f98f3e016c30ef060c897" />
              </Player>
            </Card>
            <Card>
              <Player autoPlay muted>
                <source src="ws://crime-camera-system.shreveport-it.org/CrimeCamera003/camera1?sign=9999999999-bec4b16eca3f98f3e016c30ef060c897" />
              </Player>
            </Card>
          </CardGroup>
        </Card.Body>
      </Card>
      <Card.Footer className="text-muted"></Card.Footer>
    </Modal>
  );
}
>>>>>>> 2289288c30f07a3823b77c37fc8d371a4396dfe4
