import React from 'react';
import {StyleSheet, View} from 'react-native';
import Home from './src/components/Main/Home/Home';
import ListCourses from './src/components/Courses/ListCourses/ListCourses';
import Login from './src/components/Authentication/Login/Login';
import Register from './src/components/Authentication/Register/Register';
import VerifyPassword from './src/components/Authentication/VerifyPassword/VerifyPassword';
import Browse from './src/components/Main/Browse/Browse';
import ForgetPassword from './src/components/Authentication/ForgetPassword/ForgetPassword';
import ChangePassword from './src/components/Authentication/ChangePassword/ChangePassword';
import Profile from './src/components/AccountManagement/Profile/Profile';
import EditProfile from './src/components/AccountManagement/EditProfile/EditProfile';
import Download from './src/components/Main/Download/Download';
import Search from './src/components/Main/Search/Search';
export default function App() {
  return (
    <View style={styles.container}>
      {/* <Home /> */}
      {/* <Login /> */}
      {/* <Browse /> */}
      {/* <VerifyPassword /> */}
      {/* <ForgetPassword /> */}
      {/* <ChangePassword /> */}
      {/* <EditProfile /> */}
      {/* <ListCourses /> */}
      {/* <Download /> */}
      <Search />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
