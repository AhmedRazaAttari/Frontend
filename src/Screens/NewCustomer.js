import React from 'react';
import { View, Text, Image, Dimensions, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import { Entypo, AntDesign } from '@expo/vector-icons';
import closeTag from '../assets/closetag2.png'

function NewCustomer({ navigation }) {
    return (
        <View style={{ flex: 1, width: Dimensions.get("screen").width, height: Dimensions.get("screen").height, backgroundColor: "white" }}>
            <StatusBar backgroundColor="#d9a877" />
            {/* Header */}
            <View style={{ paddingLeft: 20, paddingRight: 20, width: "100%", height: 70, backgroundColor: "#d9a877", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Entypo name="chevron-left" size={24} color="black" />
                </TouchableOpacity>
                <Text style={{ fontSize: 20 }}>New Customer</Text>
                <TouchableOpacity>
                </TouchableOpacity>
            </View>
            <ScrollView>

                <View style={{ padding: 10, alignItems: "center" }}>
                    <View style={{ width: "100%", borderRadius: 10, height: 45, justifyContent: "center", alignItems: "center", backgroundColor: "#e0ddda" }}>
                        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Categories</Text>
                    </View>
                    <View style={{ width: "100%", borderRadius: 10, height: 45, paddingLeft: 15, paddingRight: 15, marginTop: 15, flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: "#d9a877" }}>
                        <Text style={{ fontSize: 17 }}>Car Wash</Text>
                        <Entypo name="chevron-down" size={24} color="black" />
                    </View>
                    <View style={{ width: "100%", borderRadius: 10, height: 45, paddingLeft: 15, paddingRight: 15, marginTop: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: "#d9a877" }}>
                        <Text style={{ fontSize: 17 }}>Beauty</Text>
                        <Entypo name="chevron-down" size={24} color="black" />
                    </View>
                    <View style={{ width: "100%", borderRadius: 10, height: 45, paddingLeft: 15, paddingRight: 15, marginTop: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: "#d9a877" }}>
                        <Text style={{ fontSize: 17 }}>Services</Text>
                        <Entypo name="chevron-down" size={24} color="black" />
                    </View>
                    <View style={{ width: "100%", borderRadius: 10, height: 45, paddingLeft: 15, paddingRight: 15, marginTop: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: "#d9a877" }}>
                        <Text style={{ fontSize: 17 }}>Refit</Text>
                        <Entypo name="chevron-down" size={24} color="black" />
                    </View>
                    <View style={{ width: "100%", borderRadius: 10, height: 45, paddingLeft: 15, paddingRight: 15, marginTop: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: "#d9a877" }}>
                        <Text style={{ fontSize: 17 }}>Tire Repair</Text>
                        <Entypo name="chevron-down" size={24} color="black" />
                    </View>
                    <View style={{ width: "100%", borderRadius: 10, height: 45, paddingLeft: 15, paddingRight: 15, marginTop: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: "#d9a877" }}>
                        <Text style={{ fontSize: 17 }}>Waxing</Text>
                        <Entypo name="chevron-down" size={24} color="black" />
                    </View>
                    <View style={{ width: "100%", borderRadius: 10, height: 45, paddingLeft: 15, paddingRight: 15, marginTop: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: "#d9a877" }}>
                        <Text style={{ fontSize: 17 }}>Maintenance</Text>
                        <Entypo name="chevron-down" size={24} color="black" />
                    </View>
                    <View style={{ width: "100%", borderRadius: 10, height: 45, paddingLeft: 15, paddingRight: 15, marginTop: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: "#d9a877" }}>
                        <Text style={{ fontSize: 17 }}>Interior Cleaning</Text>
                        <Entypo name="chevron-down" size={24} color="black" />
                    </View>
                    <View style={{ width: "100%", borderRadius: 10, height: 45, paddingLeft: 15, paddingRight: 15, marginTop: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: "#d9a877" }}>
                        <Text style={{ fontSize: 17 }}>Classification</Text>
                        <Entypo name="chevron-down" size={24} color="black" />
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate("NewCustomer2")} style={{ marginTop: 20, borderRadius: 10, width: 120, height: 30, backgroundColor: "purple", justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: "white" }}>ADD +</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>

        </View>
    )
}

export default NewCustomer;