import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import icon from '../assets/icon.png';
import { AntDesign } from '@expo/vector-icons';

function Signup({ navigation }) {
    const [selectedLanguage, setSelectedLanguage] = useState();
    return (
        <View style={{ padding: 15, backgroundColor: "#f2f7f4", flex: 1 }}>

            <View style={{ width: "90%", alignSelf: "center", height: 450, flexDirection: "column", marginTop: '30%' }}>
                <View style={{ height: "50%", width: "100%", backgroundColor: "#d9a877", alignItems: "center", padding: 25, elevation: 5, flexDirection: "row", flexWrap: "wrap", borderTopRightRadius: 10, borderTopLeftRadius: 10 }}>
                    <Text style={{ fontSize: 32, fontWeight: "bold" }}>Sign up</Text>
                    <Text style={{ fontSize: 28, marginLeft: 10, fontFamily: "Quicksand" }}>with </Text>
                    <Text style={{ fontSize: 28, fontFamily: "Quicksand", color: "black" }}>email and phone number</Text>
                </View>
                <View style={{ height: "50%", padding: 20, width: "100%", backgroundColor: "white", elevation: 5, borderBottomRightRadius: 10, borderBottomLeftRadius: 10, paddingTop: 25 }}>
                    <TextInput placeholder="name@example.com" placeholderTextColor="lightgrey" style={{ fontSize: 17, paddingLeft: 15, width: "100%", height: 40, borderRadius: 5, borderWidth: 1, borderColor: "lightgrey" }} />
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                        <View style={{ height: 40, padding: 5, flexDirection: "row", width: '30%', borderBottomLeftRadius: 5, borderTopLeftRadius: 5, borderWidth: 1, borderColor: "lightgrey", marginTop: 15, justifyContent: "center", alignItems: "center" }}>
                            <Image source={icon} style={{ width: 25, height: 25 }} />
                            <AntDesign name="down" size={14} color="black" style={{ marginLeft: 20 }} />
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", height: 40, padding: 5, paddingLeft: 10, width: '70%', borderBottomRightRadius: 5, borderTopRightRadius: 5, borderWidth: 1, borderColor: "lightgrey", marginTop: 15 }}>
                            <Text>+84</Text>
                            <TextInput style={{ padding: 5, width: "80%" }} keyboardType="number-pad" />
                        </View>
                    </View>

                    <View style={{ width: "100%", height: 40, borderRadius: 5, backgroundColor: "black", justifyContent: "center", alignItems: "center", marginTop: 30 }}>
                        <Text style={{ color: "white" }}>SIGN UP</Text>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", position : "absolute", bottom : 30, alignSelf: "center", marginTop: 20 }}>
                <Text style={{ textAlign: "center" }}>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text>Sign in</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Signup;