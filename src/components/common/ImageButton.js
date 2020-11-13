import React from 'react';
import {
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {View} from 'react-native-animatable';

const ImageButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <ImageBackground
        style={[styles.button, props.style]}
        source={{
          uri: props.uri,
        }}>
        <View style={styles.touch}>
          <Text style={styles.text}>{props.title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
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
