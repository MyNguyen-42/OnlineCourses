import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Switch,
  Modal,
  Alert,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {ScreenKey} from '../../../global/Constants';
import {useTheme} from '@react-navigation/native';
import {ThemeContext} from '../../../../App';
import {AuthenticationContext} from '../../../Provider/AuthenticationProvider';
import {LanguageContext, languages} from '../../../Provider/LanguageProvider';
import {TouchableHighlight} from 'react-native';

const Setting = (props) => {
  /* const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  }; */

  const {isDarkTheme, setIsDarkTheme} = useContext(ThemeContext);
  const {lang, setLang} = useContext(LanguageContext);
  const {colors} = useTheme();
  const authContext = useContext(AuthenticationContext);
  const [modalVisible, setModalVisible] = useState(false);

  console.log('lang: ', lang);

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
            {lang.account}
          </Text>
        </View>
      </TouchableOpacity>
      <View style={[styles.itemContainer, {backgroundColor: colors.card}]}>
        <FontAwesome style={styles.menuItemIcon} name="exchange" />
        <Text style={[styles.menuItemText, {color: colors.text}]}>
          {lang.theme}
        </Text>
        <Switch
          style={styles.menuItemSwitch}
          value={isDarkTheme}
          onValueChange={(value) => setIsDarkTheme(value)}
        />
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        presentationStyle="pageSheet"
        statusBarTranslucent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableHighlight
              style={{...styles.openButton, backgroundColor: '#fff'}}
              onPress={() => {
                setModalVisible(!modalVisible);
                setLang(languages.en);
              }}>
              <Text style={[styles.textStyle, {color: colors.text}]}>
                English
              </Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={{...styles.openButton, backgroundColor: '#fff'}}
              onPress={() => {
                setModalVisible(!modalVisible);
                setLang(languages.vi);
              }}>
              <Text style={[styles.textStyle, {color: colors.text}]}>
                Việt Nam
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}
        style={{backgroundColor: colors.card}}>
        <View style={styles.itemContainer}>
          <FontAwesome style={styles.menuItemIcon} name="language" />
          <Text style={[styles.menuItemText, {color: colors.text}]}>
            {lang.language}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor: colors.card}}>
        <View style={styles.itemContainer}>
          <FontAwesome style={styles.menuItemIcon} name="flag-o" />
          <Text style={[styles.menuItemText, {color: colors.text}]}>
            {lang.appVersion}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onPressSignOut()}
        style={{backgroundColor: colors.card}}>
        <View style={styles.itemContainer}>
          <FontAwesome style={styles.menuItemIcon} name="sign-out" />
          <Text style={[styles.menuItemText, {color: colors.text}]}>
            {lang.signOut}
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 5,
    /* padding: 35, */
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    /* borderRadius: 20, */
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
