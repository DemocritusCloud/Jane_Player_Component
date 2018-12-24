import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../styles/MusicPlayer.css';
// import axios from 'axios';

const imagePaths = {
  pauseButton: 'https://s3-us-west-1.amazonaws.com/democrituscloud/pause.png',
  playButton: 'https://s3-us-west-1.amazonaws.com/democrituscloud/play.png'
}

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      play: false
    }
    this.clickHandler = this.clickHandler.bind(this);
    this.playStatus = this.playStatus.bind(this);
  }

  clickHandler(event) {
    this.setState({
      play: !this.state.play
    });
    console.log(this.state.play);
  }

  playStatus() {
    if (this.state.play === true) {
      //play music
    } else {
      //pause music
    }
  }

  render() {
    return(
      <div>
        {
          this.state.play
          ?
          <img className={styles.Button} src={imagePaths.pauseButton} onClick={this.clickHandler} />
          :
          <img className={styles.Button} src={imagePaths.playButton} onClick={this.clickHandler} />
        }
      </div>
    )
  }
}

export default MusicPlayer;