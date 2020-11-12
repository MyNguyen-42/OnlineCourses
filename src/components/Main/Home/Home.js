import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import ImageButton from '../../common/ImageButton';
import SectionCourses from './SectionCourses/SectionCourses';

const Home = (props) => {
  const onPressNewRelease = () => {
    console.log('object1');
  };

  return (
    <ScrollView>
      <ImageButton
        uri="http://wonderfulengineering.com/wp-content/uploads/2014/03/Engineering-backgrounds-14.jpg"
        style={styles.imageButton}
        title="NEW RELEASE"
        onPress={onPressNewRelease()}
      />
      <SectionCourses title="Continue learning" navigation={props.navigation} />
      <SectionCourses title="Path" navigation={props.navigation} />
      <SectionCourses title="Chanel" navigation={props.navigation} />
      <SectionCourses title="Bookmarks" navigation={props.navigation} />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
