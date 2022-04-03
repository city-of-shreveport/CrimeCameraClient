import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardGroup';
import React, { useContext } from 'react';
// eslint-disable-next-line
import Table from 'react-bootstrap/Table';
import tryValue from '../../helperFunctions';
import { GlobalContext } from '../../contexts/globalContext';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';

export default function SettingsNodeCard() {
  const [state, dispatch] = useContext(GlobalContext);

  let camera1IMG =
    'http://rtcc-server.shreveport-it.org:3000/api/cameraConfig/snapshot/' +
    tryValue(() => {
      return state.currentNodeInfo.name;
    }) +
    '/camera1';

  let camera2IMG =
    'http://rtcc-server.shreveport-it.org:3000/api/cameraConfig/snapshot/' +
    tryValue(() => {
      return state.currentNodeInfo.name;
    }) +
    '/camera2';

  let camera3IMG =
    'http://rtcc-server.shreveport-it.org:3000/api/cameraConfig/snapshot/' +
    tryValue(() => {
      return state.currentNodeInfo.name;
    }) +
    '/camera3';

  const handleCloseNodeCameraConfigModal = () => {
    dispatch({
      type: 'setState',
      payload: {
        nodeCameraSettingsoModal: false,
      },
    });
  };
  const syncCameraTime = (camera) => {
    fetch(
      'http://rtcc-server.shreveport-it.org:3000/api/cameraConfig/settime/' +
        tryValue(() => {
          return state.currentNodeInfo.name;
        }) +
        '/' +
        camera
    ).then((response) => console.log(response));
  };
  return (
    <Modal
      dialogClassName="customModalCameraConfigNode"
      show={state.nodeCameraSettingsoModal}
      onHide={() => handleCloseNodeCameraConfigModal()}
      centered
      size="lg"
    >
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img alt="" src="/logo.svg" width="30" height="30" className="d-inline-block align-top" />{' '}
          {tryValue(() => {
            return state.currentNodeInfo.name;
          })}
        </Navbar.Brand>
      </Navbar>
      <CardDeck>
        <Card className="text-center">
          <Card.Img variant="top" src={camera1IMG} />
          <Card.Body>
            <Card.Title>Camera 1</Card.Title>

            <Form>
              <Row>
                <Col>
                  <Form.Label>Brightness</Form.Label>
                  <br />
                  <Form.Control type="range" min="1" max="100" value={state.currentNodeCamera1Config.Brightness} />
                </Col>
                <Col>
                  <Form.Label>Hue</Form.Label>
                  <br />
                  <Form.Control type="range" min="1" max="100" value={state.currentNodeCamera1Config.Hue} />
                </Col>
                <Col>
                  <Form.Label>Saturation</Form.Label>
                  <br />
                  <Form.Control type="range" min="1" max="100" value={state.currentNodeCamera1Config.Saturation} />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>Gamma</Form.Label>
                  <br />
                  <Form.Control type="range" min="1" max="100" value={state.currentNodeCamera1Config.Gamma} />
                </Col>
                <Col>
                  <Form.Label>Contrast</Form.Label>
                  <br />
                  <Form.Control type="range" min="1" max="100" value={state.currentNodeCamera1Config.Contrast} />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>IP</Form.Label>
                  <Form.Control size="sm" type="text" placeholder={state.currentNodeCamera1NetworkSettings.IPAddress} />
                </Col>
                <Col>
                  <Form.Label>Gateway</Form.Label>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder={state.currentNodeCamera1NetworkSettings.DefaultGateway}
                  />
                </Col>
                <Col>
                  <Form.Label>Dhcp</Form.Label>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder={state.currentNodeCamera1NetworkSettings.DhcpEnable}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>Subnet</Form.Label>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder={state.currentNodeCamera1NetworkSettings.SubnetMask}
                  />
                </Col>
                <Col>
                  <Form.Label>Dns 1</Form.Label>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder={state.currentNodeCamera1NetworkSettings.DnsServer1}
                  />
                </Col>
                <Col>
                  <Form.Label>Dns 2</Form.Label>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder={state.currentNodeCamera1NetworkSettings.DnsServer2}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>Domain</Form.Label>
                  <Form.Control size="sm" type="text" placeholder={state.currentNodeCamera1NetworkSettings.Domain} />
                </Col>
                <Col>
                  <Form.Label>Host Name</Form.Label>
                  <Form.Control size="sm" type="text" placeholder={state.currentNodeCamera1NetworkSettings.Hostname} />
                </Col>
                <Col>
                  <Form.Label>MAC</Form.Label>
                  <Form.Control
                    readOnly
                    size="sm"
                    type="text"
                    placeholder={state.currentNodeCamera1NetworkSettings.PhysicalAddress}
                  />
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Label>Resolution</Form.Label>
                  <Form.Control size="sm" type="text" placeholder={state.currentNodeCamera1Settings.resolution} />
                </Col>
                <Col>
                  <Form.Label>BitRateControl</Form.Label>
                  <Form.Control size="sm" type="text" placeholder={state.currentNodeCamera1Settings.BitRateControl} />
                </Col>
                <Col>
                  <Form.Label>FPS</Form.Label>
                  <Form.Control size="sm" type="text" placeholder={state.currentNodeCamera1Settings.FPS} />
                </Col>
                <Col>
                  <Form.Label>Quality</Form.Label>
                  <Form.Control size="sm" type="text" placeholder={state.currentNodeCamera1Settings.Quality} />
                </Col>
              </Row>
            </Form>
            <br />
            <div>
              <Button variant="primary" size="sm">
                Update
              </Button>{' '}
              <Button variant="primary" size="sm" onClick={() => syncCameraTime('camera1')}>
                Sync Time
              </Button>
            </div>
          </Card.Body>
          <Card.Footer>
            Camera Time
            <small className="text-muted">{state.currentNodeCamera1Time.time}</small>
          </Card.Footer>
        </Card>

        <Card className="text-center">
          <Card.Img variant="top" src={camera2IMG} />
          <Card.Body>
            <Card.Title>Camera 2</Card.Title>

            <Form>
              <Row>
                <Col>
                  <Form.Label>Brightness</Form.Label>
                  <br />
                  <Form.Control type="range" min="1" max="100" value={state.currentNodeCamera2Config.Brightness} />
                </Col>
                <Col>
                  <Form.Label>Hue</Form.Label>
                  <br />
                  <Form.Control type="range" min="1" max="100" value={state.currentNodeCamera2Config.Hue} />
                </Col>
                <Col>
                  <Form.Label>Saturation</Form.Label>
                  <br />
                  <Form.Control type="range" min="1" max="100" value={state.currentNodeCamera2Config.Saturation} />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>Gamma</Form.Label>
                  <br />
                  <Form.Control type="range" min="1" max="100" value={state.currentNodeCamera2Config.Gamma} />
                </Col>
                <Col>
                  <Form.Label>Contrast</Form.Label>
                  <br />
                  <Form.Control type="range" min="1" max="100" value={state.currentNodeCamera2Config.Contrast} />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>IP</Form.Label>
                  <Form.Control size="sm" type="text" placeholder={state.currentNodeCamera2NetworkSettings.IPAddress} />
                </Col>
                <Col>
                  <Form.Label>Gateway</Form.Label>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder={state.currentNodeCamera2NetworkSettings.DefaultGateway}
                  />
                </Col>
                <Col>
                  <Form.Label>Dhcp</Form.Label>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder={state.currentNodeCamera2NetworkSettings.DhcpEnable}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>Subnet</Form.Label>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder={state.currentNodeCamera2NetworkSettings.SubnetMask}
                  />
                </Col>
                <Col>
                  <Form.Label>Dns 1</Form.Label>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder={state.currentNodeCamera2NetworkSettings.DnsServer1}
                  />
                </Col>
                <Col>
                  <Form.Label>Dns 2</Form.Label>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder={state.currentNodeCamera2NetworkSettings.DnsServer2}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>Domain</Form.Label>
                  <Form.Control size="sm" type="text" placeholder={state.currentNodeCamera2NetworkSettings.Domain} />
                </Col>
                <Col>
                  <Form.Label>Host Name</Form.Label>
                  <Form.Control size="sm" type="text" placeholder={state.currentNodeCamera2NetworkSettings.Hostname} />
                </Col>
                <Col>
                  <Form.Label>MAC</Form.Label>
                  <Form.Control
                    readOnly
                    size="sm"
                    type="text"
                    placeholder={state.currentNodeCamera2NetworkSettings.PhysicalAddress}
                  />
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Label>Resolution</Form.Label>
                  <Form.Control size="sm" type="text" placeholder={state.currentNodeCamera2Settings.resolution} />
                </Col>
                <Col>
                  <Form.Label>BitRateControl</Form.Label>
                  <Form.Control size="sm" type="text" placeholder={state.currentNodeCamera2Settings.BitRateControl} />
                </Col>
                <Col>
                  <Form.Label>FPS</Form.Label>
                  <Form.Control size="sm" type="text" placeholder={state.currentNodeCamera2Settings.FPS} />
                </Col>
                <Col>
                  <Form.Label>Quality</Form.Label>
                  <Form.Control size="sm" type="text" placeholder={state.currentNodeCamera2Settings.Quality} />
                </Col>
              </Row>
            </Form>
            <br />
            <div>
              <Button variant="primary" size="sm">
                Update
              </Button>{' '}
              <Button variant="primary" size="sm" onClick={() => syncCameraTime('camera2')}>
                Sync Time
              </Button>
            </div>
          </Card.Body>
          <Card.Footer>
            Camera Time
            <small className="text-muted">{state.currentNodeCamera2Time.time}</small>
          </Card.Footer>
        </Card>

        <Card className="text-center">
          <Card.Img variant="top" src={camera3IMG} />
          <Card.Body>
            <Card.Title>Camera 3</Card.Title>

            <Form>
              <Row>
                <Col>
                  <Form.Label>Brightness</Form.Label>
                  <br />
                  <Form.Control type="range" min="1" max="100" value={state.currentNodeCamera3Config.Brightness} />
                </Col>
                <Col>
                  <Form.Label>Hue</Form.Label>
                  <br />
                  <Form.Control type="range" min="1" max="100" value={state.currentNodeCamera3Config.Hue} />
                </Col>
                <Col>
                  <Form.Label>Saturation</Form.Label>
                  <br />
                  <Form.Control type="range" min="1" max="100" value={state.currentNodeCamera3Config.Saturation} />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>Gamma</Form.Label>
                  <br />
                  <Form.Control type="range" min="1" max="100" value={state.currentNodeCamera3Config.Gamma} />
                </Col>
                <Col>
                  <Form.Label>Contrast</Form.Label>
                  <br />
                  <Form.Control type="range" min="1" max="100" value={state.currentNodeCamera3Config.Contrast} />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>IP</Form.Label>
                  <Form.Control size="sm" type="text" placeholder={state.currentNodeCamera3NetworkSettings.IPAddress} />
                </Col>
                <Col>
                  <Form.Label>Gateway</Form.Label>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder={state.currentNodeCamera3NetworkSettings.DefaultGateway}
                  />
                </Col>
                <Col>
                  <Form.Label>Dhcp</Form.Label>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder={state.currentNodeCamera3NetworkSettings.DhcpEnable}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>Subnet</Form.Label>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder={state.currentNodeCamera3NetworkSettings.SubnetMask}
                  />
                </Col>
                <Col>
                  <Form.Label>Dns 1</Form.Label>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder={state.currentNodeCamera3NetworkSettings.DnsServer1}
                  />
                </Col>
                <Col>
                  <Form.Label>Dns 2</Form.Label>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder={state.currentNodeCamera3NetworkSettings.DnsServer2}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>Domain</Form.Label>
                  <Form.Control size="sm" type="text" placeholder={state.currentNodeCamera3NetworkSettings.Domain} />
                </Col>
                <Col>
                  <Form.Label>Host Name</Form.Label>
                  <Form.Control size="sm" type="text" placeholder={state.currentNodeCamera3NetworkSettings.Hostname} />
                </Col>
                <Col>
                  <Form.Label>MAC</Form.Label>
                  <Form.Control
                    readOnly
                    size="sm"
                    type="text"
                    placeholder={state.currentNodeCamera3NetworkSettings.PhysicalAddress}
                  />
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Label>Resolution</Form.Label>
                  <Form.Control size="sm" type="text" placeholder={state.currentNodeCamera3Settings.resolution} />
                </Col>
                <Col>
                  <Form.Label>BitRateControl</Form.Label>
                  <Form.Control size="sm" type="text" placeholder={state.currentNodeCamera3Settings.BitRateControl} />
                </Col>
                <Col>
                  <Form.Label>FPS</Form.Label>
                  <Form.Control size="sm" type="text" placeholder={state.currentNodeCamera3Settings.FPS} />
                </Col>
                <Col>
                  <Form.Label>Quality</Form.Label>
                  <Form.Control size="sm" type="text" placeholder={state.currentNodeCamera3Settings.Quality} />
                </Col>
              </Row>
            </Form>
            <br />
            <div>
              <Button variant="primary" size="sm">
                Update
              </Button>{' '}
              <Button variant="primary" size="sm" onClick={() => syncCameraTime('camera3')}>
                Sync Time
              </Button>
            </div>
          </Card.Body>
          <Card.Footer>
            Camera Time
            <small className="text-muted">{state.currentNodeCamera3Time.time}</small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </Modal>
  );
}
