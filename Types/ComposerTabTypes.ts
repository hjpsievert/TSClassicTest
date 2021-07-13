import { RouteProp, CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import {StackNavigationProp } from '@react-navigation/stack';
import { RootStackNavigationProp } from './RootStackTypes';

export type ComposerTabParamList = {
    Build: undefined;
    Find: undefined;
};

type ComposerTabRouteProp = RouteProp<ComposerTabParamList, 'Build'>;

type ComposerTabNavigationProp = BottomTabNavigationProp<
    ComposerTabParamList,
    'Build'
>;

export type ComposerTabProps = {
    navigation: ComposerTabNavigationProp;
    route: ComposerTabRouteProp;
};

export type BuildStackParamList = {
    Build: undefined;
    AddComposer: undefined;
    EditComposer: undefined;
};

type BuildStackRouteProp = RouteProp<BuildStackParamList, 'AddComposer'>;

type BuildStackNavigationProp = StackNavigationProp<
    BuildStackParamList,
    'AddComposer'
>;

export type BuildStackProps = {
    navigation: BuildStackNavigationProp;
    route: BuildStackRouteProp;
};

export type ComposerScreenProp = CompositeNavigationProp<
    RootStackNavigationProp,
    ComposerTabNavigationProp
>;