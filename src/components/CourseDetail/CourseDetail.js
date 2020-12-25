import React, {useState, useContext, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import CircleButton from '../common/CircleButton';
import {FilledButton} from '../common/FilledButton';
import Tag from '../common/Tag';
import {useTheme} from '@react-navigation/native';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import {ButtonGroup} from 'react-native-elements';
import ListLesson from './ListLessons/ListLesson';
import {CourseContext} from '../../Provider/CourseProvider';
import {AuthenticationContext} from '../../Provider/AuthenticationProvider';
import MyRating from '../../components/common/MyRating';

const Description =
  'Everything is working, but whenever I put the focus on the TextFile to type something, the TabBar is changed from tab C to tab A.Very annoying. This should not happen. The TabBarView remains unchanged';

const CourseDetail = (props) => {
  const {colors} = useTheme();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const courseContext = useContext(CourseContext);
  const authContext = useContext(AuthenticationContext);
  const [favorite, setFavorite] = useState('Bookmark');
  const [download, setDownload] = useState('Download');
  const buttons = ['Contents', 'Transcript'];
  console.log('CoursesDetail: ', props.route.params.item.id);
  console.log('courseContext: ', courseContext);

  useEffect(() => {
    console.log(props);
    courseContext.loadCourseDetail(
      authContext.state.token,
      props.route.params.item.id,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateIndex = (SelectedIndex) => {
    setSelectedIndex(SelectedIndex);
  };

  const onPressBookmark = (token, courseId) => {
    courseContext.likeCourse(token, courseId);
  };

  let item = props.route.params.item;
  /* console.log(item.content); */
  return (
    <ScrollView>
      {courseContext.state.isLoadingCourseDetail ? (
        <ActivityIndicator size="large" color="#8e44ad" />
      ) : (
        <>
          <VideoPlayer />
          <Text style={[styles.title, {color: colors.text}]}>{item.title}</Text>
          <Tag title={item.author} style={styles.author} onPress={() => {}} />
          <View style={styles.containerLevelRelease}>
            {/* <Text style={{color: colors.text}}>{item.level}</Text> */}
            <MyRating
              /* ratingNumber={item.ratedNumber} */
              rating={item.ratedNumber}
            />
            <Text style={{color: colors.text}}> {item.createdAt}</Text>
          </View>
          <View style={styles.containerButton}>
            <CircleButton
              title /* "bookmarked"  */ /* {favoriteContext.favoriteCourses.has(item)
              ? 'Bookmarked'
              : 'Bookmark'} */={
                courseContext.state.isLikeCourse ? 'Bookmarked' : 'Bookmark'
              }
              name="bookmark-multiple"
              onPress={() => {
                onPressBookmark(
                  authContext.state.token,
                  props.route.params.item.id,
                );
                /* if (favoriteContext.favoriteCourses.has(item)) {
              setFavorite('Bookmark');
              favoriteContext.removeFavoriteCourse(item);
            } else {
              setFavorite('Bookmarked');
              favoriteContext.addFavoriteCourse(item);
            } */
              }}
            />
            <CircleButton title="Add to channel" name="text-box-plus-outline" />
            <CircleButton
              title="DL" /* {
            favoriteContext.downloadCourses.has(item)
              ? 'Downloaded'
              : 'Download'
          } */
              name="download-circle"
              onPress={() => {
                /* if (favoriteContext.downloadCourses.has(item)) {
              setDownload('Download');
              favoriteContext.removeDownloadCourse(item);
            } else {
              setDownload('Downloaded');
              favoriteContext.addDownloadCourse(item);
            } */
              }}
            />
          </View>
          <Text style={[styles.description, {color: colors.text}]}>
            {item.description}
          </Text>
          <View style={styles.containerButtonSmall}>
            <FilledButton
              name="file-multiple-outline"
              title={'Related paths & courses'}
              style={styles.buttonSmall}
              onPress={() => {}}
            />
            <FilledButton
              name="checkbox-multiple-marked-circle-outline"
              title={'Take a learning check'}
              style={styles.buttonSmall}
              onPress={() => {}}
            />
          </View>
          <ButtonGroup
            onPress={updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{height: 30}}
            buttonStyle={{color: colors.text}}
            buttonContainerStyle={{backgroundColor: colors.background}}
            selectedButtonStyle={styles.selectedButtonStyle}
          />
          {selectedIndex ? (
            <Text style={{color: colors.text}}>{item.subtitle}</Text>
          ) : (
            <ListLesson data={item.content} />
          )}
        </>
      )}
    </ScrollView>
  );
};

export default CourseDetail;

const styles = StyleSheet.create({
  title: {
    margin: 10,
    fontSize: 20,
  },
  author: {
    padding: 10,
    width: 100,
  },
  containerLevelRelease: {
    flexDirection: 'row',
    margin: 10,
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    margin: 10,
    padding: 10,
  },
  buttonGroup: {
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  description: {
    margin: 10,
  },
  line: {
    borderBottomColor: 'gray',
    borderBottomWidth: 3,
  },
  containerButtonSmall: {
    padding: 10,
  },
  buttonSmall: {
    marginVertical: 5,
  },
});
