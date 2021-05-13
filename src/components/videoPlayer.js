import Button from 'react-bootstrap/Button';
import React, { Component } from 'react';
import { Player } from 'video-react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
 
  
 
const sources = {
  sintelTrailer: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
  bunnyTrailer: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
  bunnyMovie: 'http://media.w3.org/2010/05/bunny/movie.mp4',
  test: 'http://media.w3.org/2010/05/video/movie_300.webm',
};

export default class PlayerControlExample extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      source: sources.test,
    };

    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.load = this.load.bind(this);
    this.changeCurrentTime = this.changeCurrentTime.bind(this);
    this.seek = this.seek.bind(this);
    this.changePlaybackRateRate = this.changePlaybackRateRate.bind(this);
    this.setMuted = this.setMuted.bind(this);
  }

  componentDidMount() {
    this.player.subscribeToStateChange(this.handleStateChange.bind(this));
    this.player2.subscribeToStateChange(this.handleStateChange.bind(this));
    this.player3.subscribeToStateChange(this.handleStateChange.bind(this));

     this.player4.subscribeToStateChange(this.handleStateChange.bind(this));
    this.player5.subscribeToStateChange(this.handleStateChange.bind(this));
    this.player6.subscribeToStateChange(this.handleStateChange.bind(this));
  }

  setMuted(muted) {
    return () => {
      this.player.muted = muted;
    };
  }

  handleStateChange(state) {
    this.setState({
      player: state,
      player2: state,
      player3: state,
       player4: state,
      player5: state,
      player6: state,
    });
  }

  play() {
    this.player.play();
    this.player2.play();
    this.player3.play();
    this.player4.play();
    this.player5.play();
    this.player6.play();
  }

  pause() {
    this.player.pause();
    this.player2.pause();
    this.player3.pause();
     this.player4.pause();
    this.player5.pause();
    this.player6.pause();
  }

  load() {
    this.player.load();
    this.player2.load();
    this.player3.load();
    this.player4.load();
    this.player5.load();
    this.player6.load();
  }

  changeCurrentTime(seconds) {
    return () => {
      const { player } = this.player.getState();
      this.player.seek(player.currentTime + seconds);
      this.player2.seek(player.currentTime + seconds);
      this.player3.seek(player.currentTime + seconds);
       this.player4.seek(player.currentTime + seconds);
      this.player5.seek(player.currentTime + seconds);
      this.player6.seek(player.currentTime + seconds);
    };
  }

  seek(seconds) {
    return () => {
      this.player.seek(seconds);
      this.player2.seek(seconds);
      this.player3.seek(seconds);
            this.player4.seek(seconds);
      this.player5.seek(seconds);
      this.player6.seek(seconds);
    };
  }

  changePlaybackRateRate(steps) {
    return () => {
      const { player } = this.player.getState();
      this.player.playbackRate = player.playbackRate + steps;
      const { player2 } = this.player2.getState();
      this.player2.playbackRate = player.playbackRate + steps;
      const { player3 } = this.player3.getState();
      this.player3.playbackRate = player.playbackRate + steps;

            const { player4 } = this.player4.getState();
      this.player4.playbackRate = player.playbackRate + steps;
      const { player5 } = this.player5.getState();
      this.player5.playbackRate = player.playbackRate + steps;
      const { player6 } = this.player6.getState();
      this.player6.playbackRate = player.playbackRate + steps;
    };
  }



  changeSource(name) {
    return () => {
      this.setState({
        source: sources[name],
        source2: sources[name],
        source3: sources[name],
      });
      this.player.load();
      this.player2.load();
      this.player3.load();

      this.player4.load();
      this.player5.load();
      this.player6.load();
    };
  }

  render() {
    return (
      <div>
        <Container>

        <Row>
          <Col><Player
          ref={(player) => {
            this.player = player;
          }}
        >
          <source src={this.state.source} />
        </Player></Col>
          <Col><Player
          ref={(player2) => {
            this.player2 = player2;
          }}
        >
          <source src={this.state.source} />
        </Player></Col>
          <Col><Player
          ref={(player3) => {
            this.player3 = player3;
          }}
        >
          <source src={this.state.source} />
        </Player></Col>
        </Row>


                <Row>
          <Col><Player
          ref={(player4) => {
            this.player4 = player4;
          }}
        >
          <source src={this.state.source} />
        </Player></Col>
          <Col><Player
          ref={(player5) => {
            this.player5 = player5;
          }}
        >
          <source src={this.state.source} />
        </Player></Col>
          <Col><Player
          ref={(player6) => {
            this.player6 = player6;
          }}
        >
          <source src={this.state.source} />
        </Player></Col>
        </Row>
      </Container>


        

        
        


        <div className="py-3">
          <Button onClick={this.play} className="mr-3">
            play()
          </Button>
          <Button onClick={this.pause} className="mr-3">
            pause()
          </Button>
          <Button onClick={this.load} className="mr-3">
            load()
          </Button>
        </div>
        <div className="pb-3">
          <Button onClick={this.changeCurrentTime(10)} className="mr-3">
            currentTime += 10
          </Button>
          <Button onClick={this.changeCurrentTime(-10)} className="mr-3">
            currentTime -= 10
          </Button>
          <Button onClick={this.seek(50)} className="mr-3">
            currentTime = 50
          </Button>
        </div>
        <div className="pb-3">
          <Button onClick={this.changePlaybackRateRate(1)} className="mr-3">
            playbackRate++
          </Button>
          <Button onClick={this.changePlaybackRateRate(-1)} className="mr-3">
            playbackRate--
          </Button>
          <Button onClick={this.changePlaybackRateRate(0.1)} className="mr-3">
            playbackRate+=0.1
          </Button>
          <Button onClick={this.changePlaybackRateRate(-0.1)} className="mr-3">
            playbackRate-=0.1
          </Button>
        </div>
        
        <div className="pb-3">
          <Button onClick={this.changeSource('sintelTrailer')} className="mr-3">
            Sintel teaser
          </Button>
          <Button onClick={this.changeSource('bunnyTrailer')} className="mr-3">
            Bunny trailer
          </Button>
          <Button onClick={this.changeSource('bunnyMovie')} className="mr-3">
            Bunny movie
          </Button>
          <Button onClick={this.changeSource('test')} className="mr-3">
            Test movie
          </Button>
        </div>
      </div>
    );
  }
}
