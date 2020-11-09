import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ScreenKey} from '../../global/Constants';
import * as Animatable from 'react-native-animatable';
import {ThemeContext} from '../../../App';

const SplashScreen = (props) => {
  const [loading, setLoading] = useState(0);

  /* useEffect(() => {
    //componentDidMount
    this.timer = setInterval(() => {
      setLoading(loading + 1);
    });
    //componentWillUnmount
    return () => {
      clearInterval(this.timer);
    };
  }); */

  useEffect(() => {
    console.log('loading UseEffect count loading');
    const clockInterval = setInterval(() => {
      const load = loading + 1;
      /*       console.log('create interval'); */
      setLoading(load);
    }, 100);
    return () => {
      console.log('clear interval');
      clearInterval(clockInterval);
    };
  });

  useEffect(() => {
    console.log('loading UseEffect');
    if (loading === 1) {
      props.navigation.navigate(ScreenKey.AuthenticationStackScreen);
    }
  }, [loading, props.navigation]);

  return (
    <Animatable.View
      animation="bounceIn"
      duraton="1500"
      style={styles.container}>
      <Ionicons name="school-outline" style={styles.icon} />
      <Text style={styles.text}> Learning</Text>
      <Text> Loading .... {`${loading}`}%</Text>
    </Animatable.View>
  );
};

SplashScreen.contextType = ThemeContext;

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 130,
    color: '#8e44ad',
  },
  text: {
    fontSize: 25,
    color: '#9b59b6',
    fontWeight: 'bold',
  },
});
