import React from 'react';
import {StyleSheet, View} from 'react-native';
/* import StackNavigation from './src/components/StackNavigation';
import {NavigationContainer} from '@react-navigation/native'; */
import Home from './src/components/Main/Home/Home';
/* import ListCourses from './src/components/Courses/ListCourses/ListCourses'; */

export default function App() {
  return (
    <View style={styles.container}>
      {/* <NavigationContainer>
        <StackNavigation />
      </NavigationContainer> */}
      <Home />
      {/* <ListCourses /> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
