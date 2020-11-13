import React from 'react';
import {StyleSheet, ScrollView, ImageBackground, Text} from 'react-native';
import ImageButton from '../../common/ImageButton';
import SectionCourses from './SectionCourses/SectionCourses';

const image = {
  uri:
    'https://www.pixelstalk.net/wp-content/uploads/2016/05/Black-Wallpaper-1680x1050-768x480.jpg',
};

const introduce =
  'With Pluralsight, you can build and apply skills in top technologies.You have free access to Skill IQ, Role IQ, a limited library of courses and a weekly rotation of new courses.';
const Home = (props) => {
  return (
    <ScrollView>
      <ImageBackground source={image} style={styles.image}>
        <Text style={styles.text}>Welcome to Pluralsight!</Text>
        <Text style={styles.textIntroduce}>{introduce}</Text>
      </ImageBackground>
      <SectionCourses title="Continue learning" navigation={props.navigation} />
      <SectionCourses title="Path" navigation={props.navigation} />
      <SectionCourses title="Chanel" navigation={props.navigation} />
      <SectionCourses title="Bookmarks" navigation={props.navigation} />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    margin: 10,
    marginTop: 50,
    color: '#ecf0f1',
  },
  textIntroduce: {
    margin: 10,
    marginTop: 0,
    fontSize: 20,
    color: 'white',
  },
});
