import React, {useState, useContext, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {FilledButton} from '../../common/FilledButton';
import Heading from '../../common/Heading';
import Input from '../../common/Inputs';
import {TextButton} from '../../common/TextButton';
import {ScreenKey} from '../../../global/Constants';
import {AuthenticationContext} from '../../../Provider/AuthenticationProvider';
import Error from '../../common/Error';
import {ScrollView} from 'react-native';

const Register = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorConfirmPassword, setErrorConfirmPassword] = useState('');

  const authContext = useContext(AuthenticationContext);

  useEffect(() => {
    if (authContext.state.status === 200) {
      // eslint-disable-next-line no-alert
      /* alert('You have registered a new account. You can now sign in.'); */
      props.navigation.navigate(ScreenKey.LoginScreen);
    }
  }, [authContext.state.status, props.navigation]);

  const onPressRegister = (name, email, phone, password, confirmPassword) => {
    if (password === confirmPassword) {
      authContext.register(name, email, phone, password);
      setErrorConfirmPassword('');
    } else {
      setErrorConfirmPassword('Password does not match');
    }
  };

  return (
    <View style={styles.container}>
      <Heading style={styles.title}>CREATE YOUR ACCOUNT</Heading>
      <Input
        style={styles.input}
        placeholder={'User name'}
        leftIcon="user"
        onChangeText={(text) => setName(text)}
      />
      <Input
        style={styles.input}
        placeholder={'Email'}
        leftIcon="envelope"
        onChangeText={(text) => setEmail(text)}
      />
      <Input
        style={styles.input}
        placeholder={'Phone'}
        leftIcon="phone"
        onChangeText={(text) => setPhone(text)}
      />
      <Input
        style={styles.input}
        placeholder={'Password'}
        leftIcon="lock"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <Input
        style={styles.input}
        placeholder={'Confirm password'}
        leftIcon="lock"
        secureTextEntry
        onChangeText={(text) => setConfirmPassword(text)}
      />
      <Error error={errorConfirmPassword} />
      <FilledButton
        title={'Register'}
        onPress={() =>
          onPressRegister(name, email, phone, password, confirmPassword)
        }
        style={styles.loginButton}
      />
      <Error error={authContext.state.registerMessage} />
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
