import React, {useContext} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {AuthenticationContext} from '../../../Provider/AuthenticationProvider';
import {useTheme} from '@react-navigation/native';

const Profile = (props) => {
  const {colors} = useTheme();
  const {state} = useContext(AuthenticationContext);
  console.log('Profile Screen: '.state);
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: state.userInfo.avatar,
        }}
        style={styles.circle}
      />
      <Text style={[styles.textName, {color: colors.text}]}>
        {state.userInfo.name}
      </Text>
      <Text style={[styles.textEmail, {color: colors.text}]}>
        {state.userInfo.phone}
      </Text>
      <Text style={[styles.textPhone, {color: colors.text}]}>
        {state.userInfo.email}
      </Text>
      <Text style={[styles.textPhone, {color: colors.text}]}>
        {state.userInfo.type}
      </Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 50,
  },
  circle: {
    borderRadius: 100,
    height: 150,
    width: 150,
  },
  textName: {
    margin: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
  textEmail: {
    fontSize: 20,
    color: '#777777',
  },
  textPhone: {
    fontSize: 20,
  },
});
