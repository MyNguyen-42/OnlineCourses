import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
  Switch,
} from 'react-native';
import {ListItem, Icon} from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {ScreenKey} from '../../../global/Constants';

const Setting = (props) => {
  const [isSwitchEnable, setIsSwitchEnable] = useState(false);

  return (
    <ScrollView>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate(ScreenKey.ManagementAccountStackScreens);
        }}>
        <View style={styles.itemContainer}>
          <FontAwesome style={styles.menuItemIcon} name="user-o" />
          <Text style={styles.menuItemText}>Account</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.itemContainer}>
        <FontAwesome style={styles.menuItemIcon} name="exchange" />
        <Text style={styles.menuItemText}>Theme</Text>
        <Switch
          style={styles.menuItemSwitch}
          value={isSwitchEnable}
          onValueChange={(value) => setIsSwitchEnable(value)}
        />
      </View>
      <TouchableOpacity>
        <View style={styles.itemContainer}>
          <FontAwesome style={styles.menuItemIcon} name="flag-o" />
          <Text style={styles.menuItemText}>App version</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate(ScreenKey.LoginScreen);
        }}>
        <View style={styles.itemContainer}>
          <FontAwesome style={styles.menuItemIcon} name="sign-out" />
          <Text style={styles.menuItemText}>Sign out</Text>
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
