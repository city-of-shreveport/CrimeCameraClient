import NodeList from '../components/nodeList';
import Col from 'react-bootstrap/Col';
import Map from './map';
import React, { useContext } from 'react';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { GlobalContext } from '../contexts/globalContext';
import Button from 'react-bootstrap/Button';
import Moment from 'react-moment';
import Table from 'react-bootstrap/Table';

export default function Home() {
  const [state, dispatch] = useContext(GlobalContext);

  const handleHomeStreamingModal = () =>
    dispatch({
      type: 'HOMESTREAMINGMODAL',
      payload: true,
    });

  const handleViewVideosModal = () =>
    dispatch({
      type: 'HOMEVIEWVIDEOSMODAL',
      payload: true,
    });

  return (
    <>
      <br />
      <Container fluid className="homeContainer">
        <Row className="justify-content-md-center">
          <Col xs={3}>
            <Card>
              <Card.Body>
                <NodeList />
              </Card.Body>
            </Card>
          </Col>
          <Col xs={3}>
            {state.currentNodeInfo && (
              <Card.Body>
                <Card.Title as="h2">{state.currentNodeInfo.name}</Card.Title>
                <Card.Subtitle className="mb-1 text-muted">
                  <p class="checkedInTime">
                    Checked in: <Moment format="MM/DD/YYYY @ HH:MM:ss">{state.currentNodeInfo.lastCheckIn}</Moment>
                  </p>
                </Card.Subtitle>
                <Card.Text>
                  <Card.Title>Node</Card.Title>
                  {state.currentNodeInfo.onlineStatus.camera1 ? (
                    <Button variant="success" size="sm">
                      Cam 1
                    </Button>
                  ) : (
                    <Button variant="danger" size="sm">
                      Cam 1
                    </Button>
                  )}{' '}
                  {state.currentNodeInfo.onlineStatus.camera2 ? (
                    <Button variant="success" size="sm">
                      {' '}
                      Cam 2
                    </Button>
                  ) : (
                    <Button variant="danger" size="sm">
                      {' '}
                      Cam 2
                    </Button>
                  )}{' '}
                  {state.currentNodeInfo.onlineStatus.camera3 ? (
                    <Button variant="success" size="sm">
                      Cam 3
                    </Button>
                  ) : (
                    <Button variant="danger" size="sm">
                      Cam 3
                    </Button>
                  )}
                </Card.Text>
                <Table striped variant="dark" size="sm">
                  <tbody>
                    <tr>
                      <td>Status:</td>
                      <td>
                        {state.currentNodeInfo.systemOK ? (
                          <Button variant="success" size="sm">
                            Good
                          </Button>
                        ) : (
                          <Button variant="danger" size="sm">
                            Problem
                          </Button>
                        )}{' '}
                      </td>
                    </tr>
                    <tr>
                      <td>Oldest Video:</td>
                      <td>
                        <p>5/10/2021 0630</p>
                      </td>
                    </tr>
                    <tr>
                      <td>Newest Video:</td>
                      <td>
                        <p>5/14/2021 1130</p>
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <Card.Text>
                  <Button size="sm" onClick={() => handleHomeStreamingModal()}>
                    Stream
                  </Button>{' '}
                  <Button size="sm" onClick={() => handleViewVideosModal()}>
                    View Videos
                  </Button>
                </Card.Text>
              </Card.Body>
            )}
          </Col>
          <Col>
            <Card className="text-center gmapsCard">
              <Card.Body>
                <Map isMarkerShown />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
