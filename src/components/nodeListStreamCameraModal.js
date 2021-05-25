import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import React, { useContext } from 'react';
import { GlobalContext } from '../contexts/globalContext';
import Modal from 'react-bootstrap/Modal';
import { Player } from 'video-react';

export default function NodeListStreamCameraModal() {
  const [state, dispatch] = useContext(GlobalContext);

  const handleStreamModalClose = () =>
    dispatch({
      type: 'HOMESTREAMINGMODAL',
      payload: false,
    });

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
