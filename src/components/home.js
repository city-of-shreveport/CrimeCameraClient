import React, { Component } from 'react';
import CameraList1 from '../components/cameraList1';
import Map from './map';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ContactContextProvider } from '../contexts/contactContext';
import { Container } from 'semantic-ui-react';

import {IconContext} from "react-icons";
import { IoCameraOutline } from "react-icons/io5";


export default function Home(){
return (

<Container>
        <Row>
            <Col xs={3}>      
            <ContactContextProvider>
                <CameraList1 />
            </ContactContextProvider></Col>
            <Col xs={8}>
                <ContactContextProvider>
                    <Map isMarkerShown />
                </ContactContextProvider>    
            </Col>
         
        </Row>
    </Container>

)



}
