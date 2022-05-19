import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import React, { useContext } from 'react';
import Row from 'react-bootstrap/Row';
import { GlobalContext } from '../../contexts/globalContext';
import tryValue from '../../helperFunctions';
import Moment from 'react-moment';
let formDataObject = {};

export default function SystemSettingsNewServerFormModal() {
  const [state, dispatch] = useContext(GlobalContext);
console.log(state.currentServerstreams)
  const handleSubmit = (event) => {
    console.log(event)
    let objectKey = Object.keys(event);
    let objectVal = Object.values(event);
    formDataObject[objectKey[0]] = objectVal[0];
  };

  const UpDateFormState = () => {
    console.log("form submiting")
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formDataObject),
      };
      console.log(formDataObject)
      fetch('http://127.0.0.1:3000/api/servers/updateServer/' + state.currentServerInfo.name, requestOptions)
        .then((response) => response.json())
        .then((data) => handleAddServer());
  };

  
  const handleAddServer = () =>
    dispatch({
      type: 'setState',
      payload: { systemSettingsEditServerFormModal: false },
    });

  return (
    <Modal
      dialogClassName="SystemSettingsNewServerFormModal"
      show={state.systemSettingsEditServerFormModal}
      onHide={() => handleAddServer()}
      centered
      size="lg"
    >
      <Card className="text-center">
        <Card.Header as="h5">Edit Server</Card.Header>
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
                            <Form.Control
                              placeholder={tryValue(() => {
                                return state.currentServerInfo.name;
                              })}
                              type="text"
                              onChange={(e) => handleSubmit({ name: e.target.value })}
                            />
                            
                          </Form.Group>
                        </Row>
                        <br />
                        <Row>
                          <Form.Group controlId="exampleForm.ControlSelect2">
                            <Form.Label>Server Type</Form.Label>
                           
                          
                         
                            <Form.Control as="select" onChange={(e) => handleSubmit({ service: e.target.value })}>
                            <option>{tryValue(() => {
                                return state.currentServerInfo.service;
                              })}</option>
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
                              placeholder={tryValue(() => {
                                return state.currentServerInfo.zeroTierNetworkID;
                              })}
                              onChange={(e) => handleSubmit({ zeroTierNetworkID: e.target.value })}
                            />
                          </Form.Group>
                          <Form.Group as={Col} controlId="formGridZeroTierIP">
                            <Form.Label>ZeroTier IP</Form.Label>
                            <Form.Control 
                             placeholder={tryValue(() => {
                                return state.currentServerInfo.zeroTierIP;
                              })}
                            type="text" onChange={(e) => handleSubmit({ zeroTierIP: e.target.value })} 
                            />
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
          <Card>
          <thead>
                <tr>
                  <td>Name</td>
                  <td>App</td>
                  <td>Client ID</td>
                  <td>Bytes</td>
                  <td>Ip</td>
                  <td>Connected</td>
                </tr>
              </thead>
              <tbody>
               
                  {state.currentServerstreams.map((stream) => (
                    <tr>
                      <td>
                        {tryValue(() => {
                          return stream.name;
                        })}
                      </td>
                      <td>
                        {tryValue(() => {
                          return stream.streamInfo.publisher.app;
                        })}
                      </td>

                      <td>
                        {tryValue(() => {
                          return stream.streamInfo.publisher.clientId;
                        })}
                      </td>

                      <td>
                        {tryValue(() => {
                          return stream.streamInfo.publisher.bytes;
                        })}
                      </td>
                      <td>
                        {tryValue(() => {
                          return stream.streamInfo.publisher.ip;
                        })}
                      </td>
                      <td>
                        <Moment fromNow>
                          {tryValue(() => {
                            return stream.streamInfo.publisher.connectCreated;
                          })}
                        </Moment>
                      </td>
                    </tr>
              
                ))}
              </tbody>         

          </Card>
        </CardGroup>
      </Card>
    </Modal>
  );
}
