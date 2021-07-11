import React, { useState, useEffect, ReactElement } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList } from 'react-native';
import { NativeViewGestureHandler } from 'react-native-gesture-handler';
import { BorderlessButton } from 'react-native-gesture-handler';
import { TabProps } from '../Types/TabTypes';
import { loadComposers } from '../Utils/API';

const FindScreen = ({ route, navigation }: TabProps) => {

    type ComposerType = {
        id: number;
        last: string;
        first: string;
        born: Date;
        period: string;
    };

    type APIReturn = {
        success: boolean;
        code: number;
        err: object;
        payLoad: object[];
    };


    const [data, setData] = useState<ComposerType[]>([]);

    useEffect(() => {
        loadComposers((response: APIReturn) => {
            const { payLoad } = response;
            // console.log('Composers payload ', payLoad);
            setData(payLoad as ComposerType[]);
        });
    }, []);

    let renderComposer = (item: ComposerType): ReactElement => {
const bornDate: Date = new Date(item.born)
        return (
            <View style={{ flexDirection: 'row', paddingLeft: 10, alignContent: 'center', backgroundColor: 'rgb(183, 211, 255)', borderBottomWidth: 1, borderBottomColor: '#bbb' }}>
            <Text style={{ flex: 1, fontSize: 14, backgroundColor: 'rgb(183, 211, 255)', textAlign: 'left', paddingTop: 5, paddingBottom: 5, color: 'black' }}>
              {item.first} <Text style={{fontWeight: 'bold'}}>{item.last}</Text>, born {bornDate.getDay()}. {bornDate.getMonth()} {bornDate.getFullYear()}, {item.period} Period      
            </Text>
            </View>
        )
    };

    return (
        <View style={{ flexDirection: 'column', height: Dimensions.get('window').height - 75 }} >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 10, paddingTop: 5, paddingBottom: 5, backgroundColor: '#75aaff', borderBottomColor: '#bbb', borderBottomWidth: 1 }}>
                <Text style={{ fontSize: 18, color: 'black', textAlign: 'left', paddingLeft: 5, paddingTop: 3, paddingBottom: 3 }}>
                    Find composers
                </Text>
            </View>
            <View style={{ flexShrink: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ paddingBottom: 5, backgroundColor: '#a4c6fc' }}>
                    <Text style={styles.body}>Are you ready to Revive Classical Music by finding your favorite composer?</Text>
                </View>
            </View>
            <View style={{ flexShrink: 1, borderTopWidth: 1, borderTopColor: '#666', borderBottomWidth: 1, borderBottomColor: '#666' }}>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => renderComposer(item)}
                />
            </View>
        </View>
    );
};


export default FindScreen;

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
    heading:
    {
        fontSize: 36,
        fontWeight: 'bold',
        paddingBottom: 50
    }
});