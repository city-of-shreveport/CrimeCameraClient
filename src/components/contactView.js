import ContactForm from '../components/contactForm';
import ContactTable from '../components/contactTable';
import React from 'react';

import { Segment, Header } from 'semantic-ui-react';

export default function ContactView() {
  return (
    <Segment basic>
      <Header as="h3">Contacts</Header>
      <ContactForm />
      <ContactTable />
    </Segment>
  );
}
