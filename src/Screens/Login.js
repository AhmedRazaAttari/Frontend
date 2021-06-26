import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList, ScrollView, Switch, ImageBackground } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import flag from '../assets/usFlag.jpg';

class login extends Component {
    constructor() {
        super()
        this.state = {
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.upperBody}>
                </View>
                <View style={styles.lowerBody}>
                    <View style={styles.viewWhite}>
                        <View style={styles.viewRow}>
                            <Text style={styles.textLogin}>Login</Text>
                            <Text style={styles.textWith}> with your </Text>
                        </View>
                        <View style={styles.viewRow2}>
                            <Image source={flag} style={styles.imageFlag}></Image>
                            <AntDesign name="caretdown" size={14} color="black" />
                            <Text style={styles.textNumber}>+824 45689 567</Text>
                            <Entypo name="circle-with-cross" size={20} color="grey" />
                        </View>
                        <TouchableOpacity style={styles.otNext} onPress={() => this.props.navigation.navigate('phoneVerification')}>
                            <Text style={styles.textNext}>Next</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    textNext: {
        color: '#fff',
        fontWeight: '700',
    },
    otNext: {
        width: '80%',
        backgroundColor: '#242a38',
        alignItems: 'center',
        alignSelf: 'center',
    },
    textNumber: {
    },
    imageFlag: {
        width: '8%',
        height: 15,
    },
    viewRow2: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#000',
        width: '80%',
        alignSelf: 'center',
    },
    textWith: {
        color: '#000',
    },
    viewRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 23,
    },
    textLogin: {
        fontSize: 23,
        color: '#000',
        fontWeight: '700',
    },
    viewWhite: {
        backgroundColor: '#fff',
        // alignSelf: 'center',
        // alignItems: 'center',
        marginTop: 5,
        borderRadius: 4,
        paddingVertical: 2,
        paddingHorizontal: 2,
        marginHorizontal: 2
    },
    lowerBody: {
        backgroundColor: '#dcdedd',
        flex: 4,
    },
    upperBody: {
        backgroundColor: '#f5907c',
        flex: 2,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default login;