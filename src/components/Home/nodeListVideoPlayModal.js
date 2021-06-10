import Button from 'react-bootstrap/Button';
import Calendar from 'react-calendar';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Modal from 'react-bootstrap/Modal';
import React, { useContext } from 'react';
import Row from 'react-bootstrap/Row';
import { GlobalContext } from '../../contexts/globalContext';

export default function NodeListVideoPlayerModal() {
  const [state, dispatch] = useContext(GlobalContext);

  const updateHomeTimeHour = (e) =>
    dispatch({
      type: 'UPDATEHOMEVIDEOTIMEHOUR',
      payload: e,
    });

  const updateHomeTimeMin = (e) =>
    dispatch({
      type: 'UPDATEHOMEVIDEOTIMEMIN',
      payload: e,
    });

  const updateHomeTimePM = (e) =>
    dispatch({
      type: 'UPDATEHOMEVIDEOTIMEPM',
      payload: e,
    });

  const updateHomeVideoDate = (e) =>
    dispatch({
      type: 'UPDATEHOMEVIDEODATE',
      payload: e,
    });

  const handleViewVideosModalClose = () =>
    dispatch({
      type: 'HOMEVIEWVIDEOSMODAL',
      payload: false,
    });

  return (
    <Modal show={state.homeViewVideosModal} onHide={() => handleViewVideosModalClose()} centered size="lg">
      <Card className="text-center">
        <Card.Header as="h5">Video Player {state.homeSelectedCamera}</Card.Header>
        <Container>
          <Row>
            <Col>
              <Calendar onClickDay={(e) => updateHomeVideoDate(e)} value={state.homeVideoDate} />
            </Col>
            <Col>
              <CardGroup>
                <Card>
                  <Card.Header as="h6">{state.homeVideoTimeHour}</Card.Header>
                  <Card.Body>
                    <div className="timesListGroup">
                      <ListGroup>
                        <ListGroup.Item action onClick={() => updateHomeTimeHour('1')}>
                          1
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={() => updateHomeTimeHour('2')}>
                          2
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={() => updateHomeTimeHour('3')}>
                          3
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={() => updateHomeTimeHour('4')}>
                          4
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={() => updateHomeTimeHour('5')}>
                          5
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={() => updateHomeTimeHour('6')}>
                          6
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={() => updateHomeTimeHour('7')}>
                          7
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={() => updateHomeTimeHour('8')}>
                          8
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={() => updateHomeTimeHour('9')}>
                          9
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={() => updateHomeTimeHour('10')}>
                          10
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={() => updateHomeTimeHour('11')}>
                          11
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={() => updateHomeTimeHour('12')}>
                          12
                        </ListGroup.Item>
                      </ListGroup>
                    </div>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Header as="h6">{state.homeVideoTimeMin}</Card.Header>
                  <Card.Body>
                    <div className="timesListGroup">
                      <ListGroup>
                        <ListGroup.Item onClick={() => updateHomeTimeMin('00')}>00</ListGroup.Item>
                        <ListGroup.Item onClick={() => updateHomeTimeMin('15')}>15</ListGroup.Item>
                        <ListGroup.Item onClick={() => updateHomeTimeMin('30')}>30</ListGroup.Item>
                        <ListGroup.Item onClick={() => updateHomeTimeMin('45')}>45</ListGroup.Item>
                      </ListGroup>
                    </div>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Header as="h6">{state.homeVideoTimePM ? 'PM' : 'AM'}</Card.Header>
                  <Card.Body>
                    <div className="timesListGroup">
                      <ListGroup>
                        <ListGroup.Item onClick={() => updateHomeTimePM(false)}>AM</ListGroup.Item>
                        <ListGroup.Item onClick={() => updateHomeTimePM(true)}>PM</ListGroup.Item>
                      </ListGroup>
                    </div>
                  </Card.Body>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </Card>
      <Card.Footer className="text-muted">
        <Button size="sm" onClick={() => console.log('yup')}>
          Load Videos
        </Button>
      </Card.Footer>
    </Modal>
  );
}
