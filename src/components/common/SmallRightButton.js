import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SmallRightButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={props.style}>{props.text}</Text>
        <MaterialIcons name={props.name} style={[styles.icon, props.style]} />
      </View>
    </TouchableOpacity>
  );
};

export default SmallRightButton;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
  },
  icon: {
    fontSize: 15,
    marginTop: 2,
  },
});
