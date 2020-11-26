import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from '@react-navigation/native';
const CircleButton = (props) => {
  const {colors} = useTheme();
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <View style={styles.circle}>
        <MaterialCommunityIcons name={props.name} style={styles.icon} />
      </View>
      <Text style={{color: colors.text}}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default CircleButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  circle: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: '#4b494d88',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 25,
    color: '#fff',
  },
});
