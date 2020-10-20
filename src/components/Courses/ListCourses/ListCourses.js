import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  SectionList,
} from 'react-native';
import ListCoursesItem from '../ListCoursesItem/ListCoursesItem';

const ListCourses = () => {
  const courses = [
    {
      title: 'mobile',
      data: [
        {
          id: 1,
          title: 'React Native',
          author: 'Hai Pham',
          level: 'Advance',
          released: 'May 6, 2020',
          duration: '30 hours',
        },
        {
          id: 2,
          title: 'ios',
          author: 'Huy Nguyen',
          level: 'Beginner',
          released: 'May 6, 2020',
          duration: '25 hours',
        },
        {
          id: 3,
          title: 'ios',
          author: 'Huy Nguyen',
          level: 'Beginner',
          released: 'May 6, 2020',
          duration: '25 hours',
        },
      ],
    },
    {
      title: 'web',
      data: [
        {
          id: 1,
          title: 'Reactjs',
          author: 'Hai Pham',
          level: 'Advance',
          released: 'May 6, 2020',
          duration: '30 hours',
        },
        {
          id: 2,
          title: 'ASP.NET',
          author: 'Huy Nguyen',
          level: 'Beginner',
          released: 'May 6, 2020',
          duration: '25 hours',
        },
        {
          id: 3,
          title: 'ios',
          author: 'Huy Nguyen',
          level: 'Beginner',
          released: 'May 6, 2020',
          duration: '25 hours',
        },
        {
          id: 4,
          title: 'ios',
          author: 'Huy Nguyen',
          level: 'Beginner',
          released: 'May 6, 2020',
          duration: '25 hours',
        },
        {
          id: 5,
          title: 'ios',
          author: 'Huy Nguyen',
          level: 'Beginner',
          released: 'May 6, 2020',
          duration: '25 hours',
        },
      ],
    },
  ];

  const searchView = () => {
    return (
      <View style={{flexDirection: 'row'}}>
        <TextInput style={{flex: 1}} placeholder="ahihi" />
        <Button
          onPress={() => {
            console.log('Search');
          }}
          title="Search"
          style={{width: 60, heigh: 40}}
        />
      </View>
    );
  };

  return (
    <View>
      {/* <FlatList
        data={courses}
        renderItem={({item}) => <ListCoursesItem item={item} />}
        ListHeaderComponent={() => searchView()}
      /> */}
      <SectionList
        sections={courses}
        renderItem={({item}) => <ListCoursesItem item={item} />}
        renderSectionHeader={({section: {title}}) => (
          <View style={{backgroundColor: 'white'}}>
            <Text>{title}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ListCourses;

const styles = StyleSheet.create({});
