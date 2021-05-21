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
