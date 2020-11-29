import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import SmallRightButton from '../../../../common/SmallRightButton';
import SectionPathsItem from '../SectionPathsItem/SectionPathsItem';
import {useTheme} from '@react-navigation/native';
import {ScreenKey} from '../../../../../global/Constants';
import {paths} from '../../../../../models/CourseModel';

const SectionPaths = (props) => {
  const {colors} = useTheme();

  /* const paths = props.data; */

  const onPressSectionItem = (item) => {
    props.navigation.navigate(ScreenKey.PathDetail, {item});
  };

  const renderListItem = (Paths) => {
    return Paths.map((id) => (
      <SectionPathsItem item={id} onPressSectionItem={onPressSectionItem} />
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={[styles.text, {color: colors.text}]}>{props.title}</Text>
        <SmallRightButton
          style={{color: colors.text}}
          text="See all"
          name="navigate-next"
          onPress={() => {
            props.navigation.navigate(ScreenKey.ListSectionPaths);
          }}
        />
      </View>
      <ScrollView horizontal={true}>{renderListItem(paths)}</ScrollView>
    </View>
  );
};

export default SectionPaths;

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  text: {
    fontSize: 20,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 5,
  },
});
