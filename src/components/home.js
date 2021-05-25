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
          <Col xs={4}>
            <Card className="text-center ">
              <Card.Header><h4>Node Info</h4></Card.Header>
              <Card.Body>
              <Table striped bordered hover variant="dark">
                  <tbody>
                    <tr>
                      <td colSpan="2"> Name</td>
                      <td colSpan="3">{state.currentNodeInfo.name}</td>
                    </tr>
                    <tr>
                      <td colSpan="2">Status</td>
                      <td colSpan="3"> OnLine</td>
                    </tr>
                    <tr>
                      <td colSpan="2">Checked In</td>
                        <td colSpan="3"><Moment fromNow>{state.currentNodeInfo.createdAt}</Moment></td>
                    </tr>
                    <tr>
                      <td colSpan="2">Buddies</td>
                      <td>Buddy 1 OK</td>
                      <td>Buddy 2 OK</td>
                    </tr>
                    <tr></tr>
                    <tr>
                      <td>Cameras</td>
                      <td>Cam1 OK</td>
                      <td>Cam2 OK</td>
                      <td>Cam3 OK</td>
                    </tr>
                    <tr>
                      <td colSpan="2"><Button onClick={() => handleHomeStreamingModal()}>Stream</Button></td>
                      <td colSpan="3"><Button onClick={() => handleViewVideosModal()}>Videos</Button></td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
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
