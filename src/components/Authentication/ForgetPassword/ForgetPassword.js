import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Input from '../../common/Input';
import {FilledButton} from '../../common/FilledButton';
import Error from '../../common/Error';

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
