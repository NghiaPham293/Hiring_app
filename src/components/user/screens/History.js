import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Modal, Alert, FlatList } from 'react-native'
import React from 'react'
import { useState, useCallback, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';

var DataItem = [
    {

        'text': 'Check in',
        'time': '10:00 AM',
        'date': '12/02/2024',
    },
    {

        'text': 'Check out',
        'time': '17:00 PM',
        'date': '12/02/2024',
    },
    {

        'text': 'Check in',
        'time': '10:00 AM',
        'date': '12/02/2024',
    },
    {

        'text': 'Check out',
        'time': '17:00 PM',
        'date': '12/02/2024',
    },
    {

        'text': 'Check in',
        'time': '10:00 AM',
        'date': '12/02/2024',
    },
    {

        'text': 'Check out',
        'time': '17:00 PM',
        'date': '12/02/2024',
    },
    {

        'text': 'Check in',
        'time': '10:00 AM',
        'date': '12/02/2024',
    },
    {

        'text': 'Check out',
        'time': '17:00 PM',
        'date': '12/02/2024',
    },
    {

        'text': 'Check in',
        'time': '10:00 AM',
        'date': '12/02/2024',
    },
    {

        'text': 'Check out',
        'time': '17:00 PM',
        'date': '12/02/2024',
    },

]
const History = ({ navigation }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [focusedNumber, setFocusedNumber] = useState(null);
    const numbersPerPage = 4; // Số lượng số trên mỗi trang
    const numbers = Array.from({ length: 12 }, (_, i) => i + 1); // Dãy số từ 1 đến 20
    const totalPages = Math.ceil(numbers.length / numbersPerPage);
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
    useEffect(() => {
        setFocusedNumber(numbers[currentIndex]);
    }, [currentIndex]);
    const handlePress = (number) => {
        console.log('Pressed number:', number);
        setFocusedNumber(number);
        navigation.navigate('TargetScreen', { number });
    };
    const handleNextPage = () => {
        if (currentIndex < numbers.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };
    const displayedNumbers = []; if (currentIndex === 0) {
        displayedNumbers.push(numbers[0], numbers[1], '...', numbers[numbers.length - 1]);
    } else if (currentIndex === numbers.length - 1) {
        displayedNumbers.push(numbers[0], numbers[numbers.length - 2], numbers[numbers.length - 1]);
    } else {
        displayedNumbers.push(numbers[0], numbers[currentIndex], '...', numbers[numbers.length - 1]);
    }

    const [dataItem, setDataItem] = useState(DataItem);
    const renderItem = (val) => {
        const { id, text, time, date } = val.item;

        return (
            <View style={styles.viewItem}>
                <Text style={{ fontSize: 20, fontWeight: '700', color: "#00B907" }}>{text}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                    <Text style={{ fontSize: 16, fontWeight: '400', color: "black" }}>{time}</Text>
                    <Text style={{ fontSize: 16, fontWeight: '400', color: "black" }}>{date}</Text>
                </View>
                <View style={{ borderWidth: 1, borderColor: 'gray', marginTop: 20 }}></View>
            </View>
        )
    }
    return (
        <View >
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
                <Text style={styles.viewTextHome}>History</Text>
            </View>
            <View style={styles.containerNumber}>
                <TouchableOpacity style={styles.btnext} onPress={handlePreviousPage} disabled={currentIndex === 0}>
                    <Image style={{ width: 20, height: 20, }} source={require("../../image/arrow.png")}></Image>
                </TouchableOpacity>
                <View style={styles.grid}>
                    {displayedNumbers.map((number) => (
                        <TouchableOpacity
                            key={number}
                            style={[styles.gridItem,
                            focusedNumber === number && styles.focusedGridItem,
                            number === '...' && styles.dotsItem
                            ]}
                            onPress={() => number !== '...' && handlePress(number)}
                        >
                            <Text style={[styles.gridText, focusedNumber === number && styles.focusedGridText]}>{number}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <TouchableOpacity style={styles.btnext} onPress={handleNextPage} disabled={currentIndex === numbers.length - 1}>
                    <Image style={{ width: 20, height: 20, }} source={require("../../image/arrowright.png")}></Image>
                </TouchableOpacity>
            </View>
            <View>
                <FlatList
                    data={DataItem}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal={false}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    scrollEnabled={true}
                />
            </View>
        </View>
    )
}

export default History

const styles = StyleSheet.create({
    viewItem: {
        marginStart: 20,
        marginTop: 40,
        marginEnd: 20,
    },
    btnext: {
        width: 40,
        height: 40,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
    },
    focusedGridText: {
        color: 'white', // Màu sáng hơn cho ô đang focus
    },
    focusedGridItem: {
        backgroundColor: 'black', // Màu sáng hơn cho ô đang focus
    },
    containerNumber: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    gridItem: {
        width: 40,
        height: 40,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
    },
    gridText: {
        fontSize: 14,
        fontWeight: '500',
        color: 'black',
    },
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