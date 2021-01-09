import React, {useState, useContext, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  Share,
} from 'react-native';
import CircleButton from '../common/CircleButton';
import {FilledButton} from '../common/FilledButton';
import Tag from '../common/Tag';
import {useTheme} from '@react-navigation/native';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import {ButtonGroup, Rating} from 'react-native-elements';
import ListLesson from './ListLessons/ListLesson';
import {CourseContext} from '../../Provider/CourseProvider';
import {AuthenticationContext} from '../../Provider/AuthenticationProvider';
import MyRating from '../../components/common/MyRating';
import ListComment from './ListComment/ListComment';
import Input from '../common/Inputs';
import SectionCoursesItem from '../Main/Home/SectionCoursesItem/SectionCoursesItem';
import {ScreenKey} from '../../global/Constants';

export const videoURLContext = React.createContext();

const Description =
  'Everything is working, but whenever I put the focus on the TextFile to type something, the TabBar is changed from tab C to tab A.Very annoying. This should not happen. The TabBarView remains unchanged';

const CourseDetail = (props) => {
  const {colors} = useTheme();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const courseContext = useContext(CourseContext);
  const authContext = useContext(AuthenticationContext);
  const [favorite, setFavorite] = useState('Bookmark');
  const [download, setDownload] = useState('Download');
  const [yourComment, setYourComment] = useState('');
  const [yourRating, setYourRating] = useState(5);
  const [videoURL, setVideoURL] = React.useState('');
  const buttons = ['Contents', 'Transcript'];
  console.log('CoursesDetail: ', props.route.params.item.id);
  console.log('courseContext: ', courseContext);
  console.log('videoURL: ', videoURL);

  useEffect(() => {
    console.log(props);
    courseContext.getCourseDetail(props.route.params.item.id);
    courseContext.getRatingCourse(
      authContext.state.token,
      props.route.params.item.id,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.route.params.item.id]);

  const ratingCompleted = (rating) => {
    console.log('Rating is: ' + rating);
    setYourRating(rating);
  };

  const onPressReview = (token, courseId, yourComment, yourRating) => {
    console.log('Review btn: ');
    courseContext.ratingCourse(token, courseId, yourRating, yourComment);
  };

  const updateIndex = (SelectedIndex) => {
    setSelectedIndex(SelectedIndex);
  };

  const onPressBookmark = (token, courseId) => {
    courseContext.likeCourse(token, courseId);
  };

  const onPressBuyCourse = (token, courseId) => {
    courseContext.buyFreeCourse(token, courseId);
  };

  const onShare = async (nameCourse) => {
    try {
      const result = await Share.share({
        message: nameCourse,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const onPressSectionItem = (item) => {
    props.navigation.navigate(ScreenKey.CourseDetail, {item});
  };

  const renderCoursesLikeCategory = (value) => {
    return value.map((item) => (
      <SectionCoursesItem
        item={item}
        navigation={props.navigation}
        onPressSectionItem={onPressSectionItem}
      />
    ));
  };

  let item = props.route.params.item;
  /* console.log(item.content); */
  return (
    <videoURLContext.Provider value={{videoURL, setVideoURL}}>
      <ScrollView>
        {courseContext.state.isLoadingCourseDetail ? (
          <ActivityIndicator size="large" color="#8e44ad" />
        ) : (
          <>
            <VideoPlayer videoURL={videoURL} />
            <Text style={[styles.title, {color: colors.text}]}>
              {courseContext.state.dataCourseDetail.title}
            </Text>
            <Tag
              title={courseContext.state.dataCourseDetail.instructor.name}
              style={styles.author}
              onPress={() => {}}
            />
            <View style={styles.containerLevelRelease}>
              <MyRating
                /* ratingNumber={item.ratedNumber} */
                rating={courseContext.state.dataCourseDetail.formalityPoint}
              />
              <Text style={{color: colors.text}}>
                {courseContext.state.dataCourseDetail.createdAt}
              </Text>
            </View>
            <View style={styles.containerButton}>
              <CircleButton
                title={
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
              <CircleButton
                title="Add to channel"
                name="text-box-plus-outline"
                onPress={() => {
                  onPressBuyCourse(
                    authContext.state.token,
                    props.route.params.item.id,
                  );
                }}
              />
              <CircleButton
                title="Download" /* {
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
              {courseContext.state.dataCourseDetail.description}
            </Text>
            {/* {item.learnWhat.map((item) => (
              <Text style={[styles.description, {color: colors.text}]}>
                {item}
              </Text>
            ))} */}
            <View style={styles.containerButtonSmall}>
              <FilledButton
                /* name="file-multiple-outline" */
                name="share"
                /* title={'Related paths & courses'} */
                title={'Share'}
                style={styles.buttonSmall}
                onPress={() => {
                  onShare(courseContext.state.dataCourseDetail.title);
                }}
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
              <ListLesson data={courseContext.state.dataCourseDetail.section} />
            )}

            <Text>Các khóa học cùng chủ đề</Text>
            <ScrollView horizontal={true}>
              {renderCoursesLikeCategory(
                courseContext.state.dataCourseDetail.coursesLikeCategory,
              )}
            </ScrollView>

            <Text style={styles.title}>Your Review</Text>
            <View style={styles.containerButtonSmall}>
              <Input
                style={styles.input}
                placeholder={'Comment'}
                onChangeText={(text) => setYourComment(text)}
              />
              <Rating
                imageSize={20}
                tintColor={colors.background}
                ratingCount={5}
                startingValue={props.rating}
                style={styles.rating}
                fractions={1}
                onFinishRating={ratingCompleted}
              />
              <FilledButton
                title={'REVIEW'}
                onPress={() => {
                  onPressReview(
                    authContext.state.token,
                    props.route.params.item.id,
                    yourComment,
                    yourRating,
                  );
                }}
                style={styles.loginButton}
              />
            </View>

            <ListComment data={courseContext.state.dataCourseDetail.ratings} />
          </>
        )}
      </ScrollView>
    </videoURLContext.Provider>
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
  input: {
    marginVertical: 8,
  },
  loginButton: {
    marginVertical: 32,
  },
});
