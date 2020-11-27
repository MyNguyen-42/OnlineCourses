import React from 'react';
import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import {useTheme} from '@react-navigation/native';
import ListCoursesItem from '../../../../Courses/ListCoursesItem/ListCoursesItem';
import {ScreenKey} from '../../../../../global/Constants';

const PathsDetail = (props) => {
  let item = props.route.params.item;
  const {colors} = useTheme();
  const Courses = item.listCourses;

  const FlatListItemSeparator = () => {
    return <View style={styles.highlight} />;
  };

  const onPressListItem = (item) => {
    props.navigation.navigate(ScreenKey.CourseDetail, {item});
  };

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <View style={styles.imageTitle}>
        <Image
          style={styles.image}
          source={require('../../../../../../assets/reactnative.png')}
        />
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text
            style={
              styles.info
            }>{`${item.countCourses} . ${item.duration}`}</Text>
        </View>
      </View>
      <Text style={styles.description}>{item.description}</Text>
      <Text>Courses</Text>
      <FlatList
        horizontal={false}
        ItemSeparatorComponent={FlatListItemSeparator}
        data={Courses}
        renderItem={({item}) => (
          <ListCoursesItem
            item={item}
            navigation={props.navigation}
            onPressListItem={onPressListItem}
          />
        )}
      />
    </View>
  );
};

export default PathsDetail;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  imageTitle: {
    flexDirection: 'row',
  },
  image: {
    height: 100,
    width: 100,
  },
  title: {
    fontSize: 20,
    margin: 10,
  },
  info: {
    margin: 10,
  },
  description: {
    marginVertical: 10,
  },
  highlight: {
    height: 1,
    margin: 10,
    backgroundColor: 'grey',
  },
});
