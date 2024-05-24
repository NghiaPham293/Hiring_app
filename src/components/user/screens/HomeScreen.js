import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, Alert, Modal } from 'react-native';
import React, { useState, useCallback } from 'react';
// import { useNavigation } from '@react-navigation/native';
import { ContextMenuView } from 'react-native-context-menu-view';
import { useFocusEffect } from '@react-navigation/native';

const Home = ({ navigation }) => {

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
        <ScrollView >
            <View style={styles.viewHeader}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Image style={{ marginStart: 20, marginTop: 25 }} source={require("../../image/menu.png")} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={{ marginStart: 200, marginTop: 25, }} source={require("../../image/bell.png")}></Image>
                </TouchableOpacity>
                <Text style={{ marginStart: 20, marginTop: 15, fontSize: 30 }}>|</Text>
                <View style={styles.container}>
                    <TouchableOpacity onPress={toggleModal} style={{ flexDirection: 'row' }}>
                        <Image style={{ marginStart: 20, marginTop: 20, }} source={require("../../image/Picture.png")}></Image>
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

            </View>

            <View style={styles.viewBodyContainer}>
                <Text style={styles.viewTextHome}>TRANG CHỦ</Text>
                <View style={styles.viewBody}>
                    <View style={styles.viewBoder}>
                        <Text style={{ color: '#232323', fontSize: 18, fontWeight: '600', marginStart: 20, marginTop: 14 }}>Sự kiện</Text>
                        <View style={styles.viewDOD}>
                            <TouchableOpacity>
                                <Image style={{ width: 16, height: 16, }} source={require("../../image/arrow.png")}></Image>
                            </TouchableOpacity>
                            <Text style={{ fontSize: 15, fontWeight: '600', marginStart: 10, marginEnd: 10, color: '#232323' }}>9 October, 2023</Text>
                            <TouchableOpacity>
                                <Image style={{ width: 16, height: 16, }} source={require("../../image/arrowright.png")}></Image>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.viewBoderEvents}>
                            <View style={{ backgroundColor: "#D9D9D9", height: 50, justifyContent: 'center', }}>
                                <Text style={{ fontSize: 15, fontWeight: '600', color: "#1C1C1C", textAlign: 'center' }}>Mon 9</Text>
                            </View>
                            <View style={{ marginTop: 20, marginStart: 10, flexDirection: 'row' }}>
                                <Image style={{ width: 25, height: 25, backgroundColor: "black", borderRadius: 10 }} source={require("../../image/cake.png")}></Image>
                                <Image style={{ width: 30, height: 30, marginStart: 10 }} source={require("../../image/Profile.png")}></Image>
                                <Image style={{ width: 30, height: 30, }} source={require("../../image/Profile2.png")}></Image>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 30, marginStart: 40 }}>
                            <Image style={{ width: 20, height: 20, backgroundColor: "black", borderRadius: 15 }} source={require("../../image/cake.png")}></Image>
                            <Text style={{ color: '#232323', fontSize: 15, fontWeight: '500', marginStart: 10 }}>Sinh nhật</Text>
                            <Image style={{ width: 20, height: 20, backgroundColor: "#7AAD4B", borderRadius: 15, marginStart: 20 }} source={require("../../image/medal.png")}></Image>
                            <Text style={{ color: '#232323', fontSize: 15, fontWeight: '500', marginStart: 10 }}>Kỉ niệm</Text>
                        </View>
                    </View>
                </View>
                <View >
                    <View style={styles.viewBoder2}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: '#232323', fontSize: 18, fontWeight: '600', marginStart: 20, marginTop: 14 }}>Tin tức</Text>
                            <Text style={{ color: '#232323', fontSize: 18, fontWeight: '500', marginStart: 210, marginTop: 14 }}>Xem hết</Text>
                        </View>
                        <View style={styles.viewBoderNew}>
                            <View>
                                <Text style={{ fontSize: 14, fontWeight: '600', color: "#1C1C1C", marginStart: 14, marginTop: 14 }}>Use of Company Property Policy</Text>
                                <View style={{ flexDirection: 'row', marginTop: 10, marginStart: 10 }}>
                                    <Image style={{ width: 20, height: 20 }} source={require("../../image/calendar.png")}></Image>
                                    <Text style={{ fontSize: 14, fontWeight: '400', marginStart: 10 }}>25 Sep 2023 </Text>
                                    <Text style={{ marginStart: 20 }}>|</Text>
                                    <Text style={{ fontSize: 14, fontWeight: '400', marginStart: 10 }}>John Doe </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.viewBoderNew}>
                            <View>
                                <Text style={{ fontSize: 14, fontWeight: '600', color: "#1C1C1C", marginStart: 14, marginTop: 14 }}>Company Vehicle Policy</Text>
                                <View style={{ flexDirection: 'row', marginTop: 10, marginStart: 10 }}>
                                    <Image style={{ width: 20, height: 20 }} source={require("../../image/calendar.png")}></Image>
                                    <Text style={{ fontSize: 14, fontWeight: '400', marginStart: 10 }}>24 Sep 2023 </Text>
                                    <Text style={{ marginStart: 20 }}>|</Text>
                                    <Text style={{ fontSize: 14, fontWeight: '400', marginStart: 10 }}>John Doe </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.viewBoderNew}>
                            <View>
                                <Text style={{ fontSize: 14, fontWeight: '600', color: "#1C1C1C", marginStart: 14, marginTop: 14 }}>Security Policy</Text>
                                <View style={{ flexDirection: 'row', marginTop: 10, marginStart: 10 }}>
                                    <Image style={{ width: 20, height: 20 }} source={require("../../image/calendar.png")}></Image>
                                    <Text style={{ fontSize: 14, fontWeight: '400', marginStart: 10 }}>23 Sep 2023 </Text>
                                    <Text style={{ marginStart: 20 }}>|</Text>
                                    <Text style={{ fontSize: 14, fontWeight: '400', marginStart: 10 }}>John Doe </Text>
                                </View>
                            </View>
                        </View>

                    </View>
                </View>
                <View>
                    <View style={styles.viewBoder3}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: '#232323', fontSize: 18, fontWeight: '600', marginStart: 20, marginTop: 14 }}>Người nghỉ hôm nay</Text>
                            <Text style={{ color: '#232323', fontSize: 18, fontWeight: '500', marginStart: 120, marginTop: 14 }}>Xem hết</Text>
                        </View>
                        <View style={styles.viewItemOff}>
                            <Image style={{ width: 40, height: 40 }} source={require("../../image/Profile.png")}></Image>
                            <View style={{ marginStart: 10, }}>
                                <Text style={{ fontSize: 15, fontWeight: '500', color: "#232323" }}>John Doe</Text>
                                <Text style={{ fontSize: 13, fontWeight: '400', color: "#6C6C6C" }}>25 Oct - 27 Oct</Text>
                            </View>
                        </View>
                        <View style={styles.viewItemOff}>
                            <Image style={{ width: 40, height: 40 }} source={require("../../image/Profile.png")}></Image>
                            <View style={{ marginStart: 10, }}>
                                <Text style={{ fontSize: 15, fontWeight: '500', color: "#232323" }}>John Doe</Text>
                                <Text style={{ fontSize: 13, fontWeight: '400', color: "#6C6C6C" }}>25 Oct - 27 Oct</Text>
                            </View>
                        </View>
                        <View style={styles.viewItemOff}>
                            <Image style={{ width: 40, height: 40 }} source={require("../../image/Profile.png")}></Image>
                            <View style={{ marginStart: 10, }}>
                                <Text style={{ fontSize: 15, fontWeight: '500', color: "#232323" }}>John Doe</Text>
                                <Text style={{ fontSize: 13, fontWeight: '400', color: "#6C6C6C" }}>25 Oct - 27 Oct</Text>
                            </View>
                        </View>
                        <View style={styles.viewItemOff}>
                            <Image style={{ width: 40, height: 40 }} source={require("../../image/Profile.png")}></Image>
                            <View style={{ marginStart: 10, }}>
                                <Text style={{ fontSize: 15, fontWeight: '500', color: "#232323" }}>John Doe</Text>
                                <Text style={{ fontSize: 13, fontWeight: '400', color: "#6C6C6C" }}>25 Oct - 27 Oct</Text>
                            </View>
                        </View>

                    </View>
                </View>
                <View style={{ marginBottom: 50 }}>
                    <View style={styles.viewBoder4}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: '#232323', fontSize: 18, fontWeight: '600', marginStart: 20, marginTop: 14 }}>New Members Today</Text>
                        </View>
                        <View style={styles.viewItemOff}>
                            <Image style={{ width: 40, height: 40 }} source={require("../../image/Profile.png")}></Image>
                            <View style={{ marginStart: 10, }}>
                                <Text style={{ fontSize: 15, fontWeight: '500', color: "#232323" }}>John Doe</Text>
                                <Text style={{ fontSize: 14, fontWeight: '400', color: "#6C6C6C" }}>Joining on 24 Oct 2023</Text>
                            </View>
                        </View>
                        <View style={styles.viewItemOff}>
                            <Image style={{ width: 40, height: 40 }} source={require("../../image/Profile2.png")}></Image>
                            <View style={{ marginStart: 10, }}>
                                <Text style={{ fontSize: 15, fontWeight: '500', color: "#232323" }}>John Doe</Text>
                                <Text style={{ fontSize: 13, fontWeight: '400', color: "#6C6C6C" }}>Joining on 24 Oct 2023</Text>
                            </View>
                        </View>


                    </View>
                </View>
            </View>


        </ScrollView>
    )
};

