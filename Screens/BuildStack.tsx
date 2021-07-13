import { ComposerTabProps } from '../Types/ComposerTabTypes';
import React from 'react';
import { BuildStackParamList } from '../Types/ComposerTabTypes';
import { createStackNavigator } from '@react-navigation/stack';
import BuildScreen from '../Screens/BuildScreen';
import EditScreen from '../Screens/EditScreen';
import AddScreen from '../Screens/AddScreen';

const BuildStack = createStackNavigator<BuildStackParamList>();


const Build = ({ route, navigation }: ComposerTabProps) => {
    return (
        <BuildStack.Navigator>
            <BuildStack.Screen
                name="Build"
                component={BuildScreen}
                options={({ navigation }) => ({
                    title: 'Build Composer Database',
                    headerTitle: "Add or Edit Composers",
                    headerStyle: { backgroundColor: '#405ce8' },
                    headerTitleStyle: { fontWeight: 'normal' },
                    headerTintColor: 'white',
                    headerTitleAlign: 'center',
                })}
            />
            <BuildStack.Screen
                name="EditComposer"
                component={EditScreen}
                options={({ navigation }) => ({
                    title: 'Build Composer Database',
                    headerTitle: "Add or Edit Composers",
                    headerStyle: { backgroundColor: '#405ce8' },
                    headerTitleStyle: { fontWeight: 'normal' },
                    headerTintColor: 'white',
                    headerTitleAlign: 'center'
                })}
            />

            <BuildStack.Screen
                name="AddComposer"
                component={AddScreen}
                options={({ navigation }) => ({
                    title: 'Build Composer Database',
                    headerTitle: "Add or Edit Composers",
                    headerStyle: { backgroundColor: '#405ce8' },
                    headerTitleStyle: { fontWeight: 'normal' },
                    headerTintColor: 'white',
                    headerTitleAlign: 'center'
                })}
            />
        </BuildStack.Navigator>
    );
}

export default Build