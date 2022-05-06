import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import React, { useContext, useEffect } from 'react';
import ReactPlayer from 'react-player';
import ReactHlsPlayer from 'react-hls-player';
import tryValue from '../../helperFunctions';
import { GlobalContext } from '../../contexts/globalContext';
import StreamingRow from '../Home/StreamingRow.js';

export default function StreamingPlayer() {
  const [state, dispatch] = useContext(GlobalContext);

  return (
    <Container>
      {state.streamingNodes ? Object.keys(state.streamingNodes).map( (name) => {
        return <StreamingRow selectedNode={state.streamingNodes[name]} key={name} />
      }) : null}
    </Container>

  );
}
