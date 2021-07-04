import React, { useState } from 'react';
import { View, Text, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import icon from '../assets/icon.png';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import PhoneVarify from '../Component/Underlined';

function OrderConfirmation({ navigation }) {
    const [selectedLanguage, setSelectedLanguage] = useState();
    return (
        <View style={{ padding: 15, backgroundColor: "#f7e9e9", flex: 1 }}>
            <View style={{ flexDirection: "row", padding: 10, justifyContent: "space-between", alignItems: "center" }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name="left" size={18} color="black" />
                </TouchableOpacity>
                <Text style={{ marginLeft: -20, fontSize: 18, fontWeight: "bold" }}>Order Confirmation</Text>
                <Text></Text>
            </View>

            <View style={{ padding: 10, flexDirection: "column" }}>
                <View style={{ backgroundColor: "white", flexDirection: "column", borderRadius: 8, width: "100%", marginTop: 15, padding: 10 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", height: 40, borderBottomWidth: .2 }}>
                        <Text>GT Exquistie car wash</Text>
                        <Text>$68</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", height: 40, borderBottomWidth: .2 }}>
                        <Text>Amount</Text>
                        <View style={{ flexDirection: "row", width: '30%', justifyContent: "space-between", alignItems: "center" }}>
                            <Feather name="minus-square" size={24} color="black" />
                            <Text>1</Text>
                            <AntDesign name="plussquareo" size={24} color="black" />
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", height: 40 }}>
                        <Text>Subtotal</Text>
                        <Text>$68</Text>
                    </View>
                </View>

                <View style={{ backgroundColor: "white", flexDirection: "column", borderRadius: 8, width: "100%", marginTop: 15, padding: 10 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", height: 40, borderBottomWidth: .2 }}>
                        <Text>Voucher</Text>
                        <View style={{ flexDirection: "row", width: '40%', justifyContent: "space-between", alignItems: "center" }}>
                            <Text>Not available yet</Text>
                            <Entypo name="chevron-right" size={24} color="black" />
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", height: 40 }}>
                        <Text>Total Order</Text>
                        <Text>$532</Text>
                    </View>
                </View>

                <View style={{ backgroundColor: "white", flexDirection: "column", borderRadius: 8, width: "100%", marginTop: 15, padding: 10 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", height: 40 }}>
                        <Text>Cell Phone Number</Text>
                        <View style={{ flexDirection: "row", width: '40%', justifyContent: "space-between", alignItems: "center" }}>
                            <Text>202*******177</Text>
                            <Entypo name="chevron-right" size={24} color="black" />
                        </View>
                    </View>
                </View>

                <Text style={{ fontWeight: "bold", margin: 20, fontSize: 15, marginLeft: 1 }}>Appointment notice :</Text>
                <Text>Please make an Appointment 1 day in advance.</Text>
                <Text>Refund rules: Refund at any time, expired</Text>
            </View>
            <View style={{ position: "absolute", flexDirection: "row", justifyContent: "space-around", alignItems: "center", bottom: 0, width: Dimensions.get("screen").width, height: 70, backgroundColor: "#d9a877", borderTopLeftRadius: 30, borderTopRightRadius: 30 }}>
                <Text style={{ fontSize: 26 }}>$68</Text>
                <View style={{ height: 50, width: 110, justifyContent: "center", alignItems: "center", backgroundColor : "purple", borderRadius :100 }}>
                    <Text style={{color : "white"}}>Buy now</Text>
                </View>
            </View>
        </View>
    )
}

export default OrderConfirmation;