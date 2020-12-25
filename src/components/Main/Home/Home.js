import React, {useContext, useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  ImageBackground,
  Text,
  ActivityIndicator,
} from 'react-native';
import SectionCourses from './SectionCourses/SectionCourses';
import {Header} from 'react-native-elements';
import {useTheme} from '@react-navigation/native';
import {ScreenKey} from '../../../global/Constants';
import {recommendedCourses} from '../../../models/CourseModel';
import {newCourses} from '../../../models/CourseModel';
import {CourseContext} from '../../../Provider/CourseProvider';
import {AuthenticationContext} from '../../../Provider/AuthenticationProvider';

const image = {
  uri:
    'https://www.pixelstalk.net/wp-content/uploads/2016/05/Black-Wallpaper-1680x1050-768x480.jpg',
};

const introduce =
  'With Pluralsight, you can build and apply skills in top technologies.You have free access to Skill IQ, Role IQ, a limited library of courses and a weekly rotation of new courses.';

const Home = (props) => {
  const course = Array.from(newCourses);
  const {colors} = useTheme();
  const authContext = useContext(AuthenticationContext);

  const CoursesContext = useContext(CourseContext);
  useEffect(() => {
    CoursesContext.loadListCourseSell();
    CoursesContext.loadListCourseNew();
    CoursesContext.loadFavoriteCourse(authContext.state.token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onPress = () => {
    props.navigation.navigate(ScreenKey.SettingStackScreens);
  };
  return (
    <>
      <Header
        placement="left"
        centerComponent={{
          text: 'Home',
          style: {color: colors.text, fontSize: 20, fontWeight: 'bold'},
        }}
        rightComponent={{
          icon: 'home',
          color: colors.text,
          onPress: onPress,
        }}
        backgroundColor={colors.card}
        containerStyle={styles.containerStyle}
      />
      <ScrollView>
        <ImageBackground source={image} style={styles.image}>
          <Text style={styles.text}>Welcome to Pluralsight!</Text>
          <Text style={styles.textIntroduce}>{introduce}</Text>
        </ImageBackground>
        {/* <SectionCourses
          title="Continue learning"
          navigation={props.navigation}
          data={recommendedCourses}
        /> */}
        {CoursesContext.state.isLoading ? (
          <ActivityIndicator size="large" color="#8e44ad" />
        ) : (
          <SectionCourses
            title="Top sell"
            navigation={props.navigation}
            data={CoursesContext.state.data}
            /* data={recommendedCourses} */
          />
        )}
        {CoursesContext.state.isLoadingCoursesNew ? (
          <ActivityIndicator size="large" color="#8e44ad" />
        ) : (
          <SectionCourses
            title="Top new"
            navigation={props.navigation}
            data={CoursesContext.state.dataCoursesNew}
            /* data={recommendedCourses} */
          />
        )}
        {CoursesContext.state.isLoadingUserFavoriteCourse ? (
          <ActivityIndicator size="large" color="#8e44ad" />
        ) : (
          <SectionCourses
            title="Favorites"
            navigation={props.navigation}
            data={CoursesContext.state.dataUserFavoriteCourse}
          />
        )}
      </ScrollView>
    </>
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
  containerStyle: {
    shadowColor: 'black',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 1,
    shadowRadius: 3,
  },
});
