import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import CardGroup from 'react-bootstrap/CardGroup';
import { GlobalContext } from '../contexts/globalContext';

export default function SettingsSysInfoEditCard() {
  const [, dispatch] = useContext(GlobalContext);
  const handleSysConfigModal = () =>
    dispatch({
      type: 'UPDATE_CAMERASYSCOMPONENT',
      payload: false,
    });
  return (
    <>
      <Button variant="primary" size="sm" onClick={() => handleSysConfigModal()}>
        Configure
      </Button>
      <CardGroup>
        <Card border="light">
          <Card.Text>PUT JSON EDITOR HERE</Card.Text>
        </Card>
        <Card border="light">
          <Card.Text>PUT JSON EDITOR HERE</Card.Text>
        </Card>
      </CardGroup>
    </>
  );
}
