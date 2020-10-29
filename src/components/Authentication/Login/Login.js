import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FilledButton} from '../../common/FilledButton';
import Heading from '../../common/Heading';
import Input from '../../common/Input';
import {TextButton} from '../../common/TextButton';
import Error from '../../common/Error';

const Login = () => {
  return (
    <View style={styles.container}>
      <Heading style={styles.title}> LOGIN</Heading>
      <Error error={''} />
      <Input style={styles.input} placeholder={'email'} />
      <Input style={styles.input} placeholder={'password'} secureTextEntry />
      <FilledButton
        title={'Login'}
        onPress={() => {}}
        style={styles.loginButton}
      />
      <TextButton title={'Have U an account? CREAT ONE'} onPress={() => {}} />
      <TextButton title={'Forget password'} onPress={() => {}} />
    </View>
  );
};

export default Login;

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
