import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Props } from '../Types/StackTypes';

const HomeScreen = ({ route, navigation }: Props) => {
    return (
        <View style={styles.container}>
            <Button
                title="Manage Composer List"
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
