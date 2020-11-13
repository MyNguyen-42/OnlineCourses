import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

const VideoPlayer = (props) => {
  return (
    <View style={styles.video}>
      <Image
        source={require('../../../../assets/reactnative.png')}
        style={styles.image}
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
});
