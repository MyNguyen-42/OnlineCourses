import React, {useState, useContext, useReducer} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ButtonGroup} from 'react-native-elements';
import {useTheme} from '@react-navigation/native';
import {ScreenKey} from '../../../global/Constants';
import {Header} from 'react-native-elements';
/* import {CoursesContext} from '../../../Provider/CoursesProvider'; */
import Courses from './Courses/Courses';
import Authors from './Authors/Authors';
import Paths from './Paths/Paths';
import All from './All/All';
import {authors, paths} from '../../../models/CourseModel';
import {SEARCH_COURSE_SUCCESSED} from '../../../action/CourseAction';
import {CourseContext} from '../../../Provider/CourseProvider';
import {AuthenticationContext} from '../../../Provider/AuthenticationProvider';

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

  const updateSearch = (Search) => {
    setSearch(Search);
  };

  const Search = (Keyword, token) => {
    CoursesContext.search(Keyword, token);

    /* setCourseIds([]);
    setPathIds([]);
    setAuthorIds([]);

    const lKeyword = Keyword.toLowerCase().trim();

    const resultCourseIds = [];

    const resultPathIds = [];

    const resultAuthorIds = [];

    const [state, dispatch] = useReducer(reducer, initialState);

    paths.forEach((value, key) => {
      if (value.title.toLowerCase().search(lKeyword) >= 0) {
        console.log('key', key);
        resultPathIds.push(paths[key]);
      }
    });

    authors.forEach((value, key) => {
      if (value.name.toLowerCase().search(lKeyword) >= 0) {
        console.log('key', key);
        resultAuthorIds.push(authors[key]);
      }
    });

    setCourseIds(resultCourseIds);
    setPathIds(resultPathIds);
    setAuthorIds(resultAuthorIds); */
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

      default:
        break;
    }
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
            if (text === '') {
              setSearching(false);
            } else {
              setSearching(true);
              Search(text);
            }
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
          Search(text);
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
