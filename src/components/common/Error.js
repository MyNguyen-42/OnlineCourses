import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Error = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.error} </Text>
    </View>
  );
};

export default Error;

const styles = StyleSheet.create({
  container: {paddingVertical: 8},
  text: {
    color: 'red',
    fontWeight: 'bold',
  },
});
