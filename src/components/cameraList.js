import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Moment from 'react-moment';
import React, { useContext } from 'react';
import Table from 'react-bootstrap/Table';
import { GlobalContext } from '../contexts/globalContext';

export default function CameraList() {
  const [state, dispatch] = useContext(GlobalContext);

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
              <Accordion.Toggle as={Card.Header} eventKey={cam.nodeName} variant="dark">
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
                          {cam.systemOK ? (
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
                    <Button size="sm">Stream</Button> {' '}
                    <Button size="sm">Settings</Button>{' '}
                    <Button size="sm">View Videos</Button>
                  </Card.Text>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          ))}
          
        </Accordion>
          </Card.Body>
          <Card.Footer className="text-muted">Last updated 3 mins ago</Card.Footer>
      </Card>
    </div>
  );
}
