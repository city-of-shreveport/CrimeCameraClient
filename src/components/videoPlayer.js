import Button from 'react-bootstrap/Button';
import React, { Component } from 'react';
import { Player, ControlBar } from 'video-react';
import { PrismCode } from 'react-prism';

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
      source: sources.bunnyMovie,
    };

    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.load = this.load.bind(this);
    this.changeCurrentTime = this.changeCurrentTime.bind(this);
    this.seek = this.seek.bind(this);
    this.changePlaybackRateRate = this.changePlaybackRateRate.bind(this);
    this.changeVolume = this.changeVolume.bind(this);
    this.setMuted = this.setMuted.bind(this);
  }

  componentDidMount() {
    this.player.subscribeToStateChange(this.handleStateChange.bind(this));
    this.player2.subscribeToStateChange(this.handleStateChange.bind(this));
    this.player3.subscribeToStateChange(this.handleStateChange.bind(this));
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
    });
  }

  play() {
    this.player.play();
    this.player2.play();
    this.player3.play();
  }

  pause() {
    this.player.pause();
    this.player2.pause();
    this.player3.pause();
  }

  load() {
    this.player.load();
    this.player2.load();
    this.player3.load();
  }

  changeCurrentTime(seconds) {
    return () => {
      const { player } = this.player.getState();
      this.player.seek(player.currentTime + seconds);
      this.player2.seek(player.currentTime + seconds);
      this.player3.seek(player.currentTime + seconds);
    };
  }

  seek(seconds) {
    return () => {
      this.player.seek(seconds);
      this.player2.seek(seconds);
      this.player3.seek(seconds);
    };
  }

  changePlaybackRateRate(steps) {
    return () => {
      const { player } = this.player.getState();
      this.player.playbackRate = player.playbackRate + steps;
    };
  }

  changeVolume(steps) {
    return () => {
      const { player } = this.player.getState();
      this.player.volume = player.volume + steps;
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
    };
  }

  render() {
    return (
      <div>
        <Player
          ref={(player) => {
            this.player = player;
          }}
          autoPlay
        >
          <source src={this.state.source} />
          <ControlBar autoHide={false} />
        </Player>
        <Player
          ref={(player2) => {
            this.player2 = player2;
          }}
          autoPlay
        >
          <source src={this.state.source3} />
          <ControlBar autoHide={false} />
        </Player>
        <Player
          ref={(player3) => {
            this.player3 = player3;
          }}
          autoPlay
        >
          <source src={this.state.source2} />
          <ControlBar autoHide={false} />
        </Player>
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
          <Button onClick={this.changeVolume(0.1)} className="mr-3">
            volume+=0.1
          </Button>
          <Button onClick={this.changeVolume(-0.1)} className="mr-3">
            volume-=0.1
          </Button>
          <Button onClick={this.setMuted(true)} className="mr-3">
            muted=true
          </Button>
          <Button onClick={this.setMuted(false)} className="mr-3">
            muted=false
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
