import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import {ScreenKey} from './src/global/Constants';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthenticationProvider} from './src/Provider/AuthenticationProvider';
import {CoursesProvider} from './src/Provider/CoursesProvider';
import {FavoriteProvider} from './src/Provider/FavoriteProvider';
import {AccountProvider} from './src/Provider/AccountProvider';
import SplashScreen from './src/components/SplashScreen/SplashScreen';
import MainTabNavigation from './src/screens/MainTabNavigation';
import AuthenticationStackScreens from './src/screens/AuthenticationStackScreens';

const MainNavigationStack = createStackNavigator();

const MainNavigation = () => {
  return (
    <MainNavigationStack.Navigator>
      <MainNavigationStack.Screen
        name={ScreenKey.SplashScreen}
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <MainNavigationStack.Screen
        name={ScreenKey.AuthenticationStackScreens}
        component={AuthenticationStackScreens}
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
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  /* const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    },
  ); */

  return (
    <AuthenticationProvider>
      <AccountProvider>
        <CoursesProvider>
          <FavoriteProvider>
            <ThemeContext.Provider value={{isDarkTheme, setIsDarkTheme}}>
              <View style={styles.container}>
                <NavigationContainer
                  theme={isDarkTheme ? DarkTheme : DefaultTheme}>
                  <MainNavigation />
                </NavigationContainer>
              </View>
            </ThemeContext.Provider>
          </FavoriteProvider>
        </CoursesProvider>
      </AccountProvider>
    </AuthenticationProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
