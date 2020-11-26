import React, {useState, useContext} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import CircleButton from '../common/CircleButton';
import {FilledButton} from '../common/FilledButton';
import Tag from '../common/Tag';
import {useTheme} from '@react-navigation/native';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import {ButtonGroup} from 'react-native-elements';
import ListLesson from './ListLessons/ListLesson';
import {FavoriteContext} from '../../Provider/FavoriteProvider';
const Description =
  'Everything is working, but whenever I put the focus on the TextFile to type something, the TabBar is changed from tab C to tab A.Very annoying. This should not happen. The TabBarView remains unchanged';
const CourseDetail = (props) => {
  const {colors} = useTheme();
  const favoriteContext = useContext(FavoriteContext);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [favorite, setFavorite] = useState('Download');
  const buttons = ['Contents', 'Transcript'];

  const updateIndex = (SelectedIndex) => {
    setSelectedIndex(SelectedIndex);
  };

  let item = props.route.params.item;
  /* console.log(item.content); */
  return (
    <ScrollView>
      <VideoPlayer />
      <Text style={[styles.title, {color: colors.text}]}>{item.title}</Text>
      <Tag
        title={item.author}
        style={styles.author}
        onPres={() => {
          /* props.navigation.navigate(ScreenKey.AuthorDetail); */
          console.log('object');
        }}
      />
      <View style={styles.containerLevelRelease}>
        <Text style={{color: colors.text}}>{item.level}</Text>
        <Text style={{color: colors.text}}> {item.released}</Text>
      </View>
      <View style={styles.containerButton}>
        <CircleButton title="Bookmarked" name="bookmark-multiple" />
        <CircleButton title="Add to channel" name="text-box-plus-outline" />
        <CircleButton
          title={
            favoriteContext.favoriteCourses.has(item)
              ? 'Downloaded'
              : 'Download'
          }
          name="download-circle"
          onPress={() => {
            if (favoriteContext.favoriteCourses.has(item)) {
              setFavorite('Download');
              favoriteContext.removeFavoriteCourse(item);
            } else {
              setFavorite('Downloaded');
              favoriteContext.addFavoriteCourse(item);
            }
          }}
        />
      </View>
      <Text style={[styles.description, {color: colors.text}]}>
        {Description}
      </Text>
      <View style={styles.containerButtonSmall}>
        <FilledButton
          name="file-multiple-outline"
          title={'Related paths & courses'}
          style={styles.buttonSmall}
          onPress={() => {}}
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
        <Text style={{color: colors.text}}>
          Adipisicing ad ad qui incididunt reprehenderit mollit sint do
          consectetur anim consequat labore. Amet adipisicing ullamco enim aute.
          Ad id quis est dolor. Ex excepteur dolor labore fugiat culpa officia
          veniam labore labore ad. Ex non enim incididunt veniam. Reprehenderit
          exercitation sunt ipsum voluptate non cillum ipsum fugiat incididunt
          dolor velit enim. Labore Lorem exercitation minim irure ea officia
          duis ipsum.
        </Text>
      ) : (
        <ListLesson data={item.content} />
      )}
    </ScrollView>
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
});
