import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import React, { useContext } from 'react';
import { GlobalContext } from '../../contexts/globalContext';

export default function SettingsSysInfoEditCard() {
  const [dispatch] = useContext(GlobalContext);

  const handleSysConfigModal = () =>
    dispatch({
      type: 'updateState',
      payload: { cameraSettingsComponent: false },
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
