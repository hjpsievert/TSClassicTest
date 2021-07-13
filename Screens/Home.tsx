import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { RootStackProps } from '../Types/RootStackTypes';

const HomeScreen = ({ route, navigation }: RootStackProps) => {
    return (
        <View style={styles.container}>
            <Button
                title="Manage Composers"
                onPress={() =>
                    navigation.navigate('Composers', { searchString: '' })
                }
            />
            <Text>Ready to Revive Classical Music in style and with navigation!</Text>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
