import React, {useState, useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Input from '../../common/Inputs';
import {FilledButton} from '../../common/FilledButton';
import Error from '../../common/Error';
import {ScreenKey} from '../../../global/Constants';
import {AuthenticationContext} from '../../../Provider/AuthenticationProvider';

const ForgetPassword = (props) => {
  const [email, setEmail] = useState();
  const authContext = useContext(AuthenticationContext);
  const [error, setError] = useState('');

  const onPress = () => {
    console.log('authContext: ', authContext.state);
    authContext.sendEmailForgetPassword(email);
    if (authContext.state.status === 200) {
      props.navigation.navigate(ScreenKey.LoginScreen);
    } else {
      setError(authContext.state.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Enter your email address. We will send you a Verification code.
      </Text>
      <Input
        placeholder="Email address "
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
      />
      <Error error={error} />
      <FilledButton
        title="Send verification code"
        style={styles.button}
        onPress={() => onPress()}
      />
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
