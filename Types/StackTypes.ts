import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
    Home: undefined;
    Composers: { searchString: string };
};

 type ComposerScreenRouteProp = RouteProp<RootStackParamList, 'Composers'>;

 export type ComposerScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Composers'
>;

export type Props = {
    navigation: ComposerScreenNavigationProp;
    route: ComposerScreenRouteProp;
};