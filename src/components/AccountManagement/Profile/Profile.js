import React, {useContext, useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {AuthenticationContext} from '../../../Provider/AuthenticationProvider';
import {AccountContext} from '../../../Provider/AccountProvider';
import {useTheme} from '@react-navigation/native';

const Profile = (props) => {
  const {colors} = useTheme();
  const authContext = useContext(AuthenticationContext);
  const accountContext = useContext(AccountContext);
  console.log('Profile Screen: ');

  useEffect(() => {
    accountContext.loadProfile(authContext.state.token);
    /* console.log('Account/Profile: ', accountContext.state); */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: accountContext.state.userInfo.avatar,
        }}
        style={styles.circle}
      />
      <Text style={[styles.textName, {color: colors.text}]}>
        {accountContext.state.userInfo.name}
      </Text>
      <Text style={[styles.textEmail, {color: colors.text}]}>
        {accountContext.state.userInfo.phone}
      </Text>
      <Text style={[styles.textPhone, {color: colors.text}]}>
        {accountContext.state.userInfo.email}
      </Text>
      <Text style={[styles.textPhone, {color: colors.text}]}>
        {accountContext.state.userInfo.type}
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
