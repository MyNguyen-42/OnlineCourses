import React from 'react';
import {ScreenKey} from '../global/Constants';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeStackScreen from '../screens/HomeStackScreen';
import Download from '../components/Main/Download/Download';
import BrowseStackScreen from './BrowseStackScreen';
import Search from '../components/Main/Search/Search';
import SearchStackScreens from './SearchStackScreens';

const Tab = createBottomTabNavigator();

const MainTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={ScreenKey.Home}
      tabBarOptions={{
        activeTintColor: '#8e44ad',
      }}>
      <Tab.Screen
        name={ScreenKey.Home}
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={ScreenKey.Downloads}
        component={Download}
        options={{
          tabBarLabel: 'Downloads',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="download" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={ScreenKey.BrowseStackScreen}
        component={BrowseStackScreen}
        options={{
          tabBarLabel: 'Browse',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="view-grid"
              color={color}
              size={size}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={ScreenKey.SearchStackScreens}
        component={SearchStackScreens}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="search-web"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigation;
