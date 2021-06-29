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
      type: 'setState',
      payload: { homeVideoTimeHour: e },
    });

  const updateHomeTimeMin = (e) =>
    dispatch({
      type: 'setState',
      payload: { homeVideoTimeMin: e },
    });

  const updateHomeTimePM = (e) =>
    dispatch({
      type: 'setState',
      payload: { vmsTimeAMPM: e },
    });

  const updateHomeVideoDate = (e) =>
    dispatch({
      type: 'setState',
      payload: { homeVideoDate: e },
    });

  const handleViewVideosModalClose = () =>
    dispatch({
      type: 'setState',
      payload: { homeViewVideosModal: false },
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
                        <ListGroup.Item key={'updateHomeTimeHour("1")'} action onClick={() => updateHomeTimeHour('1')}>
                          1
                        </ListGroup.Item>
                        <ListGroup.Item key={'updateHomeTimeHour("2")'} action onClick={() => updateHomeTimeHour('2')}>
                          2
                        </ListGroup.Item>
                        <ListGroup.Item key={'updateHomeTimeHour("3")'} action onClick={() => updateHomeTimeHour('3')}>
                          3
                        </ListGroup.Item>
                        <ListGroup.Item key={'updateHomeTimeHour("4")'} action onClick={() => updateHomeTimeHour('4')}>
                          4
                        </ListGroup.Item>
                        <ListGroup.Item key={'updateHomeTimeHour("5")'} action onClick={() => updateHomeTimeHour('5')}>
                          5
                        </ListGroup.Item>
                        <ListGroup.Item key={'updateHomeTimeHour("6")'} action onClick={() => updateHomeTimeHour('6')}>
                          6
                        </ListGroup.Item>
                        <ListGroup.Item key={'updateHomeTimeHour("7")'} action onClick={() => updateHomeTimeHour('7')}>
                          7
                        </ListGroup.Item>
                        <ListGroup.Item key={'updateHomeTimeHour("8")'} action onClick={() => updateHomeTimeHour('8')}>
                          8
                        </ListGroup.Item>
                        <ListGroup.Item key={'updateHomeTimeHour("9")'} action onClick={() => updateHomeTimeHour('9')}>
                          9
                        </ListGroup.Item>
                        <ListGroup.Item
                          key={'updateHomeTimeHour("10")'}
                          action
                          onClick={() => updateHomeTimeHour('10')}
                        >
                          10
                        </ListGroup.Item>
                        <ListGroup.Item
                          key={'updateHomeTimeHour("11")'}
                          action
                          onClick={() => updateHomeTimeHour('11')}
                        >
                          11
                        </ListGroup.Item>
                        <ListGroup.Item
                          key={'updateHomeTimeHour("12")'}
                          action
                          onClick={() => updateHomeTimeHour('12')}
                        >
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
                        <ListGroup.Item key={'updateHomeTimeMin("00")'} onClick={() => updateHomeTimeMin('00')}>
                          00
                        </ListGroup.Item>
                        <ListGroup.Item key={'updateHomeTimeMin("15")'} onClick={() => updateHomeTimeMin('15')}>
                          15
                        </ListGroup.Item>
                        <ListGroup.Item key={'updateHomeTimeMin("30")'} onClick={() => updateHomeTimeMin('30')}>
                          30
                        </ListGroup.Item>
                        <ListGroup.Item key={'updateHomeTimeMin("45")'} onClick={() => updateHomeTimeMin('45')}>
                          45
                        </ListGroup.Item>
                      </ListGroup>
                    </div>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Header as="h6">{state.homeVideoTimePM ? 'PM' : 'AM'}</Card.Header>
                  <Card.Body>
                    <div className="timesListGroup">
                      <ListGroup>
                        <ListGroup.Item key={'updateHomeTimePM"false")'} onClick={() => updateHomeTimePM(false)}>
                          AM
                        </ListGroup.Item>
                        <ListGroup.Item key={'updateHomeTimePM"true")'} onClick={() => updateHomeTimePM(true)}>
                          PM
                        </ListGroup.Item>
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
        <Button size="sm" onClick={() => {}}>
          Load Videos
        </Button>
      </Card.Footer>
    </Modal>
  );
}
