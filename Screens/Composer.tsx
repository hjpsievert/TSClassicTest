import React from 'react';
import { View, Platform } from 'react-native';
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ComposerTabParamList } from '../Types/ComposerTabTypes';
import FindScreen from '../Screens/FindScreen';
import Build from '../Screens/BuildStack';

const ComposerBottomTab = createBottomTabNavigator<ComposerTabParamList>();

function ComposerScreen() {
    return (
        <ComposerBottomTab.Navigator>
            <ComposerBottomTab.Screen
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
            <ComposerBottomTab.Screen
                name="Build"
                component={Build}
                options={({ navigation }) => ({
                    title: 'Build',
                    headerTitle: "Build Composers",
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
        </ComposerBottomTab.Navigator>
    );
};

export default ComposerScreen;