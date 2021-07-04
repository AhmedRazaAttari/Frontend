import React from 'react';
import {
    SafeAreaView,
    View,
    StyleSheet,
    Image,
    Text,
    Linking,
} from 'react-native';

import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import profile from '../assets/profile.jpg'

const CustomSidebarMenu = (props) => {
    const BASE_PATH =
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/';
    const proileImage = 'react_logo.png';

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/*Top Large Image */}
            <Image
                source={profile}
                style={{ width: 120, height: 120, borderRadius: 100, alignSelf: "center", margin: 15 }}
            />
            <Text style={{ fontSize: 22, fontWeight: "bold", textAlign: "center" }}>JOHN HENRY</Text>
            <DrawerContentScrollView {...props}>
                {/* <DrawerItemList {...props} /> */}
                <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center", marginBottom: 15, marginTop: 10 }}>
                    <View style={{ width: 120, padding: 5, backgroundColor: "#a2bdb4", justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontSize: 18, color: "white" }}>Check In</Text>
                    </View>
                    <View style={{ width: 120, padding: 5, backgroundColor: "#d9a877", justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontSize: 18, color: "white" }}>Check Out</Text>
                    </View>
                </View>
                <DrawerItem
                    label="Employees"
                    style={{ height: 40 }}
                    onPress={() => props.navigation.navigate("Employees")}
                />
                <DrawerItem
                    label="Product/Services"
                    style={{ height: 40 }}
                    onPress={() => props.navigation.navigate("Dashboard")}
                />
                <DrawerItem
                    label="Coupons"
                    style={{ height: 40 }}
                    onPress={() => props.navigation.navigate("Coupons")}
                />
                <DrawerItem
                    label="Virtual Shop"
                    style={{ height: 40 }}
                    onPress={() => props.navigation.navigate("VirtualShop")}
                />
                <DrawerItem
                    label="Developments"
                    style={{ height: 40 }}
                    onPress={() => props.navigation.navigate("BOUNCED")}
                />
            </DrawerContentScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    sideMenuProfileIcon: {
        resizeMode: 'center',
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        alignSelf: 'center',
    },
    iconStyle: {
        width: 15,
        height: 15,
        marginHorizontal: 5,
    },
    customItem: {
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default CustomSidebarMenu;