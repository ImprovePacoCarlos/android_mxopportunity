// import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import YouTube from 'react-native-youtube';

// create a component
class VideoComponent extends Component {
    state = {
      isReady: false,
      status: null,
      quality: null,
      error: null,
      isPlaying: true,
      isLooping: true,
      duration: 0,
      currentTime: 0,
      fullscreen: false,
      containerMounted: false,
      containerWidth: null,
    };


    render() {
      return (

        <YouTube
          apiKey="AIzaSyATx68cD2jLoASEoGM6_bSlX4CrR1-allg"
          videoId={this.props.urlvideo}
          onReady={e => this.setState({ isReady: true })}
          onChangeState={e => this.setState({ status: e.state })}
          onChangeQuality={e => this.setState({ quality: e.quality })}
          onError={e => this.setState({ error: e.error })}

          style={{ alignSelf: 'stretch', height: 200 }}
        />

      );
    }
}

export default VideoComponent;
