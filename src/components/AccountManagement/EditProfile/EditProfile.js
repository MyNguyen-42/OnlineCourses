import React, {useContext, useState} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import Input from '../../common/Inputs';
import {FilledButton} from '../../common/FilledButton';
import {ScreenKey} from '../../../global/Constants';
import {AccountContext} from '../../../Provider/AccountProvider';
import {AuthenticationContext} from '../../../Provider/AuthenticationProvider';

const EditProfile = (props) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [avatar, setAvatar] = useState(
    'https://c7.uihere.com/files/592/884/975/programmer-computer-programming-computer-software-computer-icons-programming-language-avatar.jpg',
  );

  const authContext = useContext(AuthenticationContext);
  const accountContext = useContext(AccountContext);

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
          defaultValue={accountContext.state.userInfo.name}
          onChangeText={(text) => {
            setName(text);
          }}
        />
        <Input
          defaultValue={accountContext.state.userInfo.phone}
          style={{marginTop: 10}}
          onChangeText={(text) => {
            setPhone(text);
          }}
        />
        <FilledButton
          title="SUBMIT"
          style={{marginTop: 10}}
          onPress={() => {
            props.navigation.navigate(ScreenKey.Profile);
            accountContext.updateProfile(
              name,
              avatar,
              phone,
              authContext.state.token,
            );
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
