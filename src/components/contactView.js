import ContactForm from './contactForm';
import ContactTable from './contactTable';
import React from 'react';
import { ContactContextProvider } from '../contexts/contactContext';
import { Segment, Header } from 'semantic-ui-react';

export default function Contacts() {
  return (
    <ContactContextProvider>
      <Segment basic>
        <Header as="h3">Contacts</Header>
        <ContactForm />
        <ContactTable />
      </Segment>
    </ContactContextProvider>
  );
}
