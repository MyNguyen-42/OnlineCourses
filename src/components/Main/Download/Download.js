import React, {useContext} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import ListCourses from '../../Courses/ListCourses/ListCourses';
import {useTheme} from '@react-navigation/native';
import {ScreenKey} from '../../../global/Constants';
import {Header} from 'react-native-elements';
import SmallRightButton from '../../common/SmallRightButton';
import {FavoriteContext} from '../../../Provider/FavoriteProvider';
import ListCoursesItem from '../../Courses/ListCoursesItem/ListCoursesItem';

const Download = (props) => {
  const {colors} = useTheme();
  const favoriteContext = useContext(FavoriteContext);
  const course = Array.from(favoriteContext.favoriteCourses);

  /* console.log(course); */
  const onPress = () => {
    props.navigation.navigate(ScreenKey.SettingStackScreens);
  };
  return (
    <>
      <Header
        placement="left"
        centerComponent={{
          text: 'Downloads',
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
      {course.length === 0 ? (
        <View style={styles.viewNotification}>
          <Text style={[styles.textNotification, {color: colors.text}]}>
            {' '}
            Watch your courses on the go!
          </Text>
          <Text>
            Download courses so you can coutinue to skill up-even when you're
            offline
          </Text>
        </View>
      ) : (
        <>
          <View style={styles.rightButton}>
            <Text style={styles.text}>Downloads</Text>
            <SmallRightButton
              text="Remove all"
              onPress={favoriteContext.removeAllFavoriteCourses}
            />
          </View>
          <FlatList
            data={course}
            renderItem={({item}) => (
              <ListCoursesItem navigation={props.navigation} item={item} />
            )}
          />
        </>
      )}
    </>
  );
};

export default Download;

const styles = StyleSheet.create({
  rightButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    marginHorizontal: 10,
  },
  text: {
    fontSize: 20,
  },
  viewNotification: {alignItems: 'center'},
  textNotification: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
