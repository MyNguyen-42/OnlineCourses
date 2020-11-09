import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native-animatable';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export function FilledButton(props) {
  return (
    <TouchableOpacity
      style={[styles.container, props.style]}
      onPress={props.onPress}>
      {/* <Text style={styles.text}>{title.toUpperCase()}</Text> */}
      <MaterialCommunityIcons name={props.name} style={styles.icon} />
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'purple',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 13,
    borderRadius: 8,
  },
  text: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
  icon: {
    fontSize: 20,
    color: '#fff',
  },
});
