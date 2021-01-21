import React from 'react';
import {FlatList, StyleSheet, Text, View, Image} from 'react-native';
import ListLessonItem from '../ListLessonsItem/ListLessonItem';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from '@react-navigation/native';

const Main = (props) => {
  const {colors} = useTheme();
  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerImageTitle}>
          <Image
            style={styles.image}
            source={require('../../../../assets/React-Native.png')}
          />
          <View>
            <Text style={{color: colors.text}}>{props.item.name}</Text>
            <Text style={{color: colors.text}}>{props.item.sumHours}</Text>
          </View>
        </View>
        <MaterialCommunityIcons
          name="dots-vertical"
          style={[styles.icon, {color: colors.text}]}
        />
      </View>
      <FlatList
        data={props.item.lesson}
        renderItem={({item}) => (
          <View>
            <ListLessonItem item={item} navigation={props.navigation} />
          </View>
        )}
      />
    </>
  );
};

const FlatListItemSeparator = () => {
  return <View style={styles.highlight} />;
};

const ListLesson = (props) => {
  console.log('List Lesson: ', props.data);
  return (
    <View>
      <FlatList
        ItemSeparatorComponent={FlatListItemSeparator}
        data={props.data}
        renderItem={({item}) => (
          <View>
            <Main item={item} />
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
