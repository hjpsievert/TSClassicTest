import { BuildStackProps } from '../Types/ComposerTabTypes';
import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableHighlight } from 'react-native';


const AddScreen = ({ route, navigation }: BuildStackProps) => {
    return (
        <View style={{ height: Dimensions.get('window').height - 75 }} >

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 10, paddingTop: 5, paddingBottom: 5, backgroundColor: '#75aaff', borderBottomColor: '#bbb', borderBottomWidth: 1 }}>
                <Text style={{ fontSize: 18, color: 'black', textAlign: 'left', paddingLeft: 5, paddingTop: 3, paddingBottom: 3 }}>
                    Add Composers
                </Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
                <View style={{ paddingBottom: 5, backgroundColor: '#a4c6fc' }}>
                    <Text style={styles.body}>Are you ready to Revive Classical Music by adding or editing your favorite composer?</Text>
                </View>
            </View>
        </View>
    )
};
export default AddScreen;

const styles = StyleSheet.create({
    body: {
        marginTop: 3,
        // marginLeft: 15,
        marginLeft: 15,
        marginRight: 15,
        fontSize: 12,
        // borderWidth: 3,
        // borderColor: 'yellow',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});