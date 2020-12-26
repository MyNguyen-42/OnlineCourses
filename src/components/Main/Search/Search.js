import React, {useState, useContext, useReducer} from 'react';
import {StyleSheet, View, TextInput, Text, Button} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ButtonGroup, SearchBar} from 'react-native-elements';
import {useTheme} from '@react-navigation/native';
import {ScreenKey} from '../../../global/Constants';
import {Header} from 'react-native-elements';
import Courses from './Courses/Courses';
import Authors from './Authors/Authors';
import Paths from './Paths/Paths';
import All from './All/All';
import {CourseContext} from '../../../Provider/CourseProvider';
import {AuthenticationContext} from '../../../Provider/AuthenticationProvider';
import {ActivityIndicator} from 'react-native';

const Search = (props) => {
  const {colors} = useTheme();
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const CoursesContext = useContext(CourseContext);
  const authContext = useContext(AuthenticationContext);

  const [courseIds, setCourseIds] = useState([]);

  const [pathIds, setPathIds] = useState([]);

  const [authorIds, setAuthorIds] = useState([]);

  const [searching, setSearching] = useState(false);
  const [textSearch, setTextSerch] = useState(null);

  const updateSearch = (Search) => {
    setSearch(Search);
  };

  const onTextChangeSearch = (Keyword, token) => {
    console.log('Keyword: ', Keyword);
    console.log('Token: ', token);
    CoursesContext.search(Keyword, token);

    if (CoursesContext.state.isLoadingSearch) {
    } else {
      setCourseIds(CoursesContext.state.searchResult.courses.data);
      /* setPathIds(CoursesContext.state.searchResult.courses.data); */
      setAuthorIds(CoursesContext.state.searchResult.instructors.data);
    }
  };

  const updateIndex = (SelectedIndex) => {
    setSelectedIndex(SelectedIndex);
  };

  const clearTextSearch = () => {
    setSearch('');
  };

  var ViewResult = <View />;
  if (searching === true) {
    switch (selectedIndex) {
      case 0:
        ViewResult = (
          <All
            courseIds={courseIds}
            pathIds={pathIds}
            authorIds={authorIds}
            navigation={props.navigation}
          />
        );
        break;
      case 1:
        ViewResult = (
          <Courses courseIds={courseIds} navigation={props.navigation} />
        );
        break;
      case 2:
        ViewResult = <Paths pathIds={pathIds} navigation={props.navigation} />;
        break;
      case 3:
        ViewResult = (
          <Authors authorIds={authorIds} navigation={props.navigation} />
        );
        break;
      case 4:
        /* CoursesContext.getSearchHistory(authContext.state.token);
        console.log(CoursesContext.searchHistories);
        ViewResult = <Text>{CoursesContext.searchHistories}</Text>; */
        break;

      default:
        break;
    }
  } else {
    /* CoursesContext.getSearchHistory(authContext.state.token);
    console.log(CoursesContext.searchHistories);
    ViewResult = <Text>{CoursesContext.searchHistories}</Text>; */
  }
  const buttons = ['All', 'Courses', 'Path', 'Author', 'History'];
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
      {/* <View
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
            if (text === '' || text === null) {
              setSearching(false);
            } else {
              setSearching(true);
              onTextChangeSearch(text, authContext.state.token);
            }
          }}
          value={textSearch}
        />
        {textSearch ? (
          <Ionicons
            name="close-circle-outline"
            style={[styles.icon, {color: colors.text}]}
            onPress={clearTextSearch}
          />
        ) : null}
      </View> */}
      <SearchBar
        placeholder="Type Here..."
        onChangeText={(text) => {
          if (text === '' || text === null) {
            setSearching(false);
          } else {
            setSearching(true);
            onTextChangeSearch(text, authContext.state.token);
          }
        }}
        value={textSearch}
      />
      <Button title="H" />
      <ButtonGroup
        onPress={updateIndex}
        selectedIndex={selectedIndex}
        buttons={buttons}
        containerStyle={{height: 30}}
        buttonStyle={{color: colors.text}}
        buttonContainerStyle={{backgroundColor: colors.background}}
        selectedButtonStyle={styles.selectedButtonStyle}
      />
      {CoursesContext.state.isLoadingSearch ? (
        <ActivityIndicator size="large" color="#8e44ad" />
      ) : (
        ViewResult
      )}
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
