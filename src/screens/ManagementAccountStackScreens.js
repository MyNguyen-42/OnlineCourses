import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScreenKey} from '../global/Constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from '../components/AccountManagement/Profile/Profile';
import EditProfile from '../components/AccountManagement/EditProfile/EditProfile';

const ManagementAccountStack = createStackNavigator();

const ManagementAccountStackScreens = (props) => {
  return (
    <ManagementAccountStack.Navigator>
      <ManagementAccountStack.Screen
        name={ScreenKey.Profile}
        component={Profile}
        options={{
          title: 'Profile',
          headerRight: () => (
            <MaterialCommunityIcons
              onPress={() => props.navigation.navigate(ScreenKey.EditProfile)}
              name="account-edit"
              color="#f50"
              size={26}
              style={{marginRight: 15}}
            />
          ),
        }}
      />
      <ManagementAccountStack.Screen
        name={ScreenKey.EditProfile}
        component={EditProfile}
        options={{
          title: 'Edit Profile',
        }}
      />
    </ManagementAccountStack.Navigator>
  );
};

export default ManagementAccountStackScreens;
