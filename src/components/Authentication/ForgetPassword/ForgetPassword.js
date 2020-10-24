import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import Input from '../../../global/Input';
import {FilledButton} from '../../../global/FilledButton';
import Error from '../../../global/Error';

const ForgetPassword = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Enter your email address. We will send you a Verification code.
      </Text>
      <Input placeholder="Email address " style={styles.input} />
      <Error error="" />
      <FilledButton title="Send verification code" style={styles.button} />
    </View>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  input: {
    marginTop: 50,
  },
  text: {
    fontSize: 20,
  },
  button: {
    marginVertical: 20,
  },
});
