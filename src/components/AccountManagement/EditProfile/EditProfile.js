import React, {useContext, useState} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Input from '../../common/Inputs';
import {FilledButton} from '../../common/FilledButton';
import {ScreenKey} from '../../../global/Constants';
import {AccountContext} from '../../../Provider/AccountProvider';
import {AuthenticationContext} from '../../../Provider/AuthenticationProvider';

const EditProfile = (props) => {
  const {
    getAccountById,
    changeAccountFullname,
    changeAccountEmail,
  } = useContext(AccountContext);
  const {authentication, setAuthenticated, setUser} = useContext(
    AuthenticationContext,
  );
  const [user, setCurrentUser] = useState(authentication.user);
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');

  const changeFullName = (newFullName) => {
    const status = changeAccountFullname(user.id, newFullName);
    if (status.status === 200) {
      const account = getAccountById(user.id);
      setUser(account);
    }
    return status;
  };

  const changeEmail = (newEmail) => {
    const status = changeAccountEmail(user.id, newEmail);
    if (status.status === 200) {
      const account = getAccountById(user.id);
      setUser(account);
    }
    return status;
  };

  return (
    <View>
      <View style={styles.avatar}>
        <Image
          source={{
            uri:
              'https://i.pinimg.com/736x/03/42/87/034287c49d6041b4b98ac96bdd03c3e1.jpg',
          }}
          style={styles.circle}
        />
      </View>
      <View style={styles.edit}>
        <Input
          placeholder={'user name'}
          onChangeText={(text) => {
            setFullname(text);
          }}
        />
        <Input
          placeholder={'email'}
          style={{marginTop: 10}}
          onChangeText={(text) => {
            setEmail(text);
          }}
        />
        <FilledButton
          title="SUBMIT"
          style={{marginTop: 10}}
          onPress={() => {
            props.navigation.navigate(ScreenKey.Profile);
            changeFullName(fullname);
            changeEmail(email);
          }}
        />
      </View>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  avatar: {
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
  edit: {margin: 10},
});
