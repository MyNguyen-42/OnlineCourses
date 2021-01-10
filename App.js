import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import {ScreenKey} from './src/global/Constants';
import {createStackNavigator} from '@react-navigation/stack';
import {
  AuthenticationProvider,
  AuthenticationContext,
} from './src/Provider/AuthenticationProvider';
import {AccountProvider} from './src/Provider/AccountProvider';
import {CourseProvider} from './src/Provider/CourseProvider';
import SplashScreen from './src/components/SplashScreen/SplashScreen';
import MainTabNavigation from './src/screens/MainTabNavigation';
import AuthenticationStackScreens from './src/screens/AuthenticationStackScreens';
import {LanguageProvider} from './src/Provider/LanguageProvider';

const MainNavigationStack = createStackNavigator();

const MainNavigation = () => {
  const authContext = useContext(AuthenticationContext);
  return (
    <MainNavigationStack.Navigator>
      {authContext.state.isAuthenticated ? (
        <>
          <MainNavigationStack.Screen
            name={ScreenKey.MainTab}
            component={MainTabNavigation}
            options={{headerShown: false}}
          />
          <MainNavigationStack.Screen
            name={ScreenKey.AuthenticationStackScreens}
            component={AuthenticationStackScreens}
            options={{headerShown: false}}
          />
        </>
      ) : (
        <>
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
        </>
      )}
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

  return (
    <AuthenticationProvider>
      <AccountProvider>
        <CourseProvider>
          <LanguageProvider>
            <ThemeContext.Provider value={{isDarkTheme, setIsDarkTheme}}>
              <View style={styles.container}>
                <NavigationContainer
                  theme={isDarkTheme ? DarkTheme : DefaultTheme}>
                  <MainNavigation />
                </NavigationContainer>
              </View>
            </ThemeContext.Provider>
          </LanguageProvider>
        </CourseProvider>
      </AccountProvider>
    </AuthenticationProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
