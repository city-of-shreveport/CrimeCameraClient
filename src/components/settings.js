import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import React, { useContext, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import { Container } from 'semantic-ui-react';
import { GlobalContext } from '../contexts/globalContext';

export default function Settings() {
  const [state, dispatch] = useContext(GlobalContext);

  useEffect(() => {
    function getPerfMonAPI() {
      fetch('http://10.10.10.55:3001/management/CrimeCameraTest')
        .then((response) => response.json())
        .then((json) => {
          dispatch({
            type: 'ADD_PERFMON',
            payload: json,
          });
        });
    }

    setInterval(() => {
      getPerfMonAPI();
      console.log(state);
    }, 1000);

    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <Container>
        <Row>
          <Col>
            <Card className="text-center">
              <Card.Header>Configured Cameras</Card.Header>
              <Card.Body></Card.Body>
              <Card.Footer className="text-muted">42 Cameras</Card.Footer>
            </Card>
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </Container>
  );
}
