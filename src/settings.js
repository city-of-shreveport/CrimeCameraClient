import React, { Component } from 'react';
import { ContactContextProvider } from '../contexts/contactContext';
import { Container } from 'semantic-ui-react';



export default function VMS(){

const [state, dispatch] = useContext(ContactContext);

  useEffect(() => {

    function getPERFMONAPI(){
    fetch('http://10.10.10.55:3001/management/')
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'ADD_PERFMON',
          payload: json,
        });
      });
      console.log(state)
      }
      getPERFMONAPI()
      setInterval(() => {
        getPERFMONAPI()
      }, 5000);
  }, []);
return (

<Container>
        <Container>

            <Row>
                <Col>
                    <Card className="text-center">
                    <Card.Header>Configured Cameras</Card.Header>
                    <Card.Body>
                        <ContactContextProvider>
                            {state.cams.map((cam) => (
                                <Card>
                                    <Card.Header as="h5">cam.nodeName</Card.Header>
                                    <Card.Body>
                                        <Card.Title>cam.</Card.Title>
                                        <Card.Text>
                                        With supporting text below as a natural lead-in to additional content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>




                            ))}
                        </ContactContextProvider>
                    </Card.Body>
                    <Card.Footer className="text-muted">42 Cameras</Card.Footer>
                    </Card>

                </Col>
                <Col >


                </Col>
                <Col>
               

                </Col>
            </Row>
        </Container>
            
              
            
            
    </Container>

)



}