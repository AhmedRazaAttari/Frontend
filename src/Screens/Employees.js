import React, { useState } from 'react';
import { View, Text, Image, Dimensions, StatusBar, TouchableOpacity, ScrollView, TextInput, Switch } from 'react-native';
import { Entypo, AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

function Employees({ navigation }) {

    const [isEnabled, setIsEnabled] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState();

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={{ flex: 1, width: Dimensions.get("screen").width, height: Dimensions.get("screen").height, backgroundColor: "white" }}>
            <StatusBar backgroundColor="#d9a877" />
            {/* Header */}
            <View style={{ paddingLeft: 20, paddingRight: 20, width: "100%", height: 70, backgroundColor: "#d9a877", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Entypo name="chevron-left" size={24} color="black" />
                </TouchableOpacity>
                <Text style={{ fontSize: 20 }}>Employee</Text>
                <TouchableOpacity>
                </TouchableOpacity>
            </View>
            <ScrollView>

                <View style={{ padding: 10, alignItems: "center" }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            padding: 10,
                            height: 40,
                            paddingLeft: 15,
                            borderRadius: 40,
                            backgroundColor: 'lightgrey',
                            width: "85%"
                        }}>
                        <Ionicons name="search-outline" size={24} color="black" />
                        <TextInput
                            placeholder="Find Something..."
                            placeholderTextColor="white"
                            style={{ borderWidth: 0, marginLeft: 10 }}
                        />
                    </View>
                    <View style={{ width: "98%", height: 360, backgroundColor: "white", elevation: 4, marginTop: 20, borderRadius: 10, paddingTop: 10, flexDirection: "column", alignItems: "center" }}>
                        <View style={{ height: 60, borderBottomWidth: .2, flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "95%", padding: 5 }}>
                            <View style={{ flexDirection: "row" }}>
                                <View style={{ width: 40, height: 40, justifyContent: "center", alignItems: "center", borderRadius: 100, backgroundColor: "lightgrey" }}>
                                    <Text style={{ fontSize: 22, fontWeight: "bold" }}>J</Text>
                                </View>
                                <View style={{ flexDirection: "column", marginLeft: 10 }}>
                                    <Text style={{ fontWeight: "bold" }}>Johny Appanah</Text>
                                    <Text style={{ fontSize: 12 }}>jhonyauto@gmail.com</Text>
                                </View>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
                                <Ionicons name="chatbox" size={20} color="black" />
                            </TouchableOpacity>
                        </View>
                        <View style={{ height: 60, borderBottomWidth: .2, flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "95%", padding: 5 }}>
                            <View style={{ flexDirection: "row" }}>
                                <View style={{ width: 40, height: 40, justifyContent: "center", alignItems: "center", borderRadius: 100, backgroundColor: "lightgrey" }}>
                                    <Text style={{ fontSize: 22, fontWeight: "bold" }}>J</Text>
                                </View>
                                <View style={{ flexDirection: "column", marginLeft: 10 }}>
                                    <Text style={{ fontWeight: "bold" }}>Johny Appanah</Text>
                                    <Text style={{ fontSize: 12 }}>jhonyauto@gmail.com</Text>
                                </View>
                            </View>
                            <TouchableOpacity>
                                <Ionicons name="chatbox" size={20} color="black" />
                            </TouchableOpacity>
                        </View>
                        <View style={{ height: 60, borderBottomWidth: .2, flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "95%", padding: 5 }}>
                            <View style={{ flexDirection: "row" }}>
                                <View style={{ width: 40, height: 40, justifyContent: "center", alignItems: "center", borderRadius: 100, backgroundColor: "lightgrey" }}>
                                    <Text style={{ fontSize: 22, fontWeight: "bold" }}>J</Text>
                                </View>
                                <View style={{ flexDirection: "column", marginLeft: 10 }}>
                                    <Text style={{ fontWeight: "bold" }}>Johny Appanah</Text>
                                    <Text style={{ fontSize: 12 }}>jhonyauto@gmail.com</Text>
                                </View>
                            </View>
                            <TouchableOpacity>
                                <Ionicons name="chatbox" size={20} color="black" />
                            </TouchableOpacity>
                        </View>
                        <View style={{ height: 60, borderBottomWidth: .2, flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "95%", padding: 5 }}>
                            <View style={{ flexDirection: "row" }}>
                                <View style={{ width: 40, height: 40, justifyContent: "center", alignItems: "center", borderRadius: 100, backgroundColor: "lightgrey" }}>
                                    <Text style={{ fontSize: 22, fontWeight: "bold" }}>J</Text>
                                </View>
                                <View style={{ flexDirection: "column", marginLeft: 10 }}>
                                    <Text style={{ fontWeight: "bold" }}>Johny Appanah</Text>
                                    <Text style={{ fontSize: 12 }}>jhonyauto@gmail.com</Text>
                                </View>
                            </View>
                            <TouchableOpacity>
                                <Ionicons name="chatbox" size={20} color="black" />
                            </TouchableOpacity>
                        </View>
                        <View style={{ height: 60, borderBottomWidth: .2, flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "95%", padding: 5 }}>
                            <View style={{ flexDirection: "row" }}>
                                <View style={{ width: 40, height: 40, justifyContent: "center", alignItems: "center", borderRadius: 100, backgroundColor: "lightgrey" }}>
                                    <Text style={{ fontSize: 22, fontWeight: "bold" }}>J</Text>
                                </View>
                                <View style={{ flexDirection: "column", marginLeft: 10 }}>
                                    <Text style={{ fontWeight: "bold" }}>Johny Appanah</Text>
                                    <Text style={{ fontSize: 12 }}>jhonyauto@gmail.com</Text>
                                </View>
                            </View>
                            <TouchableOpacity>
                                <Ionicons name="chatbox" size={20} color="black" />
                            </TouchableOpacity>
                        </View>
                        {/* <Text style={{ marginLeft: 10, color: "grey", fontWeight: "bold", fontSize: 17 }}>Notes</Text>
                        <TextInput placeholder="notes" style={{ width: "100%", padding: 10 }} /> */}
                    </View>

                </View>

            </ScrollView>

        </View>
    )
}

export default Employees;