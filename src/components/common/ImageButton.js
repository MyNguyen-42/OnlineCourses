import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

const ImageButton = ({style, uri, ...props}) => {
  return (
    <ImageBackground
      style={[styles.button, style]}
      source={{
        uri: uri,
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
