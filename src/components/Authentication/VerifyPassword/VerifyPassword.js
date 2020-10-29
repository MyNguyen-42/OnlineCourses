import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Input from '../../common/Input';
import {FilledButton} from '../../common/FilledButton';
import Error from '../../common/Error';

const ForgetPassword = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        We have send a verification code to your email. Please enter code to
        continue.
      </Text>
      <Input placeholder="Verification" style={styles.input} />
      <Error error="" />
      <FilledButton title="Verify" style={styles.button} />
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
