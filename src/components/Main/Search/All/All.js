import React from 'react';
import {ScrollView} from 'react-native';
import Paths from '../Paths/Paths';
import Courses from '../Courses/Courses';
import Authors from '../Authors/Authors';

const All = (props) => {
  return (
    <ScrollView>
      <Courses
        courseIds={props.courseIds.slice(0, 4)}
        navigation={props.navigation}
        header="Courses"
      />
      <Paths
        pathIds={props.pathIds.slice(0, 4)}
        navigation={props.navigation}
        header="Paths"
      />
      <Authors
        authorIds={props.authorIds.slice(0, 4)}
        navigation={props.navigation}
        header="Authors"
      />
    </ScrollView>
  );
};

export default All;
