import React from 'react';
import {ScreenKey} from '../global/Constants';
import {createStackNavigator} from '@react-navigation/stack';
import Browse from '../components/Main/Browse/Browse';
import ListCoursesStack from './ListCoursesStack';
import AuthorDetail from '../components/Main/Browse/AuthorDetail/AuthorDetail';
import ListSectionPaths from '../components/Main/Browse/Paths/ListSectionPaths/ListSectionPaths';
import PathsDetail from '../components/Main/Browse/Paths/PathsDetail/PathsDetail';

const BrowseStack = createStackNavigator();

const BrowseStackScreen = () => {
  return (
    <BrowseStack.Navigator initialRouteName={ScreenKey.Browse}>
      <BrowseStack.Screen
        name={ScreenKey.Browse}
        component={Browse}
        options={{headerShown: false}}
      />
      <BrowseStack.Screen
        name={ScreenKey.ListCoursesStack}
        component={ListCoursesStack}
      />
      <BrowseStack.Screen
        name={ScreenKey.AuthorDetail}
        component={AuthorDetail}
      />
      <BrowseStack.Screen
        name={ScreenKey.ListSectionPaths}
        component={ListSectionPaths}
      />
      <BrowseStack.Screen name={ScreenKey.PathDetail} component={PathsDetail} />
    </BrowseStack.Navigator>
  );
};

export default BrowseStackScreen;