export default Home;

const styles = StyleSheet.create({


    modalContainer: {
        flex: 1,
        marginTop: 80,
        alignItems: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 40,
        borderRadius: 10,
        elevation: 5,
    },
    viewItemOff: {
        flexDirection: 'row',
        marginStart: 20,
        marginTop: 20,
    },
    viewBoderNew: {
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#D9D9D9",
        width: "90%",
        height: 90,
        marginStart: 20,
        marginTop: 24
    },
    viewBoderEvents: {
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#D9D9D9",
        width: "85%",
        height: 180,
        marginStart: 30,
        marginTop: 24
    },
    viewDOD: {
        flexDirection: 'row',
        borderRadius: 12,
        backgroundColor: "#D9D9D9",
        width: 180,
        height: 50,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewBodyContainer: {


    },
    viewBoder4: {
        width: "90%",
        height: 200,
        borderRadius: 12,
        borderWidth: 1,
        marginTop: 20,
        marginStart: 20,
        borderColor: '#D9D9D9',
        backgroundColor: '#FFFFFF',

    },
    viewBoder3: {
        width: "90%",
        height: 310,
        borderRadius: 12,
        borderWidth: 1,
        marginTop: 20,
        marginStart: 20,
        borderColor: '#D9D9D9',
        backgroundColor: '#FFFFFF',

    },
    viewBoder2: {
        width: "90%",
        height: 410,
        borderRadius: 12,
        borderWidth: 1,
        marginTop: 20,
        marginStart: 20,
        borderColor: '#D9D9D9',
        backgroundColor: '#FFFFFF'
    },
    viewBoder: {
        width: "90%",
        height: 360,
        borderRadius: 12,
        borderWidth: 1,
        marginTop: 20,
        marginStart: 20,
        borderColor: '#D9D9D9',
        backgroundColor: '#FFFFFF'
    },
    viewTextHome: {
        color: "#232323",
        fontSize: 24,
        fontWeight: '800',
        marginStart: 24,
        marginTop: 24,

    },
    viewHeader: {
        flexDirection: 'row',
        marginTop: 20,
        height: 100,
    }
});
