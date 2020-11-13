import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {Avatar} from 'react-native-elements';
import {FilledButton} from '../../../common/FilledButton';
import ListCourses from '../../../Courses/ListCourses/ListCourses';

const AuthorDetail = (props) => {
  console.log(props);
  let item = props.route.params.item;
  const {colors} = useTheme();
  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <Avatar
        rounded
        source={{
          uri:
            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        }}
        size={'large'}
      />
      <Text style={[styles.textName, {color: colors.text}]}> {item.name}</Text>
      <Text style={{color: colors.text}}> Pluralsight Author</Text>
      <FilledButton title="FOLLOW" />
      <Text style={{color: colors.text}}>
        Follow to be notified when new courses are published
      </Text>
      <Text style={{color: colors.text}}>Description</Text>
      <ListCourses />
    </View>
  );
};

export default AuthorDetail;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  textName: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
