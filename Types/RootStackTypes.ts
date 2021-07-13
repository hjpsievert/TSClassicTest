import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
    Home: undefined;
    Composers: { searchString: string };
};

 type RootStackRouteProp = RouteProp<RootStackParamList, 'Composers'>;

 export type RootStackNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Composers'
>;

export type RootStackProps = {
    navigation: RootStackNavigationProp;
    route: RootStackRouteProp;
};


