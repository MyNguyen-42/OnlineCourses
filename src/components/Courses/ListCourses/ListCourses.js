import React, {useEffect, useState, useContext} from 'react';
import {StyleSheet, View, FlatList, ActivityIndicator} from 'react-native';
import {ScreenKey} from '../../../global/Constants';
import ListCoursesItem from '../ListCoursesItem/ListCoursesItem';
import {CourseContext} from '../../../Provider/CourseProvider';

const ListCourses = (props) => {
  /* let Courses = props.route.params.Courses; */
  const CoursesContext = useContext(CourseContext);
  console.log('props List course: ', props.route.params.key);
  const typeCourse = props.route.params.key;
  const data = props.route.params.data;

  const [dataListCourse, setDataListCourse] = useState(null);

  useEffect(() => {
    if (typeCourse === 'Top sell') {
      console.log('Top sell');
      CoursesContext.loadListCourseSell();
      /*  setDataListCourse(CourseContext.state.data); */
    } else if (typeCourse === 'Top new') {
      console.log('top new');
      CoursesContext.loadListCourseNew();
      /* setDataListCourse(CourseContext.state.dataCoursesNew); */
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const FlatListItemSeparator = () => {
    return <View style={styles.highlight} />;
  };

  const onPressListItem = (item) => {
    props.navigation.navigate(ScreenKey.CourseDetail, {item});
  };

  return (
    <View>
      {CoursesContext.state.isLoading ? (
        <ActivityIndicator size="large" color="#8e44ad" />
      ) : (
        <FlatList
          horizontal={false}
          ItemSeparatorComponent={FlatListItemSeparator}
          /* data={CoursesContext.state.data} */
          /* data={dataListCourse} */
          data={data}
          renderItem={({item}) => (
            <ListCoursesItem
              item={item}
              navigation={props.navigation}
              onPressListItem={onPressListItem}
            />
          )}
        />
      )}
    </View>
  );
};

export default ListCourses;

const styles = StyleSheet.create({
  highlight: {
    height: 1,
    margin: 10,
    backgroundColor: 'grey',
  },
});
