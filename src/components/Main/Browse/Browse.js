import React from 'react';
import {StyleSheet, ScrollView, Text} from 'react-native';
import {View} from 'react-native-animatable';
import ImageButton from '../../common/ImageButton';
import Tag from '../../common/Tag';
import SectionPaths from './Paths/SectionPaths/SectionPaths';
import SectionAuthors from './Authors/SectionAuthors/SectionAuthors';

const Home = () => {
  const onPressNewRelease = () => {
    console.log('object1');
  };

  return (
    <ScrollView>
      <ImageButton
        uri="https://wallpapertag.com/wallpaper/full/2/c/7/463317-cool-techno-backgrounds-1920x1200-for-lockscreen.jpg"
        title="NEW RELEASE"
        onPress={onPressNewRelease()}
      />
      <ImageButton
        uri="https://cdn.guidingtech.com/imager/assets/2020/04/787146/Cool-Backgrounds-for-Zoom-Meetings-1_4d470f76dc99e18ad75087b1b8410ea9.jpg?1585326792"
        title="RECOMMENDED FOR YOU"
        onPress={() => {}}
      />
      <ScrollView horizontal={true}>
        <View style={styles.grid}>
          <ImageButton
            uri="http://wonderfulengineering.com/wp-content/uploads/2014/03/Engineering-backgrounds-14.jpg"
            style={styles.imageButton}
            title="NEW RELEASE"
            onPress={onPressNewRelease()}
          />
          <ImageButton
            uri="http://www.hdwallpaperspulse.com/wp-content/uploads/2018/03/13/colorful-hd-backgrounds.jpg"
            style={styles.imageButton}
            title="RECOMMENDED FOR YOU"
            onPress={() => {}}
          />
        </View>
        <View style={styles.grid}>
          <ImageButton
            uri="http://wonderfulengineering.com/wp-content/uploads/2014/03/Engineering-backgrounds-14.jpg"
            style={styles.imageButton}
            title="NEW RELEASE"
            onPress={onPressNewRelease()}
          />
          <ImageButton
            uri="http://www.hdwallpaperspulse.com/wp-content/uploads/2018/03/13/colorful-hd-backgrounds.jpg"
            style={styles.imageButton}
            title="RECOMMENDED FOR YOU"
            onPress={() => {}}
          />
        </View>
        <View style={styles.grid}>
          <ImageButton
            uri="http://wonderfulengineering.com/wp-content/uploads/2014/03/Engineering-backgrounds-14.jpg"
            style={styles.imageButton}
            title="NEW RELEASE"
            onPress={onPressNewRelease()}
          />
          <ImageButton
            uri="http://www.hdwallpaperspulse.com/wp-content/uploads/2018/03/13/colorful-hd-backgrounds.jpg"
            style={styles.imageButton}
            title="RECOMMENDED FOR YOU"
            onPress={() => {}}
          />
        </View>
      </ScrollView>
      <Text style={styles.label}> Popular Skills</Text>
      <ScrollView horizontal={true}>
        <Tag title="JavaScripts" onPress={() => {}} />
        <Tag title="Angular" onPress={() => {}} />
        <Tag title="C#" onPress={() => {}} />
        <Tag title="Java" onPress={() => {}} />
        <Tag title="Data Analysis" onPress={() => {}} />
      </ScrollView>
      <SectionPaths title="Paths" />
      <SectionAuthors title="Top authors" />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  grid: {
    width: 200,
  },
  imageButton: {
    height: 80,
  },
  label: {
    fontSize: 20,
    marginVertical: 15,
  },
});
