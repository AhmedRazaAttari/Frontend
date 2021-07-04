import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import icon from '../assets/icon.png';
import { AntDesign } from '@expo/vector-icons';
import PhoneVarify from '../Component/Underlined';

function PhoneVerification({ navigation }) {
    const [selectedLanguage, setSelectedLanguage] = useState();
    return (
        <View style={{ padding: 15, backgroundColor: "#ebe1e1", flex: 1 }}>
            <AntDesign name="left" size={28} color="black" style={{ margin: 30, marginLeft: 1 }} />

            <View style={{ alignSelf: "center" }}>
                <Text style={{ fontSize: 32 }}>Phone Verification</Text>
                <Text style={{ textAlign: "left" }}>Enter your OTP code here</Text>
            </View>
            <View style={{width : "100%", height : 150}}>
                <PhoneVarify />
                <TouchableOpacity onPress={() => navigation.navigate("Bizbud")} style={{ width: "90%", alignSelf : "center", height: 40, borderRadius: 5, backgroundColor: "black", justifyContent: "center", alignItems: "center", marginTop: 40 }}>
                    <Text style={{ color: "white" }}>VERIFY NOW</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default PhoneVerification;