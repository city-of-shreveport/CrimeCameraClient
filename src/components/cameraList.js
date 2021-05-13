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
      <Card className="text-center">
        <Card.Header>
          <h2>Cameras</h2>
        </Card.Header>

        <Card.Body>
          <Form inline>
            <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
            <Button type="submit">Submit</Button>
          </Form>
        </Card.Body>
        <Accordion defaultActiveKey="0">
          {state.cams.map((cam) => (
            <Card className="text-center">
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
                        <td>OS:</td>
                        <td>{cam.sysInfo.osInfo.distro}</td>
                      </tr>
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
                        <td>Disk 1:</td>
                        <td>
                          <p>{Math.round((cam.sysInfo.diskLayout[0].size * 0.000001) / 1024)} GB</p>
                        </td>
                      </tr>
                      <tr>
                        <td>Disk 2:</td>
                        <td>
                          <p>{Math.round((cam.sysInfo.diskLayout[1].size * 0.000001) / 1024)} GB</p>
                        </td>
                      </tr>
                      <tr>
                        <td>Cores:</td>
                        <td>
                          <p>{cam.sysInfo.cpu.cores}</p>
                        </td>
                      </tr>
                    </tbody>
                  </Table>

                  <Card.Text>
                    <Button size="sm">Stream</Button> <Button size="sm">Settings</Button>{' '}
                    <Button size="sm">PerfMon</Button>
                  </Card.Text>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          ))}
          <Card.Footer className="text-muted">Last updated 3 mins ago</Card.Footer>
        </Accordion>
      </Card>
    </div>
  );
}
