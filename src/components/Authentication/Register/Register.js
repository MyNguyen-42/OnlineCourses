import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FilledButton} from '../../common/FilledButton';
import Heading from '../../common/Heading';
import Input from '../../common/Inputs';
import {TextButton} from '../../common/TextButton';
import {ScreenKey} from '../../../global/Constants';

const Register = (props) => {
  return (
    <View style={styles.container}>
      <Heading style={styles.title}>CREATE YOUR ACCOUNT</Heading>
      <Input style={styles.input} placeholder={'Full name'} leftIcon="user" />
      <Input style={styles.input} placeholder={'User name'} leftIcon="user" />
      <Input style={styles.input} placeholder={'Email'} leftIcon="envelope" />
      <Input style={styles.input} placeholder={'Phone'} leftIcon="phone" />
      <Input
        style={styles.input}
        placeholder={'Password'}
        leftIcon="lock"
        secureTextEntry
      />
      <Input
        style={styles.input}
        placeholder={'Confirm password'}
        leftIcon="lock"
        secureTextEntry
      />
      <FilledButton
        title={'Register'}
        onPress={() => {
          props.navigation.navigate(ScreenKey.LoginScreen);
        }}
        style={styles.loginButton}
      />
      <TextButton
        title={'Already have an account? Sign in'}
        onPress={() => {
          props.navigation.navigate(ScreenKey.LoginScreen);
        }}
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
