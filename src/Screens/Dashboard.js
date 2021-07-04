import React from 'react';
import { Text, View, TextInput, Dimensions, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import homepage1 from '../assets/img.jpeg';
import homepage2 from '../assets/img2.jpeg';
import homepage3 from '../assets/img3.jpeg';


function Dashboard({navigation}) {
    return (
        <View
            style={{
                padding: 10,
                paddingTop: 15,
                backgroundColor: '#c7fcdj',
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').height,
            }}>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                <Entypo name="chevron-small-left" size={22} color="black" />
                <View
                    style={{
                        flexDirection: 'row',
                        padding: 10,
                        height: 40,
                        paddingLeft: 15,
                        borderRadius: 40,
                        backgroundColor: 'white',
                        width: "75%"
                    }}>
                    <Ionicons name="search-outline" size={24} color="black" />
                    <TextInput
                        placeholder="Find Something..."
                        style={{ borderWidth: 0, marginLeft: 10 }}
                    />
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("Payment")}>
                    <MaterialCommunityIcons name="car-2-plus" size={24} color="black" />
                </TouchableOpacity>

            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ padding: 10, justifyContent: "space-between", alignItems: "center", marginTop: 30, flexDirection: "row", flexWrap: "wrap" }}>
                    <View style={{ margin: 3, marginTop: 15, width: 90, justifyContent: "center", alignItems: "center" }}>
                        <MaterialCommunityIcons name="car-wash" size={31} color="#d9a877" />
                        <Text>Car Wash</Text>
                    </View>
                    <View style={{ width: 90, margin: 3, marginTop: 15, justifyContent: "center", alignItems: "center", elevation: 1 }}>
                        <Ionicons name="ios-car-sport-outline" size={31} color="#d9a877" />
                        <Text>Beauty</Text>
                    </View>
                    <View style={{ width: 90, margin: 3, marginTop: 15, justifyContent: "center", alignItems: "center", elevation: 1 }}>
                        <MaterialIcons
                            name="miscellaneous-services"
                            size={34}
                            color="#d9a877"
                        />
                        <Text>Service</Text>
                    </View>
                    <View style={{ width: 90, margin: 3, marginTop: 15, justifyContent: "center", alignItems: "center", elevation: 1 }}>
                        <Ionicons name="ios-car-sport-outline" size={31} color="#d9a877" />
                        <Text>Refit</Text>
                    </View>
                    <View style={{ width: 90, margin: 3, marginTop: 15, justifyContent: "center", alignItems: "center", elevation: 1 }}>
                        <Ionicons name="ios-car-sport-outline" size={31} color="#d9a877" />
                        <Text>Tire Repair</Text>
                    </View>
                    <View style={{ width: 90, margin: 3, marginTop: 15, justifyContent: "center", alignItems: "center", elevation: 1 }}>
                        <Ionicons name="ios-car-sport-outline" size={31} color="#d9a877" />
                        <Text>Waxing</Text>
                    </View>
                    <View style={{ width: 90, margin: 3, marginTop: 15, justifyContent: "center", alignItems: "center", elevation: 1 }}>
                        <Ionicons name="ios-car-sport-outline" size={31} color="#d9a877" />
                        <Text>Maintenance</Text>
                    </View>
                    <View style={{ width: 90, margin: 3, marginTop: 15, justifyContent: "center", alignItems: "center", elevation: 1 }}>
                        <Ionicons name="ios-car-sport-outline" size={31} color="#d9a877" />
                        <Text style={{ fontSize: 12 }}>Interior Cleaning</Text>
                    </View>
                    <View style={{ width: 90, margin: 3, marginTop: 15, justifyContent: "center", alignItems: "center", elevation: 1 }}>
                        <Ionicons name="ios-car-sport-outline" size={31} color="#d9a877" />
                        <Text>Classification</Text>
                    </View>
                </View>

                {/* <View style={{ padding: 10, justifyContent: "space-between", alignItems: "center", marginTop: 30, flexDirection: "row", flexWrap: "wrap" }}>
                <View style={{ margin: 3, marginTop: 15, width: 90, justifyContent: "center", alignItems: "center" }}>
                <MaterialCommunityIcons name="car-wash" size={31} color="#d9a877" />
                <Text>Car Wash</Text>
                </View>
                <View style={{ width: 90, margin: 3, marginTop: 15, justifyContent: "center", alignItems: "center", elevation: 1 }}>
                <Ionicons name="ios-car-sport-outline" size={31} color="#d9a877" />
                <Text>Beauty</Text>
                </View>
                <View style={{ width: 90, margin: 3, marginTop: 15, justifyContent: "center", alignItems: "center", elevation: 1 }}>
                <MaterialIcons
                name="miscellaneous-services"
                size={34}
                color="#d9a877"
                />
                <Text>Service</Text>
                </View>
                <View style={{ width: 90, margin: 3, marginTop: 15, justifyContent: "center", alignItems: "center", elevation: 1 }}>
                <Ionicons name="ios-car-sport-outline" size={31} color="#d9a877" />
                <Text>Refit</Text>
                </View>
                <View style={{ width: 90, margin: 3, marginTop: 15, justifyContent: "center", alignItems: "center", elevation: 1 }}>
                    <Ionicons name="ios-car-sport-outline" size={31} color="#d9a877" />
                    <Text>Tire Repair</Text>
                    </View>
                <View style={{ width: 90, margin: 3, marginTop: 15, justifyContent: "center", alignItems: "center", elevation: 1 }}>
                <Ionicons name="ios-car-sport-outline" size={31} color="#d9a877" />
                <Text>Waxing</Text>
                </View>
                <View style={{ width: 90, margin: 3, marginTop: 15, justifyContent: "center", alignItems: "center", elevation: 1 }}>
                <Ionicons name="ios-car-sport-outline" size={31} color="#d9a877" />
                <Text>Maintenance</Text>
                </View>
                <View style={{ width: 90, margin: 3, marginTop: 15, justifyContent: "center", alignItems: "center", elevation: 1 }}>
                <Ionicons name="ios-car-sport-outline" size={31} color="#d9a877" />
                <Text style={{ fontSize: 12 }}>Interior Cleaning</Text>
                </View>
                <View style={{ width: 90, margin: 3, marginTop: 15, justifyContent: "center", alignItems: "center", elevation: 1 }}>
                <Ionicons name="ios-car-sport-outline" size={31} color="#d9a877" />
                <Text>Classification</Text>
                </View>
            </View> */}

                <Image source={homepage1} style={{ alignSelf: "center", borderRadius: 20, marginTop: 20 }} />
                <Image source={homepage2} style={{ alignSelf: "center", borderRadius: 20, marginTop: 20 }} />


                <View style={{ flexDirection: "row", width: "100%", height: 50, justifyContent: "space-between", alignItems: "center", padding: 10, paddingTop: 20 }}>
                    <Text style={{ fontSize: 17, fontWeight: "bold" }}>Suggest</Text>
                    <Text style={{ fontSize: 17, fontWeight: "bold" }}>Beauty Car Wash</Text>
                    <Text style={{ fontSize: 17, fontWeight: "bold" }}>Car rental</Text>
                </View>


                <View style={{ padding: 15, flexDirection: "row" }}>
                    <Image source={homepage3} style={{ alignSelf: "center", borderRadius: 10 }} />
                    <View style={{ flexDirection: "column", padding: 10 }}>
                        <Text style={{ fontWeight: "bold", fontSize: 18 }}>Car MJ</Text>
                        <Text style={{ fontSize: 17, color: "grey" }}>2234 Bicetown Road, NY</Text>

                        <Text style={{ marginTop: 10, color: "grey" }}>04 Voucher</Text>
                        <Text style={{ color: "grey" }}>Return $300 BMW i8 scooter</Text>

                    </View>
                </View>
            </ScrollView>

            {/* <View
                style={{
                    padding: 10,
                    paddingTop: 20,
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                }}>
                <View
                    style={{
                        flexDirection: 'column',
                        alignItems: 'center',
                        margin: 2,
                        backgroundColor: 'white',
                        padding: 5,
                        width: 90,
                        height: 60
                    }}>
                    <MaterialCommunityIcons name="car-wash" size={31} color="black" />
                    <Text>Car Wash</Text>
                </View>
                <View
                    style={{
                        flexDirection: 'column',
                        alignItems: 'center',
                        margin: 2,
                        backgroundColor: 'white',
                        width: 90,
                        height: 60,
                        padding: 5,
                    }}>
                    <Ionicons name="ios-car-sport-outline" size={31} color="black" />
                    <Text>Beauty</Text>
                </View>
                <View
                    style={{
                        flexDirection: 'column',
                        alignItems: 'center',
                        margin: 2,
                        backgroundColor: 'white',
                        padding: 5,
                        width: 90,
                        height: 60
                    }}>
                    <MaterialIcons
                        name="miscellaneous-services"
                        size={34}
                        color="black"
                    />
                    <Text>Service</Text>
                </View>
                <View
                    style={{
                        flexDirection: 'column',
                        alignItems: 'center',
                        margin: 2,
                        backgroundColor: 'white',
                        padding: 5,
                        width: 90,
                        height: 60
                    }}>
                    <MaterialCommunityIcons name="car-wash" size={32} color="black" />
                    <Text>Reffit</Text>
                </View>
                <View
                    style={{
                        flexDirection: 'column',
                        alignItems: 'center',
                        margin: 2,
                        backgroundColor: 'white',
                        padding: 5,
                        minWidth: 90,
                    }}>
                    <MaterialCommunityIcons name="car-wash" size={32} color="black" />
                    <Text>Tire Repair</Text>
                </View>
                <View
                    style={{
                        flexDirection: 'column',
                        alignItems: 'center',
                        margin: 2,
                        backgroundColor: 'white',
                        padding: 5,
                        minWidth: 90,
                    }}>
                    <MaterialCommunityIcons name="car-wash" size={32} color="black" />
                    <Text>Waxing</Text>
                </View>
                <View
                    style={{
                        flexDirection: 'column',
                        alignItems: 'center',
                        margin: 2,
                        backgroundColor: 'white',
                        padding: 5,
                        minWidth: 90,
                    }}>
                    <MaterialCommunityIcons name="car-wash" size={32} color="black" />
                    <Text>Maintenance</Text>
                </View>
                <View
                    style={{
                        flexDirection: 'column',
                        alignItems: 'center',
                        margin: 2,
                        backgroundColor: 'white',
                        padding: 5,
                        minWidth: 90,
                    }}>
                    <MaterialCommunityIcons name="car-wash" size={32} color="black" />
                    <Text>Interior Cleaning</Text>
                </View>
                <View
                    style={{
                        flexDirection: 'column',
                        alignItems: 'center',
                        margin: 2,
                        backgroundColor: 'white',
                        padding: 5,
                        width: 70,
                    }}>
                    <MaterialCommunityIcons name="car-wash" size={32} color="black" />
                    <Text>Classification</Text>
                </View>
            </View> */}
        </View>
    );
}

export default Dashboard;
