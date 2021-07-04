import React, { useState } from 'react';
import { View, Text, Image, Dimensions, StatusBar, TouchableOpacity, ScrollView, TextInput, Switch } from 'react-native';
import { Entypo, AntDesign, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

function NewEvent({ navigation }) {

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
                <Text style={{ fontSize: 20 }}>New Event</Text>
                <TouchableOpacity>
                </TouchableOpacity>
            </View>
            <ScrollView>

                <View style={{ padding: 10, alignItems: "center" }}>
                    <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View style={{ height: 60, width: 80, elevation: 6, backgroundColor: "white", justifyContent: "center", alignItems: "center", borderBottomWidth: 5, borderBottomColor: "#d9a877" }}>
                            <AntDesign name="notification" size={24} color="black" />
                            <Text>Meeting</Text>
                        </View>
                        <View style={{ height: 60, width: 80, elevation: 6, backgroundColor: "white", justifyContent: "center", alignItems: "center" }}>
                            <MaterialIcons name="alarm" size={24} color="black" />
                            <Text>Reminder</Text>
                        </View>
                        <View style={{ height: 60, width: 80, elevation: 6, backgroundColor: "white", justifyContent: "center", alignItems: "center" }}>
                            <MaterialCommunityIcons name="timer-sand" size={24} color="black" />
                            <Text>Time Out</Text>
                        </View>
                        <View style={{ height: 60, width: 80, elevation: 6, backgroundColor: "white", justifyContent: "center", alignItems: "center" }}>
                            <AntDesign name="closecircleo" size={24} color="black" />
                            <Text>Closed</Text>
                        </View>
                    </View>

                    <View style={{ width: '100%', height: 60, backgroundColor: "#d9a877", borderRadius: 10, marginTop: 20, justifyContent: "center" }}>
                        <Text style={{ fontSize: 18, marginLeft: 15 }}>Title</Text>
                    </View>

                    
                    <View style={{ width: "98%", backgroundColor: "white", elevation: 4, marginTop: 20, borderRadius: 10, paddingTop: 10 }}>
                        <Text style={{ marginLeft: 10, color: "grey", fontWeight: "bold", fontSize: 17 }}>Schedule</Text>
                        <TextInput placeholder="Start" style={{ width: "100%", borderBottomWidth: 1, borderBottomColor: "lightgrey", padding: 10 }} />
                        <TextInput placeholder="End" style={{ width: "100%", borderBottomWidth: 1, borderBottomColor: "lightgrey", padding: 10 }} />
                        <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
                            <Text style={{ color: "darkgrey", marginRight: 15 }}>All day</Text>
                            <Switch
                                trackColor={{ false: '#767577', true: '#81b0ff' }}
                                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                        <View style={{ width: "100%", borderBottomWidth: 1, borderBottomColor: "lightgrey" }} />

                        <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
                            <Text style={{ color: "darkgrey", marginRight: 15 }}>Repeat</Text>
                            <Picker
                                mode="dropdown"
                                style={{ marginLeft: 20, width: 105 }}
                                selectedValue={selectedLanguage}
                                onValueChange={(itemValue, itemIndex) =>
                                    setSelectedLanguage(itemValue)
                                }>
                                <Picker.Item label="Never" value="Never" />
                                <Picker.Item label="Daily" value="Daily" />
                                <Picker.Item label="Weekly" value="Weekly" />
                                <Picker.Item label="Monthly" value="Monthly" />
                                <Picker.Item label="Yearly" value="Yearly" />
                            </Picker>
                        </View>
                        <View style={{ width: "100%", borderBottomWidth: 1, borderBottomColor: "lightgrey" }} />

                        <TouchableOpacity style={{ width: 200, height: 40, borderRadius: 12, alignSelf: "center", marginTop: 20, marginBottom: 20, flexDirection: "row", justifyContent: "space-around", alignItems: "center", backgroundColor: "#d9a877", }}>
                            <Text>Select Employee</Text>
                            <Entypo name="chevron-down" size={22} color="black" />
                        </TouchableOpacity>
                    </View>

                    <View style={{ width: "98%", backgroundColor: "white", elevation: 4, marginTop: 20, borderRadius: 10, paddingTop: 10 }}>
                        <Text style={{ marginLeft: 10, color: "grey", fontWeight: "bold", fontSize: 17 }}>Notes</Text>
                        <TextInput placeholder="notes" style={{ width: "100%", padding: 10 }} />
                    </View>
                </View>

            </ScrollView>

        </View>
    )
}

export default NewEvent;