import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import React, { useContext, useEffect } from 'react';
import { ContactContext } from '../contexts/contactContext';

export default function CameraList1() {
  const [state, dispatch] = useContext(ContactContext);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'ADD_TODO',
          payload: json,
        });
      });
  }, []);

  return (
    <div>
      <Accordion defaultActiveKey="0">
        {state.todos.map((todo) => (
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey={todo.userId} variant="dark">
              {todo.userId}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={todo.userId}>
              <Card.Body>
                <ListGroup>
                  <ListGroup.Item variant="dark">Camera Name:</ListGroup.Item>
                  <ListGroup.Item variant="dark">Status:</ListGroup.Item>
                  <ListGroup.Item variant="dark">Cam 1: </ListGroup.Item>
                  <ListGroup.Item variant="dark">Cam 2: </ListGroup.Item>
                  <ListGroup.Item variant="dark">Cam 3:</ListGroup.Item>
                </ListGroup>

                <ButtonGroup size="sm">
                  <Button>Stream</Button>
                  <Button>Settings</Button>
                  <Button>VMS</Button>
                </ButtonGroup>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
    </div>
  );
}
