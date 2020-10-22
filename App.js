import React from 'react';
import {StyleSheet, View} from 'react-native';
/* import StackNavigation from './src/components/StackNavigation';
import {NavigationContainer} from '@react-navigation/native'; */
/* import Home from './src/components/Main/Home/Home'; */
/* import ListCourses from './src/components/Courses/ListCourses/ListCourses'; */
import {NavigationContainer} from '@react-navigation/native';
import Login from './src/components/Authentication/Login/Login';
import Register from './src/components/Authentication/Register/Register';
import {createStackNavigator} from '@react-navigation/stack';
const RootStack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      {/* <NavigationContainer>
        <RootStack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <RootStack.Screen name="Login" component={Login} />
        </RootStack.Navigator>
      </NavigationContainer> */}
      {/* <Home /> */}
      {/* <ListCourses /> */}
      <Register />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
