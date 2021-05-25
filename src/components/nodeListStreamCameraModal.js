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
                  <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                </Player>
              </Card>
              <Card>
                <Player autoPlay muted>
                  <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                </Player>
              </Card>
              <Card>
                <Player autoPlay muted>
                  <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                </Player>
              </Card>
            </CardGroup>
          </Card.Body>
        </Card>
        <Card.Footer className="text-muted"></Card.Footer>
      </Modal>

    )
}