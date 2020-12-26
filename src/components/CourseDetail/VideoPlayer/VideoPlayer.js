import React from 'react';
import {StyleSheet, View} from 'react-native';
import Video from 'react-native-video';
import YouTube from 'react-native-youtube';

const VideoPlayer = (props) => {
  console.log('VideoPlayer: ', props.videoURL);
  return (
    <View style={styles.video}>
      <YouTube
        videoId="KVZ-P-ZI6W4" // The YouTube video ID
        play // control playback of video with true/false
        fullscreen // control whether the video should play in fullscreen or inline
        loop // control whether the video should loop when ended
        apiKey="AIzaSyBy0J_swCBmhGGxPg6Iukmm2nUz793x5MU"
        /* onReady={(e) => this.setState({isReady: true})}
        onChangeState={(e) => this.setState({status: e.state})}
        onChangeQuality={(e) => this.setState({quality: e.quality})}
        onError={(e) => this.setState({error: e.error})} */
        style={{alignSelf: 'stretch', height: 300}}
      />
    </View>
  );
};

export default VideoPlayer;

const styles = StyleSheet.create({
  video: {
    height: 300,
    width: '100%',
    backgroundColor: 'gray',
  },
  image: {
    height: 200,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
