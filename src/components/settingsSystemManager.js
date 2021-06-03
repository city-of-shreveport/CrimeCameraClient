import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import React, { useContext } from 'react';
import Row from 'react-bootstrap/Row';
import CardGroup from 'react-bootstrap/CardGroup';
import { Container } from 'semantic-ui-react';
import SettingsServers from './settingsServers';
import SystemSettingsNewServerFormModal from './systemSettingsNewServerModal'
import LineChart from './SystemLineChart';
import LineChart2 from './SystemServersLineChart';
import LineChart3 from './SystemServers2LineChart';
import BarChart from './SystemBarChart';
import BarChart2 from './SystemServersBarChart';
import BarChart3 from './SystemServers2BarChart';
import { GlobalContext } from '../contexts/globalContext';

export default function SystemManager() {
  const [state, dispatch] = useContext(GlobalContext);
  const handleAddServer = () =>
    dispatch({
      type: 'UPDATE_SYSTEMSETTINGSSERVERFORM',
      payload: true,
    });
  return (
   
    <Container fluid className="settingsDIV">
      <br />
      <Row className="justify-content-md-center">
      
        <Col xs={3}>
        <Button onClick={handleAddServer}>Add Server</Button>
          <SettingsServers />
        </Col>

        <Col xs={6}>
          <CardGroup>
            <Card>
              <LineChart />
            </Card>
            <Card>
              <BarChart />
            </Card>
          </CardGroup>

          <CardGroup>
            <Card>
              <LineChart2 />
            </Card>
            <Card>
              <BarChart2 />
            </Card>
          </CardGroup>

          <CardGroup>
            <Card>
              <LineChart3 />
            </Card>
            <Card>
              <BarChart3 />
            </Card>
          </CardGroup>
        </Col>
      </Row>
      <SystemSettingsNewServerFormModal/>
    </Container>
  );
}
