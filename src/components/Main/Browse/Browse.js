import React, {useContext, useEffect, useReducer} from 'react';
import {StyleSheet, ScrollView, Text} from 'react-native';
import {View} from 'react-native-animatable';
import ImageButton from '../../common/ImageButton';
import Tag from '../../common/Tag';
import SectionPaths from './Paths/SectionPaths/SectionPaths';
import SectionAuthors from './Authors/SectionAuthors/SectionAuthors';
import {ScreenKey, Server} from '../../../global/Constants';
import {useTheme} from '@react-navigation/native';
import {Header} from 'react-native-elements';
import {recommendedCourses, newCourses} from '../../../models/CourseModel';
import {CourseContext} from '../../../Provider/CourseProvider';
import axios from 'axios';
import {ActivityIndicator} from 'react-native';
import {AuthenticationContext} from '../../../Provider/AuthenticationProvider';
export const LOAD_INSTRUCTORS_SUCCESSED = 'LOAD_INSTRUCTORS_SUCCESSED';

const initialState = {
  instructors: null,
  isLoadingInstructor: true,
  isError: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case LOAD_INSTRUCTORS_SUCCESSED:
      return {...state, instructors: action.data, isLoadingInstructor: false};
    default:
      throw new Error();
  }
};

const Browse = (props) => {
  const {colors} = useTheme();
  const onPress = () => {
    props.navigation.navigate(ScreenKey.SettingStackScreens);
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log('load Instructors');
    axios
      .get(`${Server}/instructor`)
      .then((Response) => {
        if (Response.status === 200) {
          console.log('Action: ', Response.data.message);
          dispatch({
            type: LOAD_INSTRUCTORS_SUCCESSED,
            data: Response.data.payload,
          });
        } else {
          console.log('fail');
        }
      })
      .catch((error) => {})
      .finally(() => {});
  }, []);

  return (
    <>
      <Header
        placement="left"
        centerComponent={{
          text: 'Browse',
          style: {color: colors.text, fontSize: 20, fontWeight: 'bold'},
        }}
        rightComponent={{
          icon: 'home',
          color: colors.text,
          onPress: onPress,
        }}
        backgroundColor={colors.card}
      />
      <ScrollView>
        <ImageButton
          uri="https://wallpapertag.com/wallpaper/full/2/c/7/463317-cool-techno-backgrounds-1920x1200-for-lockscreen.jpg"
          title="NEW RELEASE"
          onPress={() => {
            const Courses = newCourses;
            props.navigation.navigate(ScreenKey.ListCoursesStack, {
              screen: ScreenKey.ListCourses,
              params: {Courses},
            });
          }}
        />
        <ImageButton
          uri="https://cdn.guidingtech.com/imager/assets/2020/04/787146/Cool-Backgrounds-for-Zoom-Meetings-1_4d470f76dc99e18ad75087b1b8410ea9.jpg?1585326792"
          title="RECOMMENDED FOR YOU"
          onPress={() => {
            const Courses = recommendedCourses;
            props.navigation.navigate(ScreenKey.ListCoursesStack, {
              screen: ScreenKey.ListCourses,
              params: {Courses},
            });
          }}
        />
        <ScrollView horizontal={true}>
          <View style={styles.grid}>
            <ImageButton
              uri="http://wonderfulengineering.com/wp-content/uploads/2014/03/Engineering-backgrounds-14.jpg"
              style={styles.imageButton}
              title="NEW RELEASE"
              onPress={() => {
                const Courses = newCourses;
                props.navigation.navigate(ScreenKey.ListCoursesStack, {
                  screen: ScreenKey.ListCourses,
                  params: {Courses},
                });
              }}
            />
            <ImageButton
              uri="http://www.hdwallpaperspulse.com/wp-content/uploads/2018/03/13/colorful-hd-backgrounds.jpg"
              style={styles.imageButton}
              title="RECOMMENDED FOR YOU"
              onPress={() => {
                const Courses = recommendedCourses;
                props.navigation.navigate(ScreenKey.ListCoursesStack, {
                  screen: ScreenKey.ListCourses,
                  params: {Courses},
                });
              }}
            />
          </View>
          <View style={styles.grid}>
            <ImageButton
              uri="http://wonderfulengineering.com/wp-content/uploads/2014/03/Engineering-backgrounds-14.jpg"
              style={styles.imageButton}
              title="NEW RELEASE"
              onPress={() => {
                const Courses = newCourses;
                props.navigation.navigate(ScreenKey.ListCoursesStack, {
                  screen: ScreenKey.ListCourses,
                  params: {Courses},
                });
              }}
            />
            <ImageButton
              uri="http://www.hdwallpaperspulse.com/wp-content/uploads/2018/03/13/colorful-hd-backgrounds.jpg"
              style={styles.imageButton}
              title="RECOMMENDED FOR YOU"
              onPress={() => {
                const Courses = recommendedCourses;
                props.navigation.navigate(ScreenKey.ListCoursesStack, {
                  screen: ScreenKey.ListCourses,
                  params: {Courses},
                });
              }}
            />
          </View>
          <View style={styles.grid}>
            <ImageButton
              uri="http://wonderfulengineering.com/wp-content/uploads/2014/03/Engineering-backgrounds-14.jpg"
              style={styles.imageButton}
              title="NEW RELEASE"
              onPress={() => {
                const Courses = newCourses;
                props.navigation.navigate(ScreenKey.ListCoursesStack, {
                  screen: ScreenKey.ListCourses,
                  params: {Courses},
                });
              }}
            />
            <ImageButton
              uri="http://www.hdwallpaperspulse.com/wp-content/uploads/2018/03/13/colorful-hd-backgrounds.jpg"
              style={styles.imageButton}
              title="RECOMMENDED FOR YOU"
              onPress={() => {
                const Courses = recommendedCourses;
                props.navigation.navigate(ScreenKey.ListCoursesStack, {
                  screen: ScreenKey.ListCourses,
                  params: {Courses},
                });
              }}
            />
          </View>
        </ScrollView>
        <Text style={[styles.label, {color: colors.text}]}>
          {' '}
          Popular Skills
        </Text>
        <ScrollView horizontal={true}>
          <Tag title="JavaScripts" onPress={() => {}} />
          <Tag title="Angular" onPress={() => {}} />
          <Tag title="C#" onPress={() => {}} />
          <Tag title="Java" onPress={() => {}} />
          <Tag title="Data Analysis" onPress={() => {}} />
        </ScrollView>
        <SectionPaths title="Paths" navigation={props.navigation} />

        {state.isLoadingInstructor ? (
          <ActivityIndicator size="large" color="#8e44ad" />
        ) : (
          <SectionAuthors
            title="Top authors"
            navigation={props.navigation}
            data={state.instructors}
          />
        )}
      </ScrollView>
    </>
  );
};

export default Browse;

const styles = StyleSheet.create({
  grid: {
    width: 200,
  },
  imageButton: {
    height: 80,
  },
  label: {
    fontSize: 20,
    marginVertical: 15,
  },
});
