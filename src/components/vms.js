import PlayerControlExample from './videoPlayer';
import React from 'react';
import { ContactContextProvider } from '../contexts/contactContext';
import { Container } from 'semantic-ui-react';

export default function VMS() {
  return (
    <Container>
      <ContactContextProvider>
        <PlayerControlExample />
      </ContactContextProvider>
    </Container>
  );
}
