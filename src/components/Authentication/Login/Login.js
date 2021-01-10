import React, {useState, useEffect, useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {FilledButton} from '../../common/FilledButton';
import Heading from '../../common/Heading';
import Input from '../../common/Inputs';
import {TextButton} from '../../common/TextButton';
import {ScreenKey} from '../../../global/Constants';
import {AuthenticationContext} from '../../../Provider/AuthenticationProvider';
import {LanguageContext} from '../../../Provider/LanguageProvider';
import Error from '../../common/Error';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const authContext = useContext(AuthenticationContext);
  const {lang} = useContext(LanguageContext);

  useEffect(() => {
    console.log('Auth/Login: ', authContext);
    if (authContext.state.isAuthenticated) {
      console.log('login successed!');
      props.navigation.navigate(ScreenKey.MainTab);
    } else {
    }
  }, [authContext, authContext.state.isAuthenticated, props.navigation]);

  // eslint-disable-next-line no-shadow
  const onPressLogin = (username, password) => {
    authContext.login(username, password);
  };

  return (
    <View style={styles.container}>
      <Heading style={styles.title}>{lang.login}</Heading>
      <Error
        error={authContext.status === 200 ? '' : authContext.state.message}
      />
      <Input
        style={styles.input}
        placeholder={'email'}
        leftIcon="user"
        onChangeText={(text) => setUsername(text)}
      />
      <Input
        style={styles.input}
        placeholder={lang.password}
        leftIcon="lock"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <FilledButton
        title={lang.login}
        onPress={() => {
          onPressLogin(username, password);
        }}
        style={styles.loginButton}
      />
      <TextButton
        title={lang.haveUAnAccount}
        onPress={() => {
          props.navigation.navigate(ScreenKey.RegisterScreen);
        }}
      />
      <TextButton
        title={lang.forgetPassword}
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
