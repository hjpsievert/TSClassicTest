import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ComposerScreen from './Screens/Composer';
import HomeScreen from './Screens/Home';
import { RootStackParamList } from './Types/StackTypes';

const RootStack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: 'Manage Compositions',
            headerTitle: "Search and edit compositions",
            headerStyle: { backgroundColor: '#405ce8' },
            headerTitleStyle: { fontWeight: 'normal' },
            headerTintColor: 'white',
            headerTitleAlign: 'center'
          })}
        />
        <RootStack.Screen
          name="Composers"
          component={ComposerScreen}
          options={({ navigation }) => ({
            title: 'My Home',
            headerTitle: "Manage Composers",
            headerStyle: { backgroundColor: '#405ce8' },
            headerTitleStyle: { fontWeight: 'normal' },
            headerTintColor: 'white',
            headerTitleAlign: 'center'
          })}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

