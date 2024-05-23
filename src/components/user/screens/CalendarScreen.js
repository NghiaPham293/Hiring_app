import React, { useState, useEffect, useRef } from 'react';
import {  Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native';
import SwipeButton from 'rn-swipe-button';
import arrowRight from '../../image/arrowright.png';

const CalendarScreen = () => {
    const defaultStatusMessage = 'Swipe status appears here';
    const [swipeStatusMessage, setSwipeStatusMessage] = useState(defaultStatusMessage);
    const [markedDates, setMarkedDates] = useState({});
    const navigation = useNavigation();
    const [isCheckedIn, setIsCheckedIn] = useState(false);
    const [checkedInDate, setCheckedInDate] = useState('');
    const swipeButtonRef = useRef(null);
    const [notification, setNotification] = useState('');

    const updateSwipeStatusMessage = (message) => setSwipeStatusMessage(message);

    const onSwipeSuccess = () => {
        const today = new Date().toISOString().split('T')[0];
        if (!isCheckedIn) {
            // Check-in logic
            const newMarkedDates = { ...markedDates, [today]: { selected: true, selectedColor: 'green' } };
            setMarkedDates(newMarkedDates);
            setCheckedInDate(today);
            setIsCheckedIn(true);
            updateSwipeStatusMessage('Checked in!');
            setNotification('Check in thành công');
            setTimeout(() => setNotification(''), 3000);
            
        } else {
            // Check-out logic
            const newMarkedDates = { ...markedDates, [today]: { marked: true, dotColor: 'blue' } };
            setMarkedDates(newMarkedDates);
            updateSwipeStatusMessage('Checked out!');
            setIsCheckedIn(false);
            setNotification('Check out thành công');
            setTimeout(() => setNotification(''), 3000); // Reset notification after 5 seconds
        }
        
        if (swipeButtonRef.current) {
            setTimeout(() => {
                swipeButtonRef.current.reset();
            }, 5000); // Adding a delay to ensure the reset happens after the success animation
        }
        navigation.navigate('Home');
    };

    const handleCheckIn = () => {
        if (!isCheckOut) { // Kiểm tra nếu đã check out thì không cho phép check in
            setIsCheckedIn(true);
            updateSwipeStatusMessage('Checked in!');
            setNotification('');
        } else {
            setNotification('Bạn đã check out hôm nay. Không thể check in lại.');
            setTimeout(() => setNotification(''), 5000); // Reset notification after 5 seconds
        }
    };
    
    useEffect(() => {
        const now = new Date();
    const checkOutTime = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        17, // 5 giờ chiều
        0, // Phút
        0, // Giây
        0  // Millisecond
    );

    const timeToCheckOut = checkOutTime.getTime() - now.getTime();

    if (timeToCheckOut > 0) {
        // Nếu thời gian check out chưa đến, thì đặt một timeout để thực hiện
        const timeoutId = setTimeout(() => {
            handleCheckOut(); // Gọi hàm thực hiện check out
        }, timeToCheckOut);

        // Trả về hàm để xóa timeout khi component unmount
        return () => clearTimeout(timeoutId);
    }
}, []);

    return (
        <ScrollView>
            <View style={styles.viewHeader}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={{ marginStart: 20, marginTop: 25 }} source={require("../../image/menu.png")} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={{ marginStart: 200, marginTop: 25 }} source={require("../../image/bell.png")} />
                </TouchableOpacity>
                <Text style={{ marginStart: 20, marginTop: 15, fontSize: 30 }}>|</Text>
                <Image style={{ marginStart: 20, marginTop: 20 }} source={require("../../image/Picture.png")} />
                <TouchableOpacity>
                    <Image style={{ marginStart: 20, marginTop: 25 }} source={require("../../image/down.png")} />
                </TouchableOpacity>
            </View>
            <View style={styles.viewBodyContainer}>
                <Text style={styles.viewTextHome}>Timekeeping</Text>
                <View style={styles.viewCalendar}>
                    <Calendar
                        style={{ borderRadius: 10, elevation: 9, margin: 20 }}
                        onDayPress={date => console.log(date)}
                        markingType={'simple'}
                        markedDates={markedDates}
                    />
                </View>
                <View style={{ alignItems: 'center' }}>
                    <SwipeButton
                        ref={swipeButtonRef}
                        thumbIconImageSource={arrowRight}
                        thumbIconBackgroundColor="#FFFFFF"
                        width={330}
                        shouldResetAfterSuccess={true}
                        onSwipeStart={() => updateSwipeStatusMessage('Started!')}
                        onSwipeFail={() => updateSwipeStatusMessage('Failed!')}
                        title={isCheckedIn ? 'Check Out' : 'Check In'}
                        onSwipeSuccess={onSwipeSuccess}
                    />
                </View>
                <Text style={styles.notificationText}>{notification}</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Manage')} style={styles.viewCancel}>
                    <Text style={{ color: 'black', fontSize: 16, fontWeight: '700' }}>Cancel</Text>
                </TouchableOpacity>

                
            </View>
        </ScrollView>
    );
};

export default CalendarScreen;

const styles = StyleSheet.create({
    notificationText: {
        fontSize: 18,
        color: "green",
        alignSelf: "center",
    },
    viewCalendar: {
        marginTop: 30,
    },
    viewCancel: {
        marginStart: 45,
        marginTop: 20,
        width: "80%",
        height: 62,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center',
        borderWidth: 1,
    },
    missCheckInButton: {
        marginTop: 20,
        width: 330,
        height: 62,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FF0000',
        justifyContent: 'center',
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
    },
});
