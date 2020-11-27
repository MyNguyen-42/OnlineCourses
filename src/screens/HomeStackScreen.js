import React from 'react';
import {ScreenKey} from '../global/Constants';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../components/Main/Home/Home';
import SettingStackScreen from './SettingStackScreen';
import ListCoursesStack from './ListCoursesStack';
import CourseDetail from '../components/CourseDetail/CourseDetail';

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator initialRouteName={ScreenKey.Home}>
      <HomeStack.Screen
        name={ScreenKey.Home}
        component={Home}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name={ScreenKey.SettingStackScreens}
        component={SettingStackScreen}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name={ScreenKey.ListCoursesStack}
        component={ListCoursesStack}
      />
      <HomeStack.Screen
        name={ScreenKey.CourseDetail}
        component={CourseDetail}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
