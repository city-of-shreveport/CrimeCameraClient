import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import React from 'react';
import Row from 'react-bootstrap/Row';
import CardGroup from 'react-bootstrap/CardGroup'
import SettingsModal from './settingsModal'
import { Container } from 'semantic-ui-react';
import SettingsCameraList from './settingsCameraList'
import SettingsServerStats from './settingsServerStats'
import SettingsRestreamerStats from './settingsRestreamerStats'
import SettingsBackEndServers from './settingsBackEndServers'
import SettingsFrontEndServers from './settingsFrontEndServers'
import SettingsRestreaming from './settingsRestreaming'
import LineChart from './SystemLineChart'
import LineChart2 from './SystemServersLineChart'
import LineChart3 from './SystemServers2LineChart'
import BarChart from './SystemBarChart'
import BarChart2 from './SystemServersBarChart'
import BarChart3 from './SystemServers2BarChart'

export default function SysMngr() {


  return (
    <Container fluid className='settingsDIV'>
      <br/>
      <Row className="justify-content-md-center">


        <Col xs={3} >
          <SettingsRestreaming/>
          <SettingsBackEndServers/>
          <SettingsFrontEndServers/>
        </Col>

        <Col xs={6} >
          <CardGroup>
          <Card>
            <LineChart/>
          </Card>
          <Card>
             <BarChart/>
          </Card>
         </CardGroup>

         <CardGroup>
          <Card>
            <LineChart2/>
          </Card>
          <Card>
             <BarChart2/>
          </Card>
         </CardGroup>

         <CardGroup>
          <Card>
            <LineChart3/>
          </Card>
          <Card>
             <BarChart3/>
          </Card>
         </CardGroup>
        </Col>
        
      </Row>

      
    </Container>
  );
}
