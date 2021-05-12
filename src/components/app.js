import 'fomantic-ui-css/semantic.min.css';
import CameraList1 from '../components/cameraList1';
import ContactView from '../components/contactView';
import React from 'react';
import { ContactContextProvider } from '../contexts/contactContext';
import { Container } from 'semantic-ui-react';

export default function App() {
  return (
    <Container>
      <h1>React Hooks Context Demo</h1>
      <ContactContextProvider>
        <ContactView />
      </ContactContextProvider>

      <ContactContextProvider>
        <CameraList1 />
      </ContactContextProvider>
    </Container>
  );
}
