import React, { useState } from 'react';
import { View, Text, StatusBar, ScrollView, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

function UnDelivered({ navigation }) {

    const [selectedLanguage, setSelectedLanguage] = useState();

    return (
        <View>
            <StatusBar backgroundColor="#d9a877" />
            {/* Header */}
            <View style={{ paddingLeft: 20, paddingRight: 20, width: "100%", height: 70, backgroundColor: "#d9a877", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <Entypo name="chevron-left" size={24} color="black" />
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
                    <Picker.Item label="UNDELIVERED" value="UNDELIVERED" />
                    <Picker.Item label="DELIVERED" value="DELIVERED" />
                    <Picker.Item label="SENT" value="SENT" />
                    <Picker.Item label="BOUNCED" value="BOUNCED" />
                    <Picker.Item label="OPEN" value="OPEN" />
                    <Picker.Item label="FAILED" value="FAILED" />
                </Picker>
            </View>

            <ScrollView>
                <View style={{ padding: 10, width: Dimensions.get("screen").width, flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <View style={{ width: Dimensions.get("screen").width - 10, flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                        <Text>Date</Text>
                        <Text>Description</Text>
                        <Text>Status</Text>
                    </View>
                    <View style={{ marginTop: 10 }} />
                    <View style={{ borderRadius: 15, padding: 10, width: Dimensions.get("screen").width - 20, backgroundColor: "#d9a877", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View style={{ flexDirection: "column", width: "20%" }}>
                            <Text>15:03:21</Text>
                            <Text>8:43 pm</Text>
                        </View>
                        <View style={{ width: "45%", flexDirection: "column", marginLeft: 10 }}>
                            <Text style={{ fontSize: 15 }}>Review SMS to</Text>
                            <Text style={{ fontSize: 15 }}>+2 1542 54125</Text>
                        </View>
                        <View style={{ width: 85, height: 30, backgroundColor: "#e0ddda", justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ color: "black" }}>UnDelivered</Text>
                        </View>
                        <Entypo name="chevron-right" size={24} color="black" />
                    </View>
                    <View style={{ marginTop: 10 }} />
                    <View style={{ borderRadius: 15, padding: 10, width: Dimensions.get("screen").width - 20, backgroundColor: "#d9a877", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View style={{ flexDirection: "column", width: "20%" }}>
                            <Text>15:03:21</Text>
                            <Text>8:43 pm</Text>
                        </View>
                        <View style={{ width: "45%", flexDirection: "column", marginLeft: 10 }}>
                            <Text style={{ fontSize: 15 }}>Review SMS to</Text>
                            <Text style={{ fontSize: 15 }}>+2 1542 54125</Text>
                        </View>
                        <View style={{ width: 85, height: 30, backgroundColor: "#e0ddda", justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ color: "black" }}>UnDelivered</Text>
                        </View>
                        <Entypo name="chevron-right" size={24} color="black" />
                    </View>
                    <View style={{ marginTop: 10 }} />
                    <View style={{ borderRadius: 15, padding: 10, width: Dimensions.get("screen").width - 20, backgroundColor: "#d9a877", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View style={{ flexDirection: "column", width: "20%" }}>
                            <Text>15:03:21</Text>
                            <Text>8:43 pm</Text>
                        </View>
                        <View style={{ width: "45%", flexDirection: "column", marginLeft: 10 }}>
                            <Text style={{ fontSize: 15 }}>Review SMS to</Text>
                            <Text style={{ fontSize: 15 }}>+2 1542 54125</Text>
                        </View>
                        <View style={{ width: 85, height: 30, backgroundColor: "#e0ddda", justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ color: "black" }}>UnDelivered</Text>
                        </View>
                        <Entypo name="chevron-right" size={24} color="black" />
                    </View>
                    <View style={{ marginTop: 10 }} />
                    <View style={{ borderRadius: 15, padding: 10, width: Dimensions.get("screen").width - 20, backgroundColor: "#d9a877", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View style={{ flexDirection: "column", width: "20%" }}>
                            <Text>15:03:21</Text>
                            <Text>8:43 pm</Text>
                        </View>
                        <View style={{ width: "45%", flexDirection: "column", marginLeft: 10 }}>
                            <Text style={{ fontSize: 15 }}>Review SMS to</Text>
                            <Text style={{ fontSize: 15 }}>+2 1542 54125</Text>
                        </View>
                        <View style={{ width: 85, height: 30, backgroundColor: "#e0ddda", justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ color: "black" }}>UnDelivered</Text>
                        </View>
                        <Entypo name="chevron-right" size={24} color="black" />
                    </View>
                    <View style={{ marginTop: 10 }} />
                    <View style={{ borderRadius: 15, padding: 10, width: Dimensions.get("screen").width - 20, backgroundColor: "#d9a877", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View style={{ flexDirection: "column", width: "20%" }}>
                            <Text>15:03:21</Text>
                            <Text>8:43 pm</Text>
                        </View>
                        <View style={{ width: "45%", flexDirection: "column", marginLeft: 10 }}>
                            <Text style={{ fontSize: 15 }}>Review SMS to</Text>
                            <Text style={{ fontSize: 15 }}>+2 1542 54125</Text>
                        </View>
                        <View style={{ width: 85, height: 30, backgroundColor: "#e0ddda", justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ color: "black" }}>UnDelivered</Text>
                        </View>
                        <Entypo name="chevron-right" size={24} color="black" />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
export default UnDelivered;


{/*  */ }