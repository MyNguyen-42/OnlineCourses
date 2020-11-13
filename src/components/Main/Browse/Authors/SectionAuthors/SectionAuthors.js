import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {ScreenKey} from '../../../../../global/Constants';
import SectionAuthorsItem from '../SectionAuthorsItem/SectionAuthorsItem';

const SectionPaths = (props) => {
  const authors = [
    {
      id: 1,
      name: 'Dzoi',
    },
    {
      id: 2,
      name: 'Jhon',
    },
    {
      id: 3,
      name: 'Adele',
    },
    {
      id: 4,
      name: 'Lisa',
    },
    {
      id: 5,
      name: 'Mark',
    },
  ];

  const onPressSectionItem = (item) => {
    props.navigation.navigate(ScreenKey.AuthorDetail, {item});
  };

  const renderListItem = (authors) => {
    return authors.map((id) => (
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
