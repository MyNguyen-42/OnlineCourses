import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {ScreenKey} from './src/global/Constants';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {AuthenticationProvider} from './src/Provider/AuthenticationProvider';
import Login from './src/components/Authentication/Login/Login';
import SplashScreen from './src/components/SplashScreen/SplashScreen';
import Register from './src/components/Authentication/Register/Register';
import VerifyPassword from './src/components/Authentication/VerifyPassword/VerifyPassword';
import Browse from './src/components/Main/Browse/Browse';
import ForgetPassword from './src/components/Authentication/ForgetPassword/ForgetPassword';
import ChangePassword from './src/components/Authentication/ChangePassword/ChangePassword';
import Profile from './src/components/AccountManagement/Profile/Profile';
import EditProfile from './src/components/AccountManagement/EditProfile/EditProfile';
import Download from './src/components/Main/Download/Download';
import Search from './src/components/Main/Search/Search';
import CourseDetail from './src/components/CourseDetail/CourseDetail';
import Home from './src/components/Main/Home/Home';
import ListCourses from './src/components/Courses/ListCourses/ListCourses';
import {FilledButton} from './src/components/common/FilledButton';
import {TextButton} from './src/components/common/TextButton';

const MainNavigationStack = createStackNavigator();
const Stack = createStackNavigator();
const HomeStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={ScreenKey.Home}
      tabBarOptions={{
        activeTintColor: '#8e44ad',
      }}>
      <Tab.Screen
        name={ScreenKey.Home}
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={ScreenKey.Downloads}
        component={Download}
        options={{
          tabBarLabel: 'Downloads',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="download" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={ScreenKey.Browse}
        component={Browse}
        options={{
          tabBarLabel: 'Browse',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="view-grid"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ScreenKey.Search}
        component={ListCoursesStack}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="search-web"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ScreenKey.Profile}
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <MainNavigationStack.Navigator>
      <MainNavigationStack.Screen
        name={ScreenKey.SplashScreen}
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <MainNavigationStack.Screen
        name={ScreenKey.AuthenticationStackScreen}
        component={AuthenticationStackScreen}
        options={{headerShown: false}}
      />
      <MainNavigationStack.Screen
        name={ScreenKey.MainTab}
        component={MainTabNavigation}
        options={{headerShown: false}}
      />
    </MainNavigationStack.Navigator>
  );
};

const ListCoursesStack = () => {
  return (
    <Stack.Navigator initialRouteName={ScreenKey.ListCourses}>
      <Stack.Screen
        name={ScreenKey.ListCourses}
        component={ListCourses}
        options={{title: 'List Courses'}}
      />
      <Stack.Screen
        name={ScreenKey.CourseDetail}
        component={CourseDetail}
        options={({route}) => ({title: route.params.item.title})}
      />
    </Stack.Navigator>
  );
};

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name={ScreenKey.Home}
        component={Home}
        options={{
          headerRight: () => (
            <TextButton
              onPress={() => alert('This is a button!')}
              title="Setting"
              color="#fff"
            />
          ),
          headerLeft: () => (
            <FilledButton
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#fff"
            />
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};

const AuthenticationStack = createStackNavigator();

const AuthenticationStackScreen = () => {
  return (
    <AuthenticationStack.Navigator initialRouteName={ScreenKey.LoginScreen}>
      <AuthenticationStack.Screen
        name={ScreenKey.LoginScreen}
        component={Login}
        options={{headerShown: false}}
      />
      <AuthenticationStack.Screen
        name={ScreenKey.RegisterScreen}
        component={Register}
        options={{headerShown: false}}
      />
      <AuthenticationStack.Screen
        name={ScreenKey.ForgetPasswordScreen}
        component={ForgetPassword}
        options={{headerShown: false}}
      />
    </AuthenticationStack.Navigator>
  );
};

/* const ListCoursesScreen = () => {
  return (
    <Stack.Screen
      name={ScreenKey.ListCourses}
      component={ListCourses}
      options={{title: 'List Courses'}}
    />
  );
};
 */
/* const homeStack = () => {
  return (
    <HomeStack.Navigator>
      <ListCoursesScreen />
    </HomeStack.Navigator>
  );
}; */

export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

export const ThemeContext = React.createContext();

export default function App() {
  const [theme, setTheme] = useState(themes.light);
  return (
    <AuthenticationProvider>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <View style={styles.container}>
          <NavigationContainer>
            <MainNavigation />
          </NavigationContainer>
        </View>
      </ThemeContext.Provider>
    </AuthenticationProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
