import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const Input = ({style, ...props}) => {
  return <TextInput {...props} style={[style, styles.input]} />;
};

export default Input;

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#ccc',
    width: '100%',
    padding: 10,
    borderRadius: 8,
  },
});
