import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="school-outline" style={styles.icon} />
      <Text style={styles.text}> Learning</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 130,
    color: '#8a0cc5',
  },
  text: {
    fontSize: 25,
    color: 'purple',
    fontWeight: 'bold',
  },
});
