import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as stackTypes from '../Types/StackTypes';


const ComposerScreen = ({ route, navigation }: stackTypes.Props) => {
    return <Text>This is {route.params.searchString}'s profile</Text>;
};

export default ComposerScreen;