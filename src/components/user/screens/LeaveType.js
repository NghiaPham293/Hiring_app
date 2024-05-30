import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, Modal, Alert, TextInput } from 'react-native';
import React, { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import DatePicker from 'react-native-date-picker';


const LeaveType = ({ navigation }) => {
    const [reason, setReason] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [isStartDatePickerOpen, setStartDatePickerOpen] = useState(false);
    const [isEndDatePickerOpen, setEndDatePickerOpen] = useState(false);
    const handleSubmit = () => {
        const timeDifference = (endDate - startDate) / (1000 * 60 * 60); // Chênh lệch thời gian tính bằng giờ
        if (timeDifference < 4) {
            Alert.alert('Lỗi', 'Thời gian nghỉ phải tối thiểu là 4 tiếng.');
        } else {
            Alert.alert(
                'Thông tin đơn xin nghỉ phép',
                `Lí do: ${reason}\nBắt đầu nghỉ: ${startDate.toLocaleString()}\nKết thúc nghỉ: ${endDate.toLocaleString()}`
            );
        }

    };
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
                <Text style={styles.viewTextHome}>Xin nghỉ phép</Text>
            </View>
            <View>
                <Text style={styles.label}>Lí do</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nhập lí do"
                    value={reason}
                    onChangeText={setReason}
                />

                <Text style={styles.label}>Ngày bắt đầu nghỉ</Text>
                <TouchableOpacity onPress={() => setStartDatePickerOpen(true)} style={styles.dateButton}>
                    <Text>{startDate.toDateString()}</Text>
                </TouchableOpacity>
                <DatePicker
                    modal
                    open={isStartDatePickerOpen}
                    date={startDate}
                    onConfirm={(date) => {
                        setStartDatePickerOpen(false);
                        setStartDate(date);
                    }}
                    onCancel={() => {
                        setStartDatePickerOpen(false);
                    }}
                />

                <Text style={styles.label}>Ngày kết thúc nghỉ</Text>
                <TouchableOpacity onPress={() => setEndDatePickerOpen(true)} style={styles.dateButton}>
                    <Text>{endDate.toDateString()}</Text>
                </TouchableOpacity>
                <DatePicker
                    modal
                    open={isEndDatePickerOpen}
                    date={endDate}
                    onConfirm={(date) => {
                        setEndDatePickerOpen(false);
                        setEndDate(date);
                    }}
                    onCancel={() => {
                        setEndDatePickerOpen(false);
                    }}
                />

                <TouchableOpacity style={styles.viewSubmit} onPress={handleSubmit}>
                    <Text style={{ color: '#FFF', fontSize: 16, fontWeight: '700' }}>Submit</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
};

export default LeaveType;

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
    viewSubmit: {
        marginStart: 45,
        marginTop: 31,
        width: "80%",
        height: 62,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1C1C1C',
        justifyContent: 'center',
        color: 'white',
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        color: "#1C1C1C",
        marginStart: 20, marginTop: 20
    },
    input: {
        height: 100,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 2,
        marginTop: 20,
        paddingStart: 10,
        alignSelf: 'center',
        borderRadius: 15,
    },
    dateButton: {
        padding: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 15,
        alignItems: 'center',
        marginBottom: 20,
        width: '80%',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 20,
        height: 60,

    },
    dateButtonText: {
        fontSize: 16,
        color: 'black',
        fontWeight: '500',
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
});
