import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {ScreenKey} from '../../../../../global/Constants';
import SectionAuthorsItem from '../SectionAuthorsItem/SectionAuthorsItem';

const SectionPaths = (props) => {
  const authors = props.data;

  const onPressSectionItem = (item) => {
    props.navigation.navigate(ScreenKey.AuthorDetail, {item});
  };

  const renderListItem = (Authors) => {
    return Authors.map((id) => (
      <SectionAuthorsItem
        item={id}
        navigation={props.navigation}
        onPressSectionItem={onPressSectionItem}
      />
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
      <ScrollView horizontal={true}>{renderListItem(authors)}</ScrollView>
    </View>
  );
};

export default SectionPaths;

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  text: {
    margin: 5,
    fontSize: 20,
  },
});
