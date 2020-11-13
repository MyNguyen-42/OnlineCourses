import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import CircleButton from '../common/CircleButton';
import {FilledButton} from '../common/FilledButton';
import Tag from '../common/Tag';
import ListCourses from '../Courses/ListCourses/ListCourses';
import {useTheme} from '@react-navigation/native';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import {ButtonGroup} from 'react-native-elements';
const CourseDetail = (props) => {
  const {colors} = useTheme();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const buttons = ['Contents', 'Transcript'];

  const updateIndex = (SelectedIndex) => {
    setSelectedIndex(SelectedIndex);
  };

  let item = props.route.params.item;
  return (
    <ScrollView>
      <VideoPlayer />
      <Text style={[styles.title, {color: colors.text}]}>
        React: The Big Picture
      </Text>
      <Tag title={item.author} style={styles.author} />
      <View style={styles.containerLevelRelease}>
        <Text style={{color: colors.text}}>{item.level}</Text>
        <Text style={{color: colors.text}}> {item.released}</Text>
      </View>
      <View style={styles.containerButton}>
        <CircleButton title="Bookmarked" name="bookmark-multiple" />
        <CircleButton title="Add to channel" name="text-box-plus-outline" />
        <CircleButton title="Downloaded" name="download-circle" />
      </View>
      <Text style={[styles.description, {color: colors.text}]}>
        Description
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
      {selectedIndex ? <Text>Transcript</Text> : <Text>Contents</Text>}
      <ListCourses navigation={props.navigation} />
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
