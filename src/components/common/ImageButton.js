import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

const ImageButton = (props) => {
  return (
    <ImageBackground
      style={styles.button}
      source={{
        uri:
          'https://wallpapertag.com/wallpaper/full/2/c/7/463317-cool-techno-backgrounds-1920x1200-for-lockscreen.jpg',
      }}>
      <TouchableOpacity style={styles.touch} onPress={props.onPress}>
        <Text style={styles.text}>{props.title}</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default ImageButton;

const styles = StyleSheet.create({
  button: {
    height: 100,
    margin: 5,
  },
  touch: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
