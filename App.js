import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { styles } from './styles.js';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MenuDrawer from './navigation/drawerNavigation.js';
import HomeScreen from './screens/Home.js';

export default class App extends React.Component {
  render () {
    return (
      <NavigationContainer>
        <MenuDrawer/>
      </NavigationContainer>
    );
  };
  
}
