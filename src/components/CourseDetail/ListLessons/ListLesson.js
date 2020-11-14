import React from 'react';
import {FlatList, StyleSheet, Text, View, Image} from 'react-native';
import ListLessonItem from '../ListLessonsItem/ListLessonItem';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from '@react-navigation/native';

const Main = (props) => {
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      <View style={styles.containerImageTitle}>
        <Image
          style={styles.image}
          source={require('../../../../assets/React-Native.png')}
        />
        <View>
          <Text style={{color: colors.text}}>{props.item.name}</Text>
          <Text style={{color: colors.text}}>{props.item.time}</Text>
        </View>
      </View>
      <MaterialCommunityIcons
        name="dots-vertical"
        style={[styles.icon, {color: colors.text}]}
      />
    </View>
  );
};

const FlatListItemSeparator = () => {
  return <View style={styles.highlight} />;
};

const ListLesson = (props) => {
  const Lesson = [
    {name: 'Course Overview', time: '2:04'},
    {name: 'Getting Started with Angular', time: '38:45'},
  ];
  return (
    <View>
      <FlatList
        ItemSeparatorComponent={FlatListItemSeparator}
        data={Lesson}
        renderItem={({item}) => (
          <View>
            <Main item={item} />
            <ListLessonItem item={item} navigation={props.navigation} />
          </View>
        )}
      />
    </View>
  );
};

export default ListLesson;

const styles = StyleSheet.create({
  image: {
    height: 40,
    width: 60,
    marginRight: 10,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  containerImageTitle: {
    flexDirection: 'row',
  },
  icon: {
    fontSize: 20,
  },
  highlight: {
    height: 1,
    margin: 10,
    backgroundColor: 'grey',
  },
});
