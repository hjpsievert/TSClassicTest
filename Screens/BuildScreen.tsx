import { BuildStackProps } from '../Types/ComposerTabTypes';
import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements';


const BuildScreen = ({ route, navigation }: BuildStackProps) => {
    return (

        <View style={{ height: Dimensions.get('window').height - 75 }} >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 10, paddingTop: 5, paddingBottom: 5, backgroundColor: '#75aaff', borderBottomColor: '#bbb', borderBottomWidth: 1 }}>
                <Text style={{ fontSize: 18, color: 'black', textAlign: 'left', paddingLeft: 5, paddingTop: 3, paddingBottom: 3 }}>
                    Add or Build Composers
                </Text>
            </View>
            <View style={{ paddingBottom: 5, backgroundColor: '#a4c6fc' }}>
                <Text style={styles.body}>Are you ready to Revive Classical Music by adding or editing your favorite composer?</Text>
            </View>


            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 10, paddingTop: 5, paddingBottom: 5, backgroundColor: '#75aaff', borderBottomColor: '#bbb', borderBottomWidth: 1 }}>
                <TouchableHighlight
                    underlayColor={'#ccc'}
                    onPress={() => navigation.navigate('AddComposer')}
                >
                    <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                        <Icon
                            name={'account-outline'}
                            type={'material-community'}
                            color={'black'}
                            size={25}
                            containerStyle={{
                                paddingLeft: 10,
                                paddingRight: 10,
                            }}
                        />
                        <Text
                            style={[styles.topTabText, { color: 'black' }]}
                        >
                            {'ADD COMPOSER'}
                        </Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    underlayColor={'#ccc'}
                    onPress={() => navigation.navigate('EditComposer')}
                >
                    <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                        <Icon
                            name={'account-outline'}
                            type={'material-community'}
                            color={'black'}
                            size={25}
                            containerStyle={{
                                paddingLeft: 10,
                                paddingRight: 10,
                            }}
                        />
                        <Text
                            style={[styles.topTabText, { color: 'black' }]}
                        >
                            {'EDIT COMPOSER'}
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>

        </View >
    );
};

export default BuildScreen;

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
    topTabText: {
        fontSize: 10,
        textAlign: 'center',
        color: 'black',
        paddingTop: 2,
    },
});