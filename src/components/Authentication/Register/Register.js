import React, {useState, useContext, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {FilledButton} from '../../common/FilledButton';
import Heading from '../../common/Heading';
import Input from '../../common/Inputs';
import {TextButton} from '../../common/TextButton';
import {ScreenKey} from '../../../global/Constants';
/* import {AccountContext} from '../../../Provider/AccountProvider'; */

const Register = (props) => {
  const [username, setUsername] = useState('');
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');

  /*   const accountContext = useContext(AccountContext); */

  useEffect(() => {
    if (status && status.status === 200) {
      // eslint-disable-next-line no-alert
      alert('You have registered a new account. You can now sign in.');
      props.navigation.navigate(ScreenKey.LoginScreen, {status});
    }
  }, [props.navigation, status]);

  const onPressRegister = (
    username,
    email,
    fullname,
    password,
    verifyPassword,
  ) => {
    if (
      username === '' ||
      email === '' ||
      fullname === '' ||
      password === '' ||
      verifyPassword === ''
      /* ||
      password !== verifyPassword */
    ) {
      /* setShouldDisplayValidationText(true); */
    } else {
      setStatus();
      /* accountContext.registerNewAccount(username, email, fullname, password), */
    }
  };

  return (
    <View style={styles.container}>
      <Heading style={styles.title}>CREATE YOUR ACCOUNT</Heading>
      <Input
        style={styles.input}
        placeholder={'Full name'}
        leftIcon="user"
        onChangeText={(text) => setFullname(text)}
      />
      <Input
        style={styles.input}
        placeholder={'User name'}
        leftIcon="user"
        onChangeText={(text) => setUsername(text)}
      />
      <Input
        style={styles.input}
        placeholder={'Email'}
        leftIcon="envelope"
        onChangeText={(text) => setEmail(text)}
      />
      <Input style={styles.input} placeholder={'Phone'} leftIcon="phone" />
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
      />
      <FilledButton
        title={'Register'}
        onPress={() => onPressRegister(username, email, fullname, password)}
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
