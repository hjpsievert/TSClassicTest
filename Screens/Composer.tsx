import React from 'react';
import { View, Platform } from 'react-native';
import { Icon } from 'react-native-elements';
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
                    headerTitleAlign: 'center',
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <View style={{ width: 24, height: 24, margin: 5 }}>
                                <Icon
                                    name={'person-search'}
                                    type={'material'}
                                    size={Platform.OS === 'ios' ? size + 4 : size}
                                    color={color}
                                />
                            </View>
                        )
                    }
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
                    headerTitleAlign: 'center',
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <View style={{ width: 24, height: 24, margin: 5 }}>
                                <Icon
                                    name={'account-edit'}
                                    type={'material-community'}
                                    size={Platform.OS === 'ios' ? size + 4 : size}
                                    color={color}
                                />
                            </View>
                        )
                    }
                })}
            />
        </BottomTab.Navigator>
    );
};

export default ComposerScreen;