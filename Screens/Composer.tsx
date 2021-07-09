import React from 'react';
import { Text } from 'react-native';
import {Props} from '../Types/StackTypes';


const ComposerScreen = ({ route, navigation }: Props) => {
    return <Text>This is {route.params.searchString}'s profile</Text>;
};

export default ComposerScreen;