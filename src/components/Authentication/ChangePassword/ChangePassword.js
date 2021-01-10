import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Input from '../../common/Inputs';
import {FilledButton} from '../../common/FilledButton';
import {LanguageContext} from '../../../Provider/LanguageProvider';

const ChangePassword = () => {
  const {lang} = React.useContext(LanguageContext);

  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  return (
    <View style={styles.container}>
      <Input placeholder={lang.newPassword} style={styles.input} />
      <Input placeholder={lang.verifyNewPassword} style={styles.input} />
      <FilledButton title={lang.sendVerificationCode} style={styles.button} />
    </View>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 10,
  },
  input: {
    marginTop: 30,
  },
  button: {
    marginVertical: 20,
  },
});
