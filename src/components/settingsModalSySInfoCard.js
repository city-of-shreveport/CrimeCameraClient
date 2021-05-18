import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import { GlobalContext } from '../contexts/globalContext';
export default function SettingsSysInfoCard() {
    const [state, dispatch] = useContext(GlobalContext);
    const handleSysConfigModal = () =>  dispatch({
        type: 'UPDATE_CAMERASYSCOMPONENT',
        payload: true,
    });
    return (
        <>
            <Button variant="primary" size="sm" onClick={() => handleSysConfigModal()}>Configure</Button>
            <CardGroup>
                <Card border="light">
                    <Card.Text>
                        <Table striped bordered hover size="sm" variant="dark">
                            <tbody>
                            <tr>
                                <td>Host Name</td>
                                <td>{state.selectedCamera}</td>
                            </tr>
                            <tr>
                                <td>FQDN</td>
                                <td>{state.selectedCamera}.local</td>
                            </tr>
                            <tr>
                                <td>IP</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Location</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Video Drive</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Buddy 1</td>
                                <td></td>
                            </tr>
                            </tbody>
                        </Table>
                    </Card.Text>
                </Card>
                <Card border="light">
                    <Card.Text>
                            <Table striped bordered hover size="sm" variant="dark">
                            <tbody>
                                <tr>
                                    <td>OS </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>CodeName</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Kernel</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Arch</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Buddy Drive</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Buddy 2</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Text>
                </Card>
            </CardGroup>
        </>
    )
}