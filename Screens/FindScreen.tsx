import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {TabProps} from '../Types/TabTypes';

const FindScreen = ({ route, navigation }: TabProps) => {
    return (
        <View style={styles.container}>

            <Text>Ready to Revive Classical Music by finding your favorite composer</Text>
        </View>
    );
};


export default FindScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});