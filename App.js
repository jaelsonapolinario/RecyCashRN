/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {
  StyleSheet,
  useColorScheme,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/pages/Login'
import NewAccount from './src/pages/NewAccount';
import Tabs from './src/components/Tabs';

const Stack = createNativeStackNavigator();

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return <>
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Login'
            component={Login}
            options={{headerShown: false}} />
          <Stack.Screen
            name='Tabs'
            component={Tabs}
            options={{headerShown: false}} />
          <Stack.Screen
            name='NewAccount'
            component={NewAccount}
            options={{title: 'Nova conta'}} />
        </Stack.Navigator>
      </NavigationContainer>
  </>
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#F5F2F2',
    flex: 1
  }
});

