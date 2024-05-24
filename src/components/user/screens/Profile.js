import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'

const Profile = ({navigation}) => {
    return (
        <View>
            <ScrollView >
                <View style={styles.viewHeader}>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <Image style={{ marginStart: 20, marginTop: 25 }} source={require("../../image/menu.png")} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={{ marginStart: 200, marginTop: 25, }} source={require("../../image/bell.png")}></Image>
                    </TouchableOpacity>
                    <Text style={{ marginStart: 20, marginTop: 15, fontSize: 30 }}>|</Text>
                    <Image style={{ marginStart: 20, marginTop: 20, }} source={require("../../image/Picture.png")}></Image>
                    <TouchableOpacity>
                        <Image style={{ marginStart: 20, marginTop: 25, }} source={require("../../image/down.png")}></Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.viewBodyContainer}>
                    <Text style={styles.viewTextHome}>Profile</Text>
                    <View style={styles.viewBoder}>
                        <Image style={{ marginStart: 20, marginTop: 20, alignSelf: 'center', width: 80, height: 80 }} source={require("../../image/Picture.png")}></Image>
                        <View style={{ alignItems: 'center', marginStart: 20, marginTop: 10 }}>
                            <Text style={{ fontSize: 18, fontWeight: "600", color: "#232323" }}>Jonh Doe</Text>
                            <Text style={{ fontSize: 16, fontWeight: "400", color: "#232323" }}>IT Helpdesk</Text>
                        </View>
                        <View style={{ width: "80%", borderWidth: 1, borderColor: "#D9D9D9", alignSelf: 'center', marginTop: 80 }}></View>
                        <View>
                            <View style={{ flexDirection: 'row', marginStart: 20, marginTop: 30 }}>
                                <Image source={require("../../image/at.png")}></Image>
                                <Text style={{ marginStart: 10, fontSize: 16, fontWeight: '400', color: '#232323' }}>abc@email.com</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginStart: 20, marginTop: 10 }}>
                                <Image source={require("../../image/phone.png")}></Image>
                                <Text style={{ marginStart: 10, fontSize: 16, fontWeight: '400', color: '#232323' }}>090909009</Text>
                            </View>
                        </View>
                        <View style={{ width: "80%", borderWidth: 1, borderColor: "#D9D9D9", alignSelf: 'center', marginTop: 30 }}></View>
                        <View>
                            <View style={{ marginStart: 20, marginTop: 30 }}>
                                <Text style={{ marginStart: 10, fontSize: 16, fontWeight: '400', color: '#6C6C6C' }}>Departement</Text>
                                <Text style={{ marginStart: 10, fontSize: 16, fontWeight: '500', color: '#232323' }}>IT</Text>
                            </View>
                            <View style={{ marginStart: 20, marginTop: 10 }}>
                                <Text style={{ marginStart: 10, fontSize: 16, fontWeight: '400', color: '#6C6C6C' }}>Manager</Text>
                                <Text style={{ marginStart: 10, fontSize: 16, fontWeight: '500', color: '#232323' }}>Chyna Jacobs</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.viewBoder2}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={{ backgroundColor: "#7AAD4B", width: 30, height: 30, borderRadius: 15, margin: 20 }} source={require("../../image/user.png")}></Image>
                            <Text style={{ fontSize: 16, fontWeight: "600", color: "#232323", marginTop: 20 }}>Personal Information</Text>
                            <TouchableOpacity>
                                <Text style={{ color: "#7AAD4B", fontSize: 15, fontWeight: "600", marginTop: 20, marginStart: 80 }}>Edit</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: "columm", width: 180, height: 360 }}>
                            <Text style={styles.viewText}>Full name</Text>
                            <Text style={styles.viewText}>Gender</Text>
                            <Text style={styles.viewText}>Date of Brith</Text>
                            <Text style={styles.viewText}>Marital Status</Text>
                            <Text style={styles.viewText}>Nationality</Text>
                            <Text style={styles.viewText}>National ID Number</Text>
                            <Text style={styles.viewText}>Personal Tax ID</Text>
                            <Text style={styles.viewText}>Email Address</Text>
                            <Text style={styles.viewText}>Social Insurance</Text>
                            <Text style={styles.viewText}>Health Insurance</Text>
                            <Text style={styles.viewText}>Phone Number</Text>
                        </View>

                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    viewText: {
        marginStart: 20,
        fontSize: 16,
        fontWeight: '400',
        color: '#6C6C6C',
        marginTop: 10,
    },
    viewBoder2: {
        width: "90%",
        height: 520,
        borderRadius: 12,
        borderWidth: 1,
        marginStart: 20,
        borderColor: '#D9D9D9',
        backgroundColor: '#FFFFFF',
        marginBottom: 40,
    },
    viewBoder: {
        width: "90%",
        height: 520,
        borderRadius: 12,
        borderWidth: 1,
        marginTop: 20,
        marginStart: 20,
        borderColor: '#D9D9D9',
        backgroundColor: '#FFFFFF',
        marginBottom: 40,
    },
    viewTextHome: {
        color: "#232323",
        fontSize: 24,
        fontWeight: '600',
        marginStart: 24,
        marginTop: 24,

    },
    viewHeader: {
        flexDirection: 'row',
        marginTop: 20,
        height: 100,
    }
})