import React, {useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Switch,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {ScreenKey} from '../../../global/Constants';
import {useTheme} from '@react-navigation/native';
import {ThemeContext} from '../../../../App';
import {AuthenticationContext} from '../../../Provider/AuthenticationProvider';

const Setting = (props) => {
  /* const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  }; */

  const {isDarkTheme, setIsDarkTheme} = useContext(ThemeContext);
  const {colors} = useTheme();
  const authContext = useContext(AuthenticationContext);

  const onPressSignOut = () => {
    authContext.logout();
    props.navigation.navigate(ScreenKey.LoginScreen);
  };

  console.log('logout: ', authContext.state);

  return (
    <ScrollView>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate(ScreenKey.ManagementAccountStackScreens);
        }}
        style={{backgroundColor: colors.card}}>
        <View style={styles.itemContainer}>
          <FontAwesome style={styles.menuItemIcon} name="user-o" />
          <Text style={[styles.menuItemText, {color: colors.text}]}>
            Account
          </Text>
        </View>
      </TouchableOpacity>
      <View style={[styles.itemContainer, {backgroundColor: colors.card}]}>
        <FontAwesome style={styles.menuItemIcon} name="exchange" />
        <Text style={[styles.menuItemText, {color: colors.text}]}>Theme</Text>
        <Switch
          style={styles.menuItemSwitch}
          value={isDarkTheme}
          onValueChange={(value) => setIsDarkTheme(value)}
        />
      </View>
      <TouchableOpacity style={{backgroundColor: colors.card}}>
        <View style={styles.itemContainer}>
          <FontAwesome style={styles.menuItemIcon} name="flag-o" />
          <Text style={[styles.menuItemText, {color: colors.text}]}>
            App version
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onPressSignOut()}
        style={{backgroundColor: colors.card}}>
        <View style={styles.itemContainer}>
          <FontAwesome style={styles.menuItemIcon} name="sign-out" />
          <Text style={[styles.menuItemText, {color: colors.text}]}>
            Sign out
          </Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Setting;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
  menuItemIcon: {
    color: '#e74c3c',
    fontSize: 25,
  },
  menuItemSwitch: {
    marginLeft: 20,
    fontSize: 25,
  },
});
