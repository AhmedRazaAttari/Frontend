import React from 'react';
import { View, Text, Image, Dimensions, StatusBar, TouchableOpacity, ScrollView, TextInput, Switch } from 'react-native';
import { Entypo, AntDesign, FontAwesome } from '@expo/vector-icons';

function NewCustomer2({ navigation }) {
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
                    <View style={{ width: Dimensions.get("screen").width - 30, height: 70, flexDirection: "row" }}>
                        <View style={{ width: "50%", backgroundColor: "#d9a877", flexDirection: "column", justifyContent: "center", alignItems: "center", elevation: 5 }}>
                            <AntDesign name="user" size={32} color="black" />
                            <Text>PERSON</Text>
                        </View>
                        <View style={{ width: "50%", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "white", elevation: 4 }}>
                            <FontAwesome name="building-o" size={32} color="black" />
                            <Text>BUSINESS</Text>
                        </View>
                    </View>
                </View>

                <View style={{ width: "95%", backgroundColor: "white", elevation: 4, margin: 10, marginTop: 20, borderRadius: 10, paddingTop: 10 }}>
                    <View style={{ padding: 10 }}>
                        <Text>Info</Text>
                        <TextInput placeholder="Name" style={{ width: "100%", padding: 5, paddingLeft: 1 }} />
                    </View>

                    <View style={{ borderBottomWidth: 1, width: "100%" }} />

                    <View style={{ padding: 10 }}>
                        <Text>Amount Spent</Text>
                        <Text>$ 0.00</Text>
                    </View>

                    <View style={{ width: "100%", height: 40, backgroundColor: "#d9a877", padding: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Text>Addresses</Text>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <AntDesign name="plus" size={12} color="black" />
                            <Text>ADD</Text>
                        </View>
                    </View>

                    <View style={{ padding: 10 }}>
                        <Text>Address</Text>
                        <Text style={{ color: "grey" }}>Search for address</Text>
                    </View>

                    <View style={{ width: "100%", height: 40, flexDirection: "row", backgroundColor: "#d9a877", padding: 10, justifyContent: "space-between", alignItems: "center" }}>
                        <Text>Phone Number</Text>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <AntDesign name="plus" size={12} color="black" />
                            <Text>ADD</Text>
                        </View>
                    </View>

                    <View style={{ padding: 10 }}>
                        <Text>Mobile Phone</Text>
                        <Text style={{ color: "grey" }}>+5 2548 24586</Text>
                    </View>

                    <View style={{ width: "100%", height: 40, backgroundColor: "#d9a877", flexDirection: "row", padding: 10, justifyContent: "space-between", alignItems: "center" }}>
                        <Text>Emails</Text>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <AntDesign name="plus" size={12} color="black" />
                            <Text>ADD</Text>
                        </View>
                    </View>

                    <View style={{ padding: 10 }}>
                        <Text>Email</Text>
                        <Text style={{ color: "grey" }}>jsmith@solutions.com</Text>
                    </View>
                </View>

                <View style={{ width: "95%", backgroundColor: "white", elevation: 4, margin: 10, marginTop: 20, borderRadius: 10, paddingTop: 10 }}>
                    <Text style={{ marginLeft: 10, color: "grey", fontWeight: "bold", fontSize: 17 }}>Notes</Text>
                    <TextInput placeholder="notes" style={{ width: "100%", padding: 10 }} />
                </View>

            </ScrollView>

        </View>
    )
}

export default NewCustomer2;