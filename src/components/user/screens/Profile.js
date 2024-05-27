import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, Modal } from 'react-native'
import React from 'react';
import { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';

const Profile = ({ navigation }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    useFocusEffect(
        useCallback(() => {
            // Đóng Modal mỗi khi màn hình được focus lại
            setIsModalVisible(false);
        }, [])
    );

    const handleLogout = () => {
        Alert.alert(
            'Xác nhận đăng xuất',
            'Bạn có chắc chắn muốn đăng xuất?',
            [
                {
                    text: 'Hủy',
                    style: 'cancel',
                },
                {
                    text: 'Đồng ý',
                    onPress: () => {
                        // Thực hiện hành động đăng xuất ở đây 
                        navigation.navigate('Login');
                    },
                },
            ],
            { cancelable: false }
        );
    };

    return (
        <View>
            <ScrollView >
                <View style={styles.viewHeader}>
                    <TouchableOpacity onPress={() =>
                        navigation.goBack()}
                        style={{ marginStart: 20, marginTop: 20, }}>
                        <Image style={{ width: 34, height: 34, }} source={require("../../image/arrowleft.png")}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={{ marginStart: 200, marginTop: 25, }} source={require("../../image/bell.png")}></Image>
                    </TouchableOpacity>
                    <Text style={{ marginStart: 20, marginTop: 15, fontSize: 30 }}>|</Text>
                    <Image style={{ marginStart: 20, marginTop: 20, }} source={require("../../image/Picture.png")}></Image>
                    <TouchableOpacity>
                        <Image style={{ marginStart: 20, marginTop: 25, }} source={require("../../image/down.png")}></Image>
                    </TouchableOpacity>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={isModalVisible}
                        onRequestClose={() => {
                            setIsModalVisible(false);
                        }}
                    >
                        <TouchableOpacity
                            style={styles.modalContainer}
                            activeOpacity={1}
                            onPressOut={() => setIsModalVisible(false)}
                        >
                            <View style={styles.modalContent}>
                                <TouchableOpacity onPress={() =>
                                    navigation.navigate('Profile')}>
                                    <Text style={{ fontSize: 20 }}>Trang cá nhân</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() =>
                                    navigation.navigate('ChangePass')}>
                                    <Text style={{ fontSize: 20, marginTop: 10 }}>Đổi mật khẩu</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={handleLogout}>
                                    <Text style={{ fontSize: 20, marginTop: 10 }}>Đăng xuất</Text>
                                </TouchableOpacity>
                            </View>

                        </TouchableOpacity>
                    </Modal>
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