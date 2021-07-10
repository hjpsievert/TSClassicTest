import { RouteProp, CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { ComposerScreenNavigationProp } from './StackTypes';

export type TabParamList = {
    Find: undefined;
    Edit: undefined;
};

type FindScreenRouteProp = RouteProp<TabParamList, 'Find'>;

type FindScreenNavigationProp = BottomTabNavigationProp<
    TabParamList,
    'Find'
>;

export type TabProps = {
    navigation: FindScreenNavigationProp;
    route: FindScreenRouteProp;
};

export type ComposerScreenProp = CompositeNavigationProp<
    ComposerScreenNavigationProp,
    FindScreenNavigationProp
>;