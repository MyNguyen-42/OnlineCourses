import React, {useContext, useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {AuthenticationContext} from '../../../Provider/AuthenticationProvider';
import {AccountContext} from '../../../Provider/AccountProvider';
import {useTheme} from '@react-navigation/native';

const Profile = (props) => {
  const {colors} = useTheme();
  const {authentication} = useContext(AuthenticationContext);
  const accountContext = useContext(AccountContext);
  const [user, setCurrentUser] = useState(authentication.user);
  console.log(accountContext);
  console.log(authentication);
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri:
            'https://i.pinimg.com/736x/03/42/87/034287c49d6041b4b98ac96bdd03c3e1.jpg',
        }}
        style={styles.circle}
      />
      <Text style={[styles.textName, {color: colors.text}]}>
        {authentication.user.username}
      </Text>
      <Text style={[styles.textEmail, {color: colors.text}]}>
        {authentication.user.fullName}
      </Text>
      <Text style={[styles.textPhone, {color: colors.text}]}>
        {authentication.user.email}
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
