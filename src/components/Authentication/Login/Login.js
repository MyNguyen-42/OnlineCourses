import React, {useState, useEffect, useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {FilledButton} from '../../common/FilledButton';
import Heading from '../../common/Heading';
import Input from '../../common/Inputs';
import {TextButton} from '../../common/TextButton';
import Error from '../../common/Error';
import {login} from '../../../core/service/AuthenticationService';
import {ScreenKey} from '../../../global/Constants';
import {AuthenticationContext} from '../../../Provider/AuthenticationProvider';
import {AccountContext} from '../../../Provider/AccountProvider';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');

  const {accounts} = useContext(AccountContext);
  const {setAuthenticated, setUser} = useContext(AuthenticationContext);

  useEffect(() => {
    console.log('useEffect Login');
    if (status && status.status === 200) {
      props.navigation.navigate(ScreenKey.MainTab, {
        screen: ScreenKey.Profile,
        params: {status},
      });
    }
  }, [props.navigation, status]);

  const onPressLogin = (username, password, setAuthenticated, setUser) => {
    if (username !== '' && password !== '') {
      const loginStatus = login(accounts, username, password);
      if (loginStatus.status === 200) {
        setAuthenticated(true);
        setUser(loginStatus.user);
      }
      setStatus(loginStatus);
    } else {
      /* setShouldDisplayValidationText(true); */
    }
  };

  return (
    <View style={styles.container}>
      <Heading style={styles.title}> LOGIN</Heading>
      <Error error={status.status === 200 ? '' : status.message} />
      <Input
        style={styles.input}
        placeholder={'email'}
        leftIcon="user"
        onChangeText={(text) => setUsername(text)}
      />
      <Input
        style={styles.input}
        placeholder={'password'}
        leftIcon="lock"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <FilledButton
        title={'LOGIN'}
        onPress={() => {
          onPressLogin(username, password, setAuthenticated, setUser);
        }}
        style={styles.loginButton}
      />
      <TextButton
        title={'Have U an account? CREAT ONE'}
        onPress={() => {
          props.navigation.navigate(ScreenKey.RegisterScreen);
        }}
      />
      <TextButton
        title={'Forget password'}
        onPress={() => {
          props.navigation.navigate(ScreenKey.ForgetPasswordScreen);
        }}
      />
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
