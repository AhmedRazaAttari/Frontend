import React, { useState } from 'react';
import { View, Text, StatusBar, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

function Development({ navigation }) {

    const [selectedLanguage, setSelectedLanguage] = useState();

    return (
        <View>
            <StatusBar backgroundColor="#d9a877" />
            {/* Header */}
            <View style={{ paddingLeft: 20, paddingRight: 20, width: "100%", height: 70, backgroundColor: "#d9a877", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <TouchableOpacity onPress={() => navigation.navigate("VirtualShop")}>
                    <Entypo name="chevron-left" size={24} color="black" />
                </TouchableOpacity>
                <Text style={{ fontSize: 20 }}>Development</Text>
                <AntDesign name="search1" size={24} color="black" />
            </View>

            {/* Main Content */}
            <View style={{ padding: 15 }}>
                <Picker
                    style={{ backgroundColor: "#e0ddda" }}
                    onValueChange={(itemValue, itemIndex) => {
                        navigation.navigate(itemValue)
                        setSelectedLanguage(itemValue)
                    }}>
                    <Picker.Item label="BOUNCED" value="BOUNCED" />
                    <Picker.Item label="SENT" value="SENT" />
                    <Picker.Item label="OPEN" value="OPEN" />
                    <Picker.Item label="DELIVERED" value="DELIVERED" />
                    <Picker.Item label="UNDELIVERED" value="UNDELIVERED" />
                    <Picker.Item label="FAILED" value="FAILED" />
                </Picker>
            </View>

            <ScrollView>
                <View style={{ padding: 10, width: Dimensions.get("screen").width, flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <View style={{ width: Dimensions.get("screen").width - 20, flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                        <Text>Date</Text>
                        <Text>Description</Text>
                        <Text>Status</Text>
                    </View>
                    <View style={{ marginTop: 10 }} />
                    <View style={{ borderRadius: 15, padding: 10, paddingTop: 30, paddingBottom: 30, width: Dimensions.get("screen").width - 20, backgroundColor: "#d9a877", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View style={{ flexDirection: "column", width: "20%" }}>
                            <Text>15:03:21</Text>
                            <Text>8:43 pm</Text>
                        </View>
                        <View style={{ width: "50%" }}>
                            <Text style={{ fontSize: 15 }}>Your invoice to email ------------------ has been bounced the email account that you tried to open is not working properly by the user end and please try double check on it for further details please open this lonk.
                                -----------------------------------------------------------------------------
                            </Text>
                        </View>
                        <View style={{ width: 70, height: 30, backgroundColor: "#e05a12", justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ color: "white" }}>Bounced</Text>
                        </View>
                        <Entypo name="chevron-right" size={24} color="black" />
                    </View>
                    <View style={{ marginTop: 10 }} />
                    <View style={{ borderRadius: 15, padding: 10, paddingTop: 30, paddingBottom: 30, width: Dimensions.get("screen").width - 20, backgroundColor: "#d9a877", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View style={{ flexDirection: "column", width: "20%" }}>
                            <Text>15:03:21</Text>
                            <Text>8:43 pm</Text>
                        </View>
                        <View style={{ width: "50%" }}>
                            <Text style={{ fontSize: 15 }}>Your invoice to email ------------------ has been bounced the email account that you tried to open is not working properly by the user end and please try double check on it for further details please open this lonk.
                                -----------------------------------------------------------------------------
                            </Text>
                        </View>
                        <View style={{ width: 70, height: 30, backgroundColor: "#e05a12", justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ color: "white" }}>Bounced</Text>
                        </View>
                        <Entypo name="chevron-right" size={24} color="black" />
                    </View>
                    <View style={{ marginTop: 10 }} />
                    <View style={{ borderRadius: 15, padding: 10, paddingTop: 30, paddingBottom: 30, width: Dimensions.get("screen").width - 20, backgroundColor: "#d9a877", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View style={{ flexDirection: "column", width: "20%" }}>
                            <Text>15:03:21</Text>
                            <Text>8:43 pm</Text>
                        </View>
                        <View style={{ width: "50%" }}>
                            <Text style={{ fontSize: 15 }}>Your invoice to email ------------------ has been bounced the email account that you tried to open is not working properly by the user end and please try double check on it for further details please open this lonk.
                                -----------------------------------------------------------------------------
                            </Text>
                        </View>
                        <View style={{ width: 70, height: 30, backgroundColor: "#e05a12", justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ color: "white" }}>Bounced</Text>
                        </View>
                        <Entypo name="chevron-right" size={24} color="black" />
                    </View>
                </View>
                <View style={{ height: 150 }} />
            </ScrollView>
        </View>
    )
}
export default Development;


{/*  */ }