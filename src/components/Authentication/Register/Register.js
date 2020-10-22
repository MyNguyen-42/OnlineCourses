import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FilledButton} from '../../../global/FilledButton';
import Heading from '../../../global/Heading';
import Input from '../../../global/Input';
import {TextButton} from '../../../global/TextButton';

const Register = () => {
  return (
    <View style={styles.container}>
      <Heading style={styles.title}>CREATE YOUR ACCOUNT</Heading>
      <Input style={styles.input} placeholder={'Full name'} />
      <Input style={styles.input} placeholder={'User name'} />
      <Input style={styles.input} placeholder={'Email'} />
      <Input style={styles.input} placeholder={'Phone'} />
      <Input style={styles.input} placeholder={'Password'} />
      <Input style={styles.input} placeholder={'Confirm password'} />
      <FilledButton
        title={'Register'}
        onPress={() => {}}
        style={styles.loginButton}
      />
      <TextButton
        title={'Already have an account? Sign in'}
        onPress={() => {}}
      />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 120,
    alignItems: 'center',
  },
  title: {
    marginBottom: 48,
  },
  input: {
    marginVertical: 8,
  },
  loginButton: {
    marginVertical: 32,
  },
});
