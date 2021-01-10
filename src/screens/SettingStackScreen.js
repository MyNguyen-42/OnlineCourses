import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScreenKey} from '../global/Constants';
import {createStackNavigator} from '@react-navigation/stack';
import Setting from '../components/AccountManagement/Setting/Setting';
import ManagementAccountStackScreens from './ManagementAccountStackScreens';
import {LanguageContext} from '../Provider/LanguageProvider';

const SettingStack = createStackNavigator();

const SettingStackScreen = () => {
  const {lang} = useContext(LanguageContext);
  return (
    <SettingStack.Navigator>
      <SettingStack.Screen
        name={ScreenKey.SettingScreen}
        component={Setting}
        options={{title: lang.setting}}
      />
      <SettingStack.Screen
        name={ScreenKey.ManagementAccountStackScreens}
        component={ManagementAccountStackScreens}
        options={{
          headerShown: false,
        }}
      />
    </SettingStack.Navigator>
  );
};

export default SettingStackScreen;
