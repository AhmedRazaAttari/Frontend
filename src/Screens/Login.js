import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import icon from '../assets/icon.png';
import { AntDesign } from '@expo/vector-icons';

function Login({ navigation }) {
    const [selectedLanguage, setSelectedLanguage] = useState();
    return (
        <View style={{ backgroundColor: "#f2f7f4", flex: 1 }}>
            <View style={{ height: 250, width: "100%", backgroundColor: "#d9a877" }}>

            </View>
            <View style={{ padding: 20, width: "90%", alignSelf: "center", flexDirection: "column", backgroundColor: "white", elevation: 5, borderRadius: 10, paddingTop: 25, position: "absolute", top: "30%" }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ fontSize: 32, fontWeight: "bold" }}>Login</Text>
                    <Text style={{ fontSize: 28, marginLeft: 10, fontFamily: "Quicksand" }}>with your</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: 30 }}>
                    <View style={{ height: 40, padding: 5, flexDirection: "row", width: '30%', borderBottomLeftRadius: 5, borderTopLeftRadius: 5, borderWidth: .5, borderColor: "lightgrey", marginTop: 15, justifyContent: "center", alignItems: "center" }}>
                        <Image source={icon} style={{ width: 25, height: 25 }} />
                        <AntDesign name="down" size={14} color="black" style={{ marginLeft: 20 }} />
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", height: 40, padding: 5, paddingLeft: 10, width: '70%', borderBottomRightRadius: 5, borderTopRightRadius: 5, borderWidth: .5, borderColor: "lightgrey", marginTop: 15 }}>
                        <Text>+84</Text>
                        <TextInput style={{ padding: 5, width: "80%" }} keyboardType="number-pad" />
                    </View>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("PhoneVerification")} style={{ width: "100%", height: 40, borderRadius: 5, backgroundColor: "black", justifyContent: "center", alignItems: "center", marginTop: 40 }}>
                    <Text style={{ color: "white", fontWeight: "bold" }}>NEXT</Text>
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center", alignSelf: "center", position : "absolute", bottom : 30, marginTop: 20 }}>
                <Text style={{ textAlign: "center" }}>Don't have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                    <Text>Sign up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login;