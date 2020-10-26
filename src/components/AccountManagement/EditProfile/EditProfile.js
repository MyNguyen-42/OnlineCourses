import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Input from '../../../global/Input';
import FIlledButton, {FilledButton} from '../../../global/FilledButton';

const EditProfile = () => {
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
        <Input placeholder={'user name'} />
        <Input placeholder={'phone'} style={{marginTop: 10}} />
        <FilledButton title="SUBMIT" style={{marginTop: 10}} />
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