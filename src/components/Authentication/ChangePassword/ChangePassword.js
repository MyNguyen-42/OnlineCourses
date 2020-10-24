import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Input from '../../../global/Input';
import {FilledButton} from '../../../global/FilledButton';

const ChangePassword = () => {
  return (
    <View style={styles.container}>
      <Input placeholder="New Password" style={styles.input} />
      <Input placeholder="Verify New Password" style={styles.input} />
      <FilledButton title="Send verification code" style={styles.button} />
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
