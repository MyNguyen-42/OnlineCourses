import React from 'react';
import {StyleSheet, View} from 'react-native';
/* import Home from './src/components/Main/Home/Home'; */
/* import ListCourses from './src/components/Courses/ListCourses/ListCourses'; */
import Login from './src/components/Authentication/Login/Login';
import Register from './src/components/Authentication/Register/Register';
import VerifyPassword from './src/components/Authentication/VerifyPassword/VerifyPassword';
import Browes from './src/components/Main/Browse/Browse';
import ForgetPassword from './src/components/Authentication/ForgetPassword/ForgetPassword';
import ChangePassword from './src/components/Authentication/ChangePassword/ChangePassword';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Home /> */}
      {/* <ListCourses /> */}
      {/* <Login /> */}
      {/* <Browes /> */}
      {/* <VerifyPassword /> */}
      {/* <ForgetPassword /> */}
      <ChangePassword />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
