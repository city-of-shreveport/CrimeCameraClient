import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import React, { useContext, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import { GlobalContext } from '../../contexts/globalContext';

export default function SystemManager() {
  const [state, dispatch] = useContext(GlobalContext);

  const setState = (newState) => {
    dispatch({
      type: 'setState',
      payload: newState,
    });
  };

  useEffect(() => {
    refreshServerList();
    // eslint-disable-next-line
  }, []);

  const refreshServerList = () => {
    fetch('http://rtcc-server.shreveport-it.org:3000/api/servers/', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((json) => {
        setState({ systemManagerServerList: json });
      });
  };

  const createNewServer = () => {
    fetch('http://rtcc-server.shreveport-it.org:3000/api/servers/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: state.systemManagerServerFormName,
        type: state.systemManagerServerFormType,
        ip: state.systemManagerServerFormIP,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        refreshServerList();
        setState({ systemManagerServerFormIsShowing: false });
      });
  };

  const rebootServer = (id) => {
    fetch('http://rtcc-server.shreveport-it.org:3000/api/servers/reboot', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        _id: id,
      }),
    })
      .then((response) => response.json())
      .then((json) => {});
  };

  const deleteServer = (id) => {
    fetch('http://rtcc-server.shreveport-it.org:3000/api/servers/delete', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        _id: id,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        refreshServerList();
      });
  };

  const renderServerList = () => {
    return state.systemManagerServerList.map((server) => {
      return (
        <tr key={server._id}>
          <td>{server._id}</td>
          <td>{server.name}</td>
          <td>{server.type}</td>
          <td>{server.ip}</td>
          <td>{server.createdAt}</td>
          <td>{server.__v}</td>
          <td>
            <button onClick={() => rebootServer(server._id)}>Reboot</button>
            <button onClick={() => deleteServer(server._id)}>Delete</button>
          </td>
        </tr>
      );
    });
  };

  return (
    <Container fluid className="bg-dark">
      <Row>
        <Col>
          <button onClick={() => setState({ systemManagerServerFormIsShowing: true })}>Create New Server</button>
        </Col>
      </Row>
      <Row>
        <Col>
          <table className="table table-dark">
            <thead>
              <tr>
                <th scope="col">_id</th>
                <th scope="col">name</th>
                <th scope="col">type</th>
                <th scope="col">ip</th>
                <th scope="col">createdAt</th>
                <th scope="col">__v</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>{renderServerList()}</tbody>
          </table>
        </Col>
      </Row>

      <Modal
        show={state.systemManagerServerFormIsShowing}
        size="xs"
        onHide={() => setState({ systemManagerServerFormIsShowing: false })}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Create New Server</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>Name:</Col>
            <Col>
              <input
                type="text"
                value={state.systemManagerServerFormName}
                onChange={(event) => setState({ systemManagerServerFormName: event.target.value })}
              />
            </Col>
          </Row>
          <Row>
            <Col>Type:</Col>
            <Col>
              <select
                value={state.systemManagerServerFormType}
                onChange={(event) => setState({ systemManagerServerFormType: event.target.value })}
              >
                <option value="Server">Server</option>
                <option value="Client">Client</option>
                <option value="Database">Database</option>
              </select>
            </Col>
          </Row>
          <Row>
            <Col>IP:</Col>
            <Col>
              <input
                type="text"
                value={state.systemManagerServerFormIP}
                onChange={(event) => setState({ systemManagerServerFormIP: event.target.value })}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <button onClick={() => createNewServer()}>Create</button>
            </Col>
            <Col></Col>
          </Row>
        </Modal.Body>
      </Modal>
    </Container>
  );
}
