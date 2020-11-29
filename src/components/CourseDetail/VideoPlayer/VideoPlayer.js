import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import Video from 'react-native-video';

const VideoPlayer = (props) => {
  return (
    <View style={styles.video}>
      {/*  <Image
        source={require('../../../../assets/reactnative.png')}
        style={styles.image}
      /> */}
      <Video
        /* source={require('../../../../assets/video/BigBuckBunny.mp4')} */
        source={{
          uri:
            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        }} // Can be a URL or a local file. // Store reference
        style={styles.backgroundVideo}
        rate={1.0}
        volume={1.0}
        shouldCorrectPitch={true}
        muted={false}
        resizeMode="cover"
        /* shouldPlay
        isLooping
        useNativeControls */
        /* onBuffer={this.onBuffer} // Callback when remote video is buffering
        onError={this.videoError} // Callback when video cannot be loaded */
        /* ref={(ref) => {
          this.player = ref;
        }} */
      />
    </View>
  );
};

export default VideoPlayer;

const styles = StyleSheet.create({
  video: {
    height: 200,
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
