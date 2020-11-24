import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Tag = (props) => {
  return (
    <TouchableOpacity
      style={[styles.container, props.style]}
      onPress={props.onPress}>
      <>
        <Text style={styles.text}>{props.title}</Text>
      </>
    </TouchableOpacity>
  );
};

export default Tag;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    padding: 5,
    borderRadius: 50,
    marginHorizontal: 3,
  },
  text: {
    fontSize: 10,
    color: '#fff',
    textAlign: 'center',
  },
});
