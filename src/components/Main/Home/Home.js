import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import ImageButton from '../../common/ImageButton';
import SectionCourses from './SectionCourses/SectionCourses';

const Home = () => {
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
      <SectionCourses title="Continue learning" />
      <SectionCourses title="Path" />
      <SectionCourses title="Chanel" />
      <SectionCourses title="Bookmarks" />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
