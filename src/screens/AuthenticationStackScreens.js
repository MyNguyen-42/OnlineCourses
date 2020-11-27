import React from 'react';
import {ScreenKey} from '../global/Constants';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../components/Authentication/Login/Login';
import Register from '../components/Authentication/Register/Register';
import ForgetPassword from '../components/Authentication/ForgetPassword/ForgetPassword';

const AuthenticationStack = createStackNavigator();

const AuthenticationStackScreens = () => {
  return (
    <AuthenticationStack.Navigator initialRouteName={ScreenKey.LoginScreen}>
      <AuthenticationStack.Screen
        name={ScreenKey.LoginScreen}
        component={Login}
        options={{headerShown: false}}
      />
      <AuthenticationStack.Screen
        name={ScreenKey.RegisterScreen}
        component={Register}
        options={{headerShown: false}}
      />
      <AuthenticationStack.Screen
        name={ScreenKey.ForgetPasswordScreen}
        component={ForgetPassword}
        options={{headerShown: false}}
      />
    </AuthenticationStack.Navigator>
  );
};

export default AuthenticationStackScreens;
