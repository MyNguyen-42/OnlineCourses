import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ListCourse from '../../Courses/ListCourses/ListCourses';
import {ButtonGroup, SearchBar} from 'react-native-elements';
import {useTheme} from '@react-navigation/native';
import {ScreenKey} from '../../../global/Constants';
import {Header} from 'react-native-elements';

const Search = (props) => {
  const {colors} = useTheme();
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const updateSearch = (Search) => {
    setSearch(Search);
  };

  const updateIndex = (SelectedIndex) => {
    setSelectedIndex(SelectedIndex);
  };

  const clearTextSearch = () => {
    setSearch('');
  };

  var ViewResult = <View />;
  switch (selectedIndex) {
    case 0:
      ViewResult = (
        <View>
          <Text style={{color: colors.text}}> All</Text>
        </View>
      );
      break;
    case 1:
      ViewResult = (
        <View>
          <Text style={{color: colors.text}}> Courses</Text>
        </View>
      );
      break;
    case 2:
      ViewResult = (
        <View>
          <Text style={{color: colors.text}}> Path</Text>
        </View>
      );
      break;
    case 3:
      ViewResult = (
        <View>
          <Text style={{color: colors.text}}> Author</Text>
        </View>
      );
      break;

    default:
      break;
  }
  const buttons = ['All', 'Courses', 'Path', 'Author'];
  const onPress = () => {
    props.navigation.navigate(ScreenKey.SettingStackScreens);
  };
  return (
    <>
      <Header
        placement="left"
        centerComponent={{
          text: 'Search',
          style: {color: colors.text, fontSize: 20, fontWeight: 'bold'},
        }}
        rightComponent={{
          icon: 'home',
          color: colors.text,
          onPress: onPress,
        }}
        backgroundColor={colors.card}
        containerStyle={styles.containerStyle}
      />
      <View
        style={[
          styles.search,
          {borderColor: colors.border, backgroundColor: colors.card},
        ]}>
        <Ionicons
          name="md-search-outline"
          style={[styles.icon, {color: colors.text}]}
        />
        <TextInput
          style={[styles.textInput, {color: colors.text}]}
          placeholder="Search"
          onChangeText={(text) => {
            updateSearch(text);
          }}
          value={search}
        />
        {search ? (
          <Ionicons
            name="close-circle-outline"
            style={[styles.icon, {color: colors.text}]}
            onPress={clearTextSearch}
          />
        ) : null}
      </View>
      {/* <SearchBar
        placeholder="Type Here..."
        onChangeText={(text) => {
          updateSearch(text);
        }}
        value={search}
      /> */}
      <ButtonGroup
        onPress={updateIndex}
        selectedIndex={selectedIndex}
        buttons={buttons}
        containerStyle={{height: 30}}
        buttonStyle={{color: colors.text}}
        buttonContainerStyle={{backgroundColor: colors.background}}
        selectedButtonStyle={styles.selectedButtonStyle}
      />
      {ViewResult}
    </>
  );
};

export default Search;

const styles = StyleSheet.create({
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 15,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 15,
  },
  icon: {
    margin: 15,
    fontSize: 20,
  },
  textInput: {
    flex: 1,
  },
  selectedButtonStyle: {
    borderBottomWidth: 3,
  },
});
