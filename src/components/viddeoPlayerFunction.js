 import { FaPlay } from "react-icons/fa";
import { FaStop } from "react-icons/fa";
import { FaFastForward } from "react-icons/fa"; 
import { FaFastBackward } from "react-icons/fa";
import FormGroup from 'react-bootstrap/FormGroup';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
 import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import React, { Component, useContext } from 'react';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import { Player, ControlBar, ForwardControl } from 'video-react';
import MyCalendar from './vmsCalendar'
import { GlobalContext } from '../contexts/globalContext';


const sources = {
  sintelTrailer: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
  bunnyTrailer: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
  bunnyMovie: 'http://media.w3.org/2010/05/bunny/movie.mp4',
  test: 'http://media.w3.org/2010/05/video/movie_300.webm',
};

export default function PlayerControlExample(){
    const [state, dispatch] = useContext(GlobalContext);
constructor(props, context) {
    super(props, context);

    this.state = {
      source: sources.bunnyMovie
    };

    state.play = state.videoPlayer.play.bind(this);
    state.pause = state.videoPlayer.pause.bind(this);
    state.load = state.videoPlayer.load.bind(this);
    state.changeCurrentTime = state.videoPlayer.changeCurrentTime.bind(this);
    state.seek = state.videoPlayer.seek.bind(this);
    state.changePlaybackRateRate = state.videoPlayer.changePlaybackRateRate.bind(this);
    state.setMuted = state.videoPlayer.setMuted.bind(this);
  

 
    state.player0.subscribeToStateChange(state.videoPlayer.handleStateChange.bind(this));
    state.player2.subscribeToStateChange(state.videoPlayer.handleStateChange.bind(this));
    state.player3.subscribeToStateChange(state.videoPlayer.handleStateChange.bind(this));
    state.player4.subscribeToStateChange(state.videoPlayer.handleStateChange.bind(this));
    state.player5.subscribeToStateChange(state.videoPlayer.handleStateChange.bind(this));
    state.player6.subscribeToStateChange(state.videoPlayer.handleStateChange.bind(this));
    state.player7.subscribeToStateChange(state.videoPlayer.handleStateChange.bind(this));
    state.player8.subscribeToStateChange(state.videoPlayer.handleStateChange.bind(this));
    state.player9.subscribeToStateChange(state.videoPlayer.handleStateChange.bind(this));
  


const handleClose = () =>  dispatch({
            type: 'SETVIDEOSTATE',
            payload: {
      source: sources.test,
      modalOpen: false
    },
          });;

  const handleStateChange = (state) => 
            dispatch({
            type: 'SETVIDEOPLAYERSTATE',
            payload: {
                player0: state,
                player2: state,
                player3: state,
                player4: state,
                player5: state,
                player6: state,
                player7: state,
                player8: state,
                player9: state,
                },
          })
  
 

  const play  =() => {
    state.videoPlayersState.player0.play();
    state.videoPlayersState.player2.play();
    state.videoPlayersState.player3.play();
    state.videoPlayersState.player4.play();
    state.videoPlayersState.player5.play();
    state.videoPlayersState.player6.play();
    state.videoPlayersState.player7.play();
    state.videoPlayersState.player8.play();
    state.videoPlayersState.player9.play();
  
  }

  const pause =() => 
    state.videoPlayersState.player0.pause();
    state.videoPlayersState.player2.pause();
    state.videoPlayersState.player3.pause();
    state.videoPlayersState.player4.pause();
    state.videoPlayersState.player5.pause();
    state.videoPlayersState.player6.pause();
    state.videoPlayersState.player7.pause();
    state.videoPlayersState.player8.pause();
    state.videoPlayersState.player9.pause();
 

  const load=() =>  {
    state.videoPlayersState.player0.load();
    state.videoPlayersState.player2.load();
    state.videoPlayersState.player3.load();
    state.videoPlayersState.player4.load();
    state.videoPlayersState.player5.load();
    state.videoPlayersState.player6.load();
    state.videoPlayersState.player7.load();
    state.videoPlayersState.player8.load();
    state.videoPlayersState.player9.load();
  }

  const changeCurrentTime=(seconds) =>  {
  
    return () => {
     console.log(seconds)
      const { player } = state.videoPlayersState;
      state.videoPlayersState.player0.seek(player.currentTime + seconds);
      state.videoPlayersState.player2.seek(player.currentTime + seconds);
      state.videoPlayersState.player3.seek(player.currentTime + seconds);
      state.videoPlayersState.player4.seek(player.currentTime + seconds);
      state.videoPlayersState.player5.seek(player.currentTime + seconds);
      state.videoPlayersState.player6.seek(player.currentTime + seconds);
      state.videoPlayersState.player7.seek(player.currentTime + seconds);
      state.videoPlayersState.player8.seek(player.currentTime + seconds);
      state.videoPlayersState.player9.seek(player.currentTime + seconds);
      
    };
  }

  const seek=(seconds) =>  {
     console.log("Seconds:  " + seconds)
    return () => {

      state.videoPlayersState.player0.seek(seconds);
      state.videoPlayersState.player2.seek(seconds);
      state.videoPlayersState.player3.seek(seconds);
      state.videoPlayersState.player4.seek(seconds);
      state.videoPlayersState.player5.seek(seconds);
      state.videoPlayersState.player6.seek(seconds);
       state.videoPlayersState.player7.seek(seconds);
      state.videoPlayersState.player8.seek(seconds);
      state.videoPlayersState.player9.seek(seconds);
      
    };
  }

 const changePlaybackRateRate=(steps) =>  {
    return () => {
      const { player0 } = state.videoPlayersState.player.getState();
      this.player0.playbackRate = player0.playbackRate + steps;
      // eslint-disable-next-line
      const { player2 } = state.videoPlayersState.player2.getState();
      this.player2.playbackRate = player0.playbackRate + steps;
      // eslint-disable-next-line
      const { player3 } = state.videoPlayersState.player3.getState();
      this.player3.playbackRate = player0.playbackRate + steps;
      // eslint-disable-next-line
      const { player4 } = state.videoPlayersState.player4.getState();
      this.player4.playbackRate = player0.playbackRate + steps;
      // eslint-disable-next-line
      const { player5 } = state.videoPlayersState.player5.getState();
      this.player5.playbackRate = player0.playbackRate + steps;
      // eslint-disable-next-line
      const { player6 } = thstate.videoPlayersStateis.player6.getState();
      this.player6.playbackRate = player0.playbackRate + steps;
      const { player7 } = state.videoPlayersState.player7.getState();
      this.player7.playbackRate = player0.playbackRate + steps;
      // eslint-disable-next-line
      const { player8 } = state.videoPlayersState.player8.getState();
      this.player8.playbackRate = player0.playbackRate + steps;
      // eslint-disable-next-line
      const { player9 } = state.videoPlayersState.player9.getState();
      this.player9.playbackRate = player0.playbackRate + steps;
    };
  }

  const changeSource=(name) =>  {
    return () => {
        dispatch({
            type: 'SETVIDEOSTATE',
            payload: {
       source: sources[name],
        source2: sources[name],
        source3: sources[name],
    },
          })
      
      state.videoPlayersState.player0.load();
      state.videoPlayersState.player2.load();
      state.videoPlayersState.player3.load();

      state.videoPlayersState.player4.load();
      state.videoPlayersState.player5.load();
      state.videoPlayersState.player6.load();

      state.videoPlayersState.player7.load();
      state.videoPlayersState.player8.load();
      state.videoPlayersState.player9.load();
    };
    
  }


    return (

 
    <div className='videoPlayerDIV'>
    <Container fluid>
       
          <Row className="justify-content-md-center">
            
            
            <Col sm={8} >
              <Card className="text-center">
                <Card.Header as="h5">Video Player</Card.Header>
                <Card.Body>
                 
                    <br/>
                <Row>
  
                  <Col xs={2}>
                    
                    <Button variant="secondary" size="lg" onClick={() => this.setState({'modalOpen':true })}>
                      Select Date
                    </Button>
                    <br />
                     <br />
                     <Card.Header>Camera</Card.Header>
                     <Card.Title>Main and Lincon</Card.Title>
                    <Button variant="secondary" size="sm">
                      Change
                    </Button>
                  </Col>
                  <Col xs={3}>
                    <Player ref={(player0) => {this.player0 = player0; }} >
                      <source src={this.state.source} />
                      <controls true/>
                      </Player>
                  </Col>
                  <Col xs={3}>
                    <Player  ref={(player2) => {this.player2 = player2;}}>
                      <source src={this.state.source} />
                    </Player>
                  </Col>
                  <Col xs={3}>
                    <Player ref={(player3) => { this.player3 = player3;}}>
                      <source src={this.state.source} />
                    </Player>
                  </Col>
                </Row>
                <br />
                <Row >
                  
                  <Col xs={2}>
                    <br />
                     <br />
                     <Card.Header>Camera</Card.Header>
                     <Card.Title>None Selected</Card.Title>
                    <Button variant="secondary" size="sm" >
                      Camera
                    </Button>
                  </Col>
                  <Col xs={3}>
                    <Player ref={(player4) => {this.player4 = player4;}}>
                      <source src={this.state.source} />
                    </Player>
                  </Col>

                  <Col xs={3}>
                    <Player ref={(player5) => {this.player5 = player5;}}>
                      <source src={this.state.source} />
                    </Player>
                  </Col>
                  <Col xs={3}>
                    <Player ref={(player6) => { this.player6 = player6;}}>
                      <source src={this.state.source} />
                    </Player>
                  </Col>
                </Row>
                <br />
                <Row >
                  
                  <Col xs={2}>
                    <br />
                     <br />
                     <Card.Header>Camera</Card.Header>
                     <Card.Title>None Selected</Card.Title>
                    <Button variant="secondary" size="sm">
                      Camera
                    </Button>
                  </Col>
                  <Col xs={3}>
                    <Player ref={(player7) => {this.player7 = player7;}}>
                      <source src={this.state.source} />
                    </Player>
                  </Col>

                  <Col xs={3}>
                    <Player ref={(player8) => {this.player8 = player8; }}>
                      <source src={this.state.source} />
                    </Player>
                  </Col>

                  <Col xs={3}>
                    <Player ref={(player9) => {this.player9 = player9;}}>
                      <source src={this.state.source} />
                    </Player>
                  </Col>
                 
                </Row>
              
                </Card.Body>
                <Card.Footer className="text-muted">
               <Navbar expand="lg" variant="light" bg="light">
                    <Navbar.Brand href="#">Video Time: {this.state.videoTime >= 0 && this.state.videoTime}</Navbar.Brand>   
                    <FaFastBackward size= '28'  className="amber-text pr-3" onClick={this.changeCurrentTime(-10)}/> {' '}
                      <FaPlay size= '28'  className="amber-text pr-3" onClick={this.play}/>{' '}
                    <FaStop size= '28'  className="amber-text pr-3" onClick={this.pause}/>{' '}
                    <FaFastForward size= '28'  className="amber-text pr-3" onClick={this.changeCurrentTime(10)}/>
                    <Form>
            <FormGroup> 
              <Form.Control size="lg" type="range"  onChange={(e) => {this.seek(e.target.value)}  } name="inputVideoUrl"
                id="inputVideoUrl"/>
            
            </FormGroup>
            
          </Form>
                    </Navbar>
                    </Card.Footer>
            </Card>
            </Col>
            
          </Row>
    
           <Modal show={this.state.modalOpen} onHide={() => this.setState({'modalOpen':false})} centered  size="lg">
                
                <Card className="text-center">
                  <Card.Header as='h5'>Time and Date</Card.Header>
              <MyCalendar/>
                  
                
              
                </Card>
        
                <Card.Footer className="text-muted">
                  
                </Card.Footer>
            </Modal>
       </Container>
  </div>

    );
  
}
