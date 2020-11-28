import React from 'react';
import {ScreenKey} from '../global/Constants';
import {createStackNavigator} from '@react-navigation/stack';
import Search from '../components/Main/Search/Search';
import PathsDetail from '../components/Main/Browse/Paths/PathsDetail/PathsDetail';
import AuthorDetail from '../components/Main/Browse/AuthorDetail/AuthorDetail';

const SearchStack = createStackNavigator();

const SearchStackScreens = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name={ScreenKey.Search} component={Search} />
      <SearchStack.Screen name={ScreenKey.PathDetail} component={PathsDetail} />
      <SearchStack.Screen
        name={ScreenKey.AuthorDetail}
        component={AuthorDetail}
      />
    </SearchStack.Navigator>
  );
};

export default SearchStackScreens;
