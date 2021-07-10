import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {TabProps} from '../Types/TabTypes';

const EditScreen = ({ route, navigation }: TabProps) => {
    return (
        <View style={styles.container}>
            <Text>Ready to Revive Classical Music by editing your favorite composer</Text>
        </View>
    );
};


export default EditScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});