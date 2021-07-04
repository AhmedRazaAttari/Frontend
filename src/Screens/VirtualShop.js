import React from 'react';
import { View, Text, Image, Dimensions, StatusBar, TouchableOpacity } from 'react-native';
import { Entypo, AntDesign } from '@expo/vector-icons';
import closeTag from '../assets/closetag2.png'

function VirtualShop({navigation}) {
    return (
        <View style={{ width: Dimensions.get("screen").width }}>
            <StatusBar backgroundColor="#d9a877" />
            {/* Header */}
            <View style={{ paddingLeft: 20, paddingRight: 20, width: "100%", height: 70, backgroundColor: "#d9a877", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Entypo name="chevron-left" size={24} color="black" />
                </TouchableOpacity>
                <Text style={{ fontSize: 20 }}>Virtual Shop</Text>
                <TouchableOpacity>
                    {/* <AntDesign name="search1" size={24} color="black" /> */}
                </TouchableOpacity>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center", width: Dimensions.get("screen").width, height: Dimensions.get("screen").height - 150 }}>
                <Image source={closeTag} style={{ width: Dimensions.get("screen").width - 90, height: 253 }} />
            </View>
        </View>
    )
}

export default VirtualShop;