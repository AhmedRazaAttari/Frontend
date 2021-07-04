import React, { useState } from 'react';
import { View, Text, Image, Dimensions, StatusBar, TouchableOpacity, Switch, ScrollView } from 'react-native';
import { Entypo, AntDesign } from '@expo/vector-icons';
import qrcode from '../assets/qrcode.png'

function Coupons({ navigation }) {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={{ flex: 1, width: Dimensions.get("screen").width, height: Dimensions.get("screen").height, backgroundColor: "white" }}>
            <StatusBar backgroundColor="#d9a877" />
            {/* Header */}
            <View style={{ paddingLeft: 20, paddingRight: 20, width: "100%", height: 70, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <TouchableOpacity onPress={() => navigation.navigate("Bizbud")}>
                    <Entypo name="chevron-left" size={24} color="black" />
                </TouchableOpacity>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>Payment Method</Text>
                <TouchableOpacity>
                    {/* <AntDesign name="search1" size={24} color="black" /> */}
                </TouchableOpacity>
            </View>
            <ScrollView>

                <View style={{ padding: 10, alignItems: "center" }}>
                    <Text style={{ color: "grey", marginTop: 10 }}>Payment remaining time(30:00)</Text>

                    <Text style={{ fontSize: 36, marginTop: 10 }}>$532</Text>
                    <Text>For Kick the car industory</Text>


                    <View style={{ borderRadius: 10, backgroundColor: "white", elevation: 4, padding: 10, width: "95%", alignSelf: "center" }}>
                        <Text style={{ fontSize: 17, margin: 10, fontWeight: "bold" }}>Ftripay</Text>
                        <View style={{ width: "100%", borderBottomWidth: 1, borderBottomColor: "lightgrey" }} />

                        <View style={{ flexDirection: "row", padding: 15, justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                            <Text>Internation Card Payment</Text>
                            <AntDesign name="checkcircle" size={24} color="black" />
                        </View>

                        <View style={{ width: "100%", borderBottomWidth: 1, borderBottomColor: "lightgrey" }} />

                        <View style={{ flexDirection: "row", padding: 15, justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                            <Text>Choose another payment</Text>
                            <Entypo name="chevron-right" size={24} color="black" />
                        </View>


                    </View>

                    <View style={{ borderRadius: 10, backgroundColor: "white", elevation: 4, marginTop: 20, padding: 10, width: "95%", alignSelf: "center" }}>

                        <View style={{ flexDirection: "row", alignItems: "center", padding: 15, width: "100%" }}>
                            <AntDesign name="apple1" size={24} color="black" />
                            <Text style={{ marginLeft: 15 }}>Apple Pay</Text>
                        </View>

                        <View style={{ width: "100%", borderBottomWidth: 1, borderBottomColor: "lightgrey" }} />

                        <View style={{ flexDirection: "row", alignItems: "center", padding: 15, width: "100%" }}>
                            <Entypo name="paypal" size={24} color="black" />
                            <Text style={{ marginLeft: 15 }}>Paypal</Text>
                        </View>


                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate("OrderConfirmation")} style={{ width: '95%', marginTop : 15, borderRadius : 20, height: 55, backgroundColor: "#d9a877", justifyContent: "center", alignItems: "center" }}>
                        <Text>Add Bank Card</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>

        </View>
    )
}

export default Coupons;