import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabParamList } from '../Types/TabTypes';
import FindScreen from '../Screens/FindScreen';
import EditScreen from '../Screens/EditScreen';

const BottomTab = createBottomTabNavigator<TabParamList>();

function ComposerScreen() {
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen
                name="Find"
                component={FindScreen}
                options={({ navigation }) => ({
                    title: 'Find',
                    headerTitle: "Find Composers",
                    headerStyle: { backgroundColor: '#405ce8' },
                    headerTitleStyle: { fontWeight: 'normal' },
                    headerTintColor: 'white',
                    headerTitleAlign: 'center'
                })}
            />
            <BottomTab.Screen
                name="Edit"
                component={EditScreen}
                options={({ navigation }) => ({
                    title: 'Edit',
                    headerTitle: "Edit Composers",
                    headerStyle: { backgroundColor: '#405ce8' },
                    headerTitleStyle: { fontWeight: 'normal' },
                    headerTintColor: 'white',
                    headerTitleAlign: 'center'
                })}
            />
        </BottomTab.Navigator>
    );
};

export default ComposerScreen;