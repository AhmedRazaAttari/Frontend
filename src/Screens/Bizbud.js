import React, { useState } from 'react';
import { View, Text, TextInput, Dimensions, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, FontAwesome5, Feather, Entypo, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
import { RadioButton } from 'react-native-paper';

function Bizbud({ navigation }) {

    const [checked, setChecked] = React.useState('first');

    return (
        <View style={{ flex: 1, width: Dimensions.get("screen").width, height: Dimensions.get("screen").height, backgroundColor: "white" }}>
            <StatusBar backgroundColor="#d9a877" />
            {/* Header */}
            <View style={{ paddingLeft: 20, paddingRight: 20, width: "100%", height: 70, backgroundColor: "#d9a877", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Feather name="align-left" size={24} color="black" />
                </TouchableOpacity>
                <Text style={{ fontSize: 20 }}>Bizbud</Text>
                <TouchableOpacity onPress={() => navigation.navigate("BOUNCED")}>
                    <FontAwesome5 name="bell" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <ScrollView>

                <View style={{ padding: 10, alignItems: "center" }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            padding: 5,
                            paddingLeft: 15,
                            borderRadius: 30,
                            borderWidth: 1,
                            alignItems: "center",
                            // borderRadius : 10,
                            width: "90%"
                        }}>
                        <Ionicons name="search-outline" size={24} color="black" />
                        <TextInput
                            placeholder="Find Something..."
                            style={{ borderWidth: 0, marginLeft: 10 }}
                        />
                    </View>

                    <View style={{ flexDirection: "row", paddingTop: 30, width: Dimensions.get("screen").width, justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
                        <TouchableOpacity onPress={() => navigation.navigate("NewJob")} style={{ flexDirection: "column", minWidth: "22%", height: 70, padding: 15, justifyContent: "center", alignItems: "center" }}>
                            <Entypo name="tools" size={42} color="#d9a877" />
                            <Text style={{ fontSize: 18 }}>Job</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("NewEvent")} style={{ flexDirection: "column", minWidth: "22%", height: 70, padding: 15, justifyContent: "center", alignItems: "center" }}>
                            <MaterialIcons name="event-available" size={42} color="#d9a877" />
                            <Text style={{ fontSize: 18 }}>Event</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("NewCustomer")} style={{ flexDirection: "column", minWidth: "22%", height: 70, padding: 15, justifyContent: "center", alignItems: "center" }}>
                            <FontAwesome5 name="users" size={42} color="#d9a877" />
                            <Text style={{ fontSize: 18 }}>Customer</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("Dashboard")} style={{ flexDirection: "column", minWidth: "22%", height: 70, padding: 15, justifyContent: "center", alignItems: "center" }}>
                            <SimpleLineIcons name="note" size={42} color="#d9a877" />
                            <Text style={{ fontSize: 18 }}>Order</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={{ textAlign: "center", fontWeight: "bold", marginTop: 30 }}>Thursday July 2021</Text>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", width: Dimensions.get("screen").width, padding: 20 }}>
                        <View style={{ flexDirection: "column", justifyContent: "space-between", height: 80, alignItems: "center", padding: 10 }}>
                            <Text>M</Text>
                            <Text>2</Text>
                        </View>
                        <View style={{ flexDirection: "column", justifyContent: "space-between", height: 80, alignItems: "center", padding: 10 }}>
                            <Text>T</Text>
                            <Text>3</Text>
                        </View>
                        <View style={{ flexDirection: "column", justifyContent: "space-between", height: 80, alignItems: "center", padding: 10 }}>
                            <Text>W</Text>
                            <Text>4</Text>
                        </View>
                        <View style={{ flexDirection: "column", justifyContent: "space-between", borderWidth: 1, borderColor: "#d9a877", height: 80, alignItems: "center", padding: 10 }}>
                            <Text>T</Text>
                            <Text>5</Text>
                        </View>
                        <View style={{ flexDirection: "column", justifyContent: "space-between", height: 80, alignItems: "center", padding: 10 }}>
                            <Text>F</Text>
                            <Text>6</Text>
                        </View>
                        <View style={{ flexDirection: "column", justifyContent: "space-between", height: 80, alignItems: "center", padding: 10 }}>
                            <Text>S</Text>
                            <Text>7</Text>
                        </View>
                        <View style={{ flexDirection: "column", justifyContent: "space-between", height: 80, alignItems: "center", padding: 10 }}>
                            <Text>S</Text>
                            <Text>8</Text>
                        </View>
                    </View>

                    <Text style={{ textAlign: "center", fontWeight: "bold", marginTop: 30 }}>5 Thu July 2021</Text>

                </View>
                <View style={{ width: "100%", flexDirection: "row", backgroundColor: "#e0ddda", marginTop: 10 }}>
                    <View style={{ flexDirection: "column", padding: 5, backgroundColor: "#d9a877", width: '60%', borderTopRightRadius: 15, borderBottomRightRadius: 15 }}>
                        <Text style={{ fontWeight: "bold" }}>709-Ceramic Coat Rims</Text>
                        <Text>Devon Vamderhart</Text>
                        <Text>09:00 AM - 12:00PM</Text>
                    </View>
                    <View style={{ padding: 2, paddingTop: 8, flexDirection: "row" }}>
                        <View style={{ flexDirection: "column", alignItems: "center" }}>
                            <Text style={{ fontSize: 12 }}>Due</Text>
                            <RadioButton
                                value="first"
                                color="white"
                                status={checked === 'first' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('first')}
                            />
                        </View>
                        <View style={{ flexDirection: "column", alignItems: "center" }}>
                            <Text style={{ fontSize: 12 }}>In Progress</Text>
                            <RadioButton
                                value="second"
                                status={checked === 'second' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('second')}
                            />
                        </View>
                        <View style={{ flexDirection: "column", alignItems: "center" }}>
                            <Text style={{ fontSize: 12 }}>Done</Text>
                            <RadioButton
                                value="third"
                                status={checked === 'third' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('third')}
                            />
                        </View>
                    </View>
                </View>

                <View style={{ width: "100%", flexDirection: "row", backgroundColor: "#e0ddda", marginTop: 10 }}>
                    <View style={{ flexDirection: "column", padding: 5, backgroundColor: "#d9a877", width: '60%', borderTopRightRadius: 15, borderBottomRightRadius: 15 }}>
                        <Text style={{ fontWeight: "bold" }}>709-Ceramic Coat Rims</Text>
                        <Text>Devon Vamderhart</Text>
                        <Text>09:00 AM - 12:00PM</Text>
                    </View>
                    <View style={{ padding: 2, paddingTop: 8, flexDirection: "row" }}>
                        <View style={{ flexDirection: "column", alignItems: "center" }}>
                            <Text style={{ fontSize: 12 }}>Due</Text>
                            <RadioButton
                                value="first"
                                color="white"
                                status={checked === 'first' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('first')}
                            />
                        </View>
                        <View style={{ flexDirection: "column", alignItems: "center" }}>
                            <Text style={{ fontSize: 12 }}>In Progress</Text>
                            <RadioButton
                                value="second"
                                status={checked === 'second' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('second')}
                            />
                        </View>
                        <View style={{ flexDirection: "column", alignItems: "center" }}>
                            <Text style={{ fontSize: 12 }}>Done</Text>
                            <RadioButton
                                value="third"
                                status={checked === 'third' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('third')}
                            />
                        </View>
                    </View>
                </View>
                <View style={{ width: "100%", flexDirection: "row", backgroundColor: "#e0ddda", marginTop: 10 }}>
                    <View style={{ flexDirection: "column", padding: 5, backgroundColor: "#d9a877", width: '60%', borderTopRightRadius: 15, borderBottomRightRadius: 15 }}>
                        <Text style={{ fontWeight: "bold" }}>709-Ceramic Coat Rims</Text>
                        <Text>Devon Vamderhart</Text>
                        <Text>09:00 AM - 12:00PM</Text>
                    </View>
                    <View style={{ padding: 2, paddingTop: 8, flexDirection: "row" }}>
                        <View style={{ flexDirection: "column", alignItems: "center" }}>
                            <Text style={{ fontSize: 12 }}>Due</Text>
                            <RadioButton
                                value="first"
                                color="white"
                                status={checked === 'first' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('first')}
                            />
                        </View>
                        <View style={{ flexDirection: "column", alignItems: "center" }}>
                            <Text style={{ fontSize: 12 }}>In Progress</Text>
                            <RadioButton
                                value="second"
                                status={checked === 'second' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('second')}
                            />
                        </View>
                        <View style={{ flexDirection: "column", alignItems: "center" }}>
                            <Text style={{ fontSize: 12 }}>Done</Text>
                            <RadioButton
                                value="third"
                                status={checked === 'third' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('third')}
                            />
                        </View>
                    </View>
                </View>
                <View style={{ width: "100%", flexDirection: "row", backgroundColor: "#e0ddda", marginTop: 10 }}>
                    <View style={{ flexDirection: "column", padding: 5, backgroundColor: "#d9a877", width: '60%', borderTopRightRadius: 15, borderBottomRightRadius: 15 }}>
                        <Text style={{ fontWeight: "bold" }}>709-Ceramic Coat Rims</Text>
                        <Text>Devon Vamderhart</Text>
                        <Text>09:00 AM - 12:00PM</Text>
                    </View>
                    <View style={{ padding: 2, paddingTop: 8, flexDirection: "row" }}>
                        <View style={{ flexDirection: "column", alignItems: "center" }}>
                            <Text style={{ fontSize: 12 }}>Due</Text>
                            <RadioButton
                                value="first"
                                color="white"
                                status={checked === 'first' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('first')}
                            />
                        </View>
                        <View style={{ flexDirection: "column", alignItems: "center" }}>
                            <Text style={{ fontSize: 12 }}>In Progress</Text>
                            <RadioButton
                                value="second"
                                status={checked === 'second' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('second')}
                            />
                        </View>
                        <View style={{ flexDirection: "column", alignItems: "center" }}>
                            <Text style={{ fontSize: 12 }}>Done</Text>
                            <RadioButton
                                value="third"
                                status={checked === 'third' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('third')}
                            />
                        </View>
                    </View>
                </View>

            </ScrollView>

        </View>
    )
}

export default Bizbud;