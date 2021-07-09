import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ComposerScreen from './Screens/ComposerScreen';
import * as stackTypes from './Types/StackTypes';

const RootStack = createStackNavigator<stackTypes.RootStackParamList>();

const HomeScreen = ({ navigation }: stackTypes.Props) => {
  return (
    <View style={styles.container}>
      <Button
        title="Get Composer List"
        onPress={() =>
          navigation.navigate('Composers', { searchString: '' })
        }
      />
      <Text>Ready to Revive Classical Music in style and with navigation!</Text>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <RootStack.Screen
          name="Composers"
          component={ComposerScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
