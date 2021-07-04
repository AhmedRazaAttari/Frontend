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
            <View style={{ paddingLeft: 20, paddingRight: 20, width: "100%", height: 70, backgroundColor: "#d9a877", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Entypo name="chevron-left" size={24} color="black" />
                </TouchableOpacity>
                <Text style={{ fontSize: 20 }}>Coupons</Text>
                <TouchableOpacity>
                    {/* <AntDesign name="search1" size={24} color="black" /> */}
                </TouchableOpacity>
            </View>
            <ScrollView>

                <View style={{ padding: 10, alignItems: "center" }}>
                    <View style={{ width: "100%", backgroundColor: "#dedbd5", borderRadius: 20, justifyContent: "center", alignItems: "center" }}>
                        <Image source={qrcode} style={{ width: 200, height: 200 }} />
                    </View>
                    <TouchableOpacity style={{ width: 170, height: 50, elevation: 2, borderRadius: 10, marginTop: 10, backgroundColor: "#d9a877", justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: "black", fontWeight: "bold", fontSize: 18 }}>$5 off</Text>
                    </TouchableOpacity>
                    <View style={{ marginTop: 20 }} />
                    <View style={{ width: Dimensions.get("screen").width - 20, height: 45, paddingLeft: 15, justifyContent: "center", backgroundColor: "white", elevation: 2, borderRadius: 7 }}>
                        <Text>Status</Text>
                    </View>
                    <View style={{ marginTop: 10 }} />
                    <View style={{ width: Dimensions.get("screen").width - 20, height: 45, paddingLeft: 15, flexDirection: "row", justifyContent: "space-between", backgroundColor: "white", elevation: 2, borderRadius: 7 }}>
                        <View>
                            <Text style={{ color: "grey" }}>Code</Text>
                            <Text style={{ fontWeight: "bold" }}>Promotive</Text>
                        </View>
                        <Switch
                            trackColor={{ false: '#767577', true: '#81b0ff' }}
                            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                    <View style={{ marginTop: 10 }} />
                    <View style={{ width: Dimensions.get("screen").width - 20, height: 45, paddingLeft: 15, flexDirection: "row", justifyContent: "space-between", backgroundColor: "white", elevation: 2, borderRadius: 7 }}>
                        <View>
                            <Text style={{ color: "grey" }}>Discount</Text>
                            <Text style={{ fontWeight: "bold" }}>$5 off</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 10 }} />

                    <View style={{ width: Dimensions.get("screen").width - 20, height: 45, paddingLeft: 15, flexDirection: "row", justifyContent: "space-between", backgroundColor: "white", elevation: 2, borderRadius: 7 }}>
                        <View>
                            <Text style={{ color: "grey" }}>Minimum subtotal required to radeem</Text>
                            <Text style={{ fontWeight: "bold" }}>$100.00</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 10 }} />
                    <View style={{ width: Dimensions.get("screen").width - 20, height: 45, paddingLeft: 15, flexDirection: "row", justifyContent: "space-between", backgroundColor: "white", elevation: 2, borderRadius: 7 }}>
                        <View>
                            <Text style={{ color: "grey" }}>Redemption</Text>
                            <Text style={{ fontWeight: "bold" }}>1/50</Text>
                        </View>
                    </View>

                    <View style={{ marginTop: 10 }} />
                    <View style={{ width: Dimensions.get("screen").width - 20, height: 45, paddingLeft: 15, flexDirection: "row", justifyContent: "space-between", backgroundColor: "white", elevation: 2, borderRadius: 7 }}>
                        <View>
                            <Text style={{ color: "grey" }}>Redemption</Text>
                            <Text style={{ fontWeight: "bold" }}>1/50</Text>
                        </View>
                    </View>

                    <TouchableOpacity style={{ marginTop: 20, borderRadius : 10, width: 120, height: 30, backgroundColor: "purple", justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: "white" }}>ADD +</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>

        </View>
    )
}

export default Coupons;