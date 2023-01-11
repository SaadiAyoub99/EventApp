import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import OpenedScreen from './src/screens/OpenedScreen';
import HomeScreen from './src/screens/HomeScreen';
import MainNavigator from './src/navigations/MainNavigator';

const App = () => {
  useEffect(() => {
    SplashScreen.hide(); //hides the splash screen on app load.
  }, []);

  return <MainNavigator/>
};

export default App;
