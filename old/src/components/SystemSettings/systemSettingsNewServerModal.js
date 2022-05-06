import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import React, { useContext } from 'react';
import Row from 'react-bootstrap/Row';
import { GlobalContext } from '../../contexts/globalContext';


let formDataObject = {};

export default function SystemSettingsNewServerFormModal() {
  const [state, dispatch] = useContext(GlobalContext);

  const handleSubmit = (event) => {
    let objectKey = Object.keys(event);
    let objectVal = Object.values(event);
    formDataObject[objectKey[0]] = objectVal[0];
  };

  const UpDateFormState = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formDataObject),
    };
    fetch('http://rtcc-server.shreveport-it.org:3000/api/servers', requestOptions)
      .then((response) => response.json())
      .then((data) => {});
  };

  
  const handleAddServer = () =>
    dispatch({
      type: 'setState',
      payload: { systemSettingsNewServerFormModal: false },
    });

  return (
    <Modal
      dialogClassName="SystemSettingsNewServerFormModal"
      show={state.systemSettingsNewServerFormModal}
      onHide={() => handleAddServer()}
      centered
      size="lg"
    >
      <Card className="text-center">
        <Card.Header as="h5">New Node</Card.Header>
        <CardGroup>
          <Card>
            <Form>
              <CardGroup>
                <Card>
                  <CardGroup>
                    <Card className="text-left">
                      <Card.Title>Server Information</Card.Title>
                      <Card.Body>
                        <Row>
                          <Form.Group as={Col} controlId="formGridHostName">
                            <Form.Label>Host Name</Form.Label>
                            <Form.Control type="text" onChange={(e) => handleSubmit({ name: e.target.value })} />
                          </Form.Group>
                        </Row>
                        <br />
                        <Row>
                          <Form.Group controlId="exampleForm.ControlSelect2">
                            <Form.Label>Server Type</Form.Label>
                            <Form.Control as="select" onChange={(e) => handleSubmit({ service: e.target.value })}>
                              <option>Restreamer</option>
                              <option>Client</option>
                              <option>Server</option>
                              <option>MongoDB</option>
                            </Form.Control>
                          </Form.Group>
                        </Row>
                        <br />
                        <Row>
                          <Form.Group as={Col} controlId="formGridZeroTierID">
                            <Form.Label>ZeroTier ID</Form.Label>
                            <Form.Control
                              type="text"
                              onChange={(e) => handleSubmit({ zeroTierNetworkID: e.target.value })}
                            />
                          </Form.Group>
                          <Form.Group as={Col} controlId="formGridZeroTierIP">
                            <Form.Label>ZeroTier IP</Form.Label>
                            <Form.Control type="text" onChange={(e) => handleSubmit({ zeroTierIP: e.target.value })} />
                          </Form.Group>
                        </Row>
                      </Card.Body>
                    </Card>
                  </CardGroup>
                </Card>
              </CardGroup>
            </Form>
            <Button onClick={UpDateFormState}>Save</Button>
          </Card>
        </CardGroup>
      </Card>
    </Modal>
  );
}
