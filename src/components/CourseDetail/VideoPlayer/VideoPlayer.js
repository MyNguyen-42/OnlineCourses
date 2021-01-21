import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Video from 'react-native-video';
import YouTube from 'react-native-youtube';
import {CourseContext} from '../../../Provider/CourseProvider';

const VideoPlayer = (props) => {
  const courseContext = React.useContext(CourseContext);
  const isYouTubeUri = (uri) => {
    console.log('uri is: ', uri);
    if (uri !== null) {
      return uri.indexOf('youtube') !== -1;
    }
    return false;
  };

  const getYouTubeId = (uri) => {
    if (uri.indexOf('embed') !== -1) {
      const uriLast = uri.lastIndexOf('/');
      return uri.substring(uriLast + 1);
    } else {
      const uriLast = uri.lastIndexOf('=');
      return uri.substring(uriLast + 1);
    }
  };

  return (
    <View style={styles.video}>
      {courseContext.state.isLoadingLessonVideo ? (
        <View style={styles.backgroundVideo}>
          <Text> Loading...</Text>
        </View>
      ) : // Kiểm tra ở chỗ này xem tải video có lỗi hay không
      isYouTubeUri(
          /* props.videoURL */ courseContext.state.dataLessonVideo.videoUrl,
        ) ? (
        <YouTube
          videoId={getYouTubeId(
            /* props.videoURL */ courseContext.state.dataLessonVideo.videoUrl,
          )} // The YouTube video ID
          play // control playback of video with true/false
          inline // control whether the video should play in fullscreen or inline
          loop // control whether the video should loop when ended
          apiKey="AIzaSyBy0J_swCBmhGGxPg6Iukmm2nUz793x5MU"
          /* onReady={(e) => this.setState({isReady: true})}
        onChangeState={(e) => this.setState({status: e.state})}
        onChangeQuality={(e) => this.setState({quality: e.quality})}
        onError={(e) => this.setState({error: e.error})} */
          style={{alignSelf: 'stretch', height: 300}}
        />
      ) : (
        <Video
          source={{
            uri: courseContext.state.dataLessonVideo.videoUrl,
            /* 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', */
          }}
          style={styles.backgroundVideo}
          rate={1.0}
          volume={1.0}
          shouldCorrectPitch={true}
          muted={false}
          resizeMode="cover"
          /* shouldPlay
      isLooping
      useNativeControls */
        />
      )}
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
