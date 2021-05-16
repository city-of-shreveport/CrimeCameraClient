import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Moment from 'react-moment';
import React, { useContext } from 'react';
import Table from 'react-bootstrap/Table';
import { GlobalContext } from '../contexts/globalContext';
import Modal from 'react-bootstrap/Modal';
import { Player} from 'video-react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Calendar from 'react-calendar'
import ListGroup from 'react-bootstrap/ListGroup';

export default function CameraList() {
  const [state, dispatch] = useContext(GlobalContext);
  const updateHomeTimeHour = (e) => dispatch({
    type: 'UPDATEHOMEVIDEOTIMEHOUR',
    payload: e,
  });
  const updateHomeTimeMin = (e) => dispatch({
    type: 'UPDATEHOMEVIDEOTIMEMIN',
    payload: e,
  });
  const updateHomeTimePM = (e) => dispatch({
    type: 'UPDATEHOMEVIDEOTIMEPM',
    payload: e,
  });
  const updateHomeVideoDate = (e) => dispatch({
    type: 'UPDATEHOMEVIDEODATE',
    payload: e,
  });
  const updateHomeSelectedCamera = (e) => dispatch({
    type: 'UPDATE_HOMESELECTEDCAM',
    payload: e,
  });
  const handleSettingsModal = () => dispatch({
    type: 'HOMESETTINGSMODAL',
    payload: true,
  });
  const handleSettingsModalClose = () => dispatch({
    type: 'HOMESETTINGSMODAL',
    payload: false,
  });
  const handleViewVideosModal = () => dispatch({
    type: 'HOMEVIEWVIDEOSMODAL',
    payload: true,
  });
  const handleViewVideosModalClose = () => dispatch({
    type: 'HOMEVIEWVIDEOSMODAL',
    payload: false,
  });
  const handleHomeStreamingModal = () => dispatch({
    type: 'HOMESTREAMINGMODAL',
    payload: true,
  });
  const handleStreamModalClose = () => dispatch({
    type: 'HOMESTREAMINGMODAL',
    payload: false,
  });

  return (
    <div>
      <Card className="text-center ">
        <Card.Header>
          <h2>Cameras</h2>
          <Form inline>
            <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
            <Button type="submit">Submit</Button>
          </Form>
        </Card.Header>
        <Card.Body className='cameraListHomePage'>
          <Accordion defaultActiveKey="0">
          {state.cams.map((cam) => (
            <Card className="text-cente ">
              <Accordion.Toggle as={Card.Header} eventKey={cam.nodeName} variant="dark" onClick={() =>  updateHomeSelectedCamera(cam.nodeName)}>
                <h5>{cam.nodeName}</h5>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={cam.nodeName}>
                <Card.Body>
                  <Card.Subtitle className="mb-1 text-muted">
                    <p class="checkedInTime">
                      Checked in: <Moment format="MM/DD/YYYY @ HH:MM:ss">{cam.lastCheckIn}</Moment>
                    </p>
                  </Card.Subtitle>
                  <Card.Text>
                    <Card.Title>Cameras</Card.Title>
                    {cam.camsOnlineStatus.cam1 ? (
                      <Button variant="success" size="sm">
                        Cam 1
                      </Button>
                    ) : (
                      <Button variant="danger" size="sm">
                        Cam 1
                      </Button>
                    )}{' '}
                    {cam.camsOnlineStatus.cam2 ? (
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
                    {cam.camsOnlineStatus.cam3 ? (
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
                          {cam.systemOK ? (<Button variant="success" size="sm">Good</Button>) : (<Button variant="danger" size="sm">Problem</Button>)}{' '}
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
                    <Button size="sm" onClick={() => handleHomeStreamingModal()}>Stream</Button> {' '}
                    <Button size="sm" onClick={() => handleSettingsModal()}>Settings</Button>{' '}
                    <Button size="sm" onClick={() => handleViewVideosModal()}>View Videos</Button>
                  </Card.Text>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          ))}
        </Accordion>
        </Card.Body>
        <Card.Footer className="text-muted">Last updated 3 mins ago</Card.Footer>
      </Card>
      <Modal show={state.homeStreamingModal} onHide={() => handleStreamModalClose()} centered  size="lg">
        <Card className="text-center">
          <Card.Header as='h5'>Streaming {state.homeSelectedCamera}</Card.Header>
          <Card.Body>
              <CardGroup>
                <Card>
                  <Player  autoPlay muted>
                    <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                  </Player>
                </Card>
                <Card>
                  <Player  autoPlay muted>
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
        <Card.Footer className="text-muted">
        </Card.Footer>
      </Modal>
      <Modal show={state.homeSettingsModal} onHide={() => handleSettingsModalClose()} centered  size="lg">
        <Card className="text-center">
          <Card.Header as='h5'>Settings</Card.Header>
          <Container>
            <Row>
              <Col>
                sdfg
              </Col>
              <Col>
                sdf
              </Col>
              <Col>
                sdf
              </Col>
            </Row>
          </Container>
        </Card>
        <Card.Footer className="text-muted">
        </Card.Footer>
      </Modal>
      <Modal show={state.homeViewVideosModal} onHide={() => handleViewVideosModalClose()} centered  size="lg">
        <Card className="text-center">
          <Card.Header as='h5'>Video Player {state.homeSelectedCamera}</Card.Header>
            <Container>
              <Row>
                <Col>
                  <Calendar onClickDay={(e) => updateHomeVideoDate(e)} value={state.homeVideoDate}/>
                </Col>
                <Col>
                  <CardGroup>
                    <Card>
                      <Card.Header as='h6'>{state.homeVideoTimeHour}</Card.Header>
                      <Card.Body>
                        <div className='timesListGroup'>
                          <ListGroup>   
                              <ListGroup.Item action  onClick={() => updateHomeTimeHour('1')}>1</ListGroup.Item>
                              <ListGroup.Item action  onClick={() => updateHomeTimeHour('2')}>2</ListGroup.Item>
                              <ListGroup.Item action  onClick={() => updateHomeTimeHour('3')}>3</ListGroup.Item>
                              <ListGroup.Item action  onClick={() => updateHomeTimeHour('4')}>4</ListGroup.Item>
                              <ListGroup.Item action  onClick={() => updateHomeTimeHour('5')}>5</ListGroup.Item>
                              <ListGroup.Item action  onClick={() => updateHomeTimeHour('6')}>6</ListGroup.Item>
                              <ListGroup.Item action  onClick={() => updateHomeTimeHour('7')}>7</ListGroup.Item>                    
                              <ListGroup.Item action  onClick={() => updateHomeTimeHour('8')}>8</ListGroup.Item>
                              <ListGroup.Item action  onClick={() => updateHomeTimeHour('9')}>9</ListGroup.Item>
                              <ListGroup.Item action  onClick={() => updateHomeTimeHour('10')}>10</ListGroup.Item>
                              <ListGroup.Item action  onClick={() => updateHomeTimeHour('11')}>11</ListGroup.Item>                        
                              <ListGroup.Item action  onClick={() => updateHomeTimeHour('12')}>12</ListGroup.Item>
                            </ListGroup>
                        </div>
                      </Card.Body>
                    </Card>
                    <Card>
                      <Card.Header as='h6'>{state.homeVideoTimeMin}</Card.Header>
                      <Card.Body>
                        <div className='timesListGroup'>
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
                      <Card.Header as='h6'>{state.homeVideoTimePM ? 'PM' : 'AM'}</Card.Header>
                      <Card.Body>
                        <div className='timesListGroup'>
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
        <CardGroup>
          <Card>
            <Player  >
              <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
            </Player>
          </Card>
          <Card>
            <Player  >
              <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
            </Player>
          </Card>
          <Card>
            <Player >
              <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
            </Player>
          </Card>
        </CardGroup>
        <Card.Footer className="text-muted">
          <Button size="sm" onClick={() => console.log("yup")}>Load Videos</Button>
        </Card.Footer>
      </Modal>
    </div>
  );
}
