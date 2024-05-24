import React, { useState, useEffect, useRef } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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
    const [isCheckedOut, setIsCheckedOut] = useState(false);
    const [checkedInDate, setCheckedInDate] = useState('');
    const swipeButtonRef = useRef(null);
    const [notification, setNotification] = useState('');
    const [checkInTime, setCheckInTime] = useState('');
    const [checkOutTime, setCheckOutTime] = useState('');

    const updateSwipeStatusMessage = (message) => setSwipeStatusMessage(message);

    const onSwipeSuccess = () => {
        const now = new Date();
        const currentTime = now.toLocaleString();
        const today = new Date().toISOString().split('T')[0];
        if (!isCheckedIn && !isCheckedOut) {
            const newMarkedDates = { ...markedDates, [today]: { selected: true, selectedColor: 'green' } };
            setMarkedDates(newMarkedDates);
            setIsCheckedIn(true);
            setCheckInTime(currentTime);
            updateSwipeStatusMessage('Checked in!');
            setNotification('Check in thành công');
        } else if (isCheckedIn && !isCheckedOut) {
            const newMarkedDates = { ...markedDates, [today]: { marked: true, dotColor: 'blue' } };
            setMarkedDates(newMarkedDates);
            setIsCheckedIn(false);
            setIsCheckedOut(true);
            setCheckOutTime(currentTime);
            updateSwipeStatusMessage('Checked out!');
            setNotification('Check out thành công');
        } else {
            setNotification('Bạn đã check out hôm nay. Không thể check in lại.');
        }

        if (swipeButtonRef.current) {
            setTimeout(() => {
                swipeButtonRef.current.reset();
            }, 1000); // Adding a delay to ensure the reset happens after the success animation
        }
        // navigation.navigate('Home');
    };

    // const handleCheckIn = () => {
    //     if (!isCheckOut) { // Kiểm tra nếu đã check out thì không cho phép check in
    //         setIsCheckedIn(true);
    //         updateSwipeStatusMessage('Checked in!');
    //         setNotification('');
    //     } else {
    //         setNotification('Bạn đã check out hôm nay. Không thể check in lại.');
    //         setTimeout(() => setNotification(''), 5000); // Reset notification after 5 seconds
    //     }
    // };

    const handleCheckOut = () => {
        const now = new Date();
        const today = now.toISOString().split('T')[0];
        const currentTime = now.toLocaleString();
        if (isCheckedIn) {
            const newMarkedDates = { ...markedDates, [today]: { marked: true, dotColor: 'blue' } };
            setMarkedDates(newMarkedDates);
            setIsCheckedIn(false);
            setCheckOutTime(currentTime);
            updateSwipeStatusMessage('Checked out!');
            setNotification('Check out thành công');
        } else {
            const newMarkedDates = { ...markedDates, [today]: { marked: true, dotColor: 'red' } };
            setMarkedDates(newMarkedDates);
            updateSwipeStatusMessage('Missed Check-out!');
            setNotification('Chưa chấm công');
        }
    };

    const handleMissedCheckIn = () => {
        const today = new Date().toISOString().split('T')[0];
        const newMarkedDates = { ...markedDates, [today]: { marked: true, dotColor: 'red' } };
        setMarkedDates(newMarkedDates);
        setNotification('Chưa chấm công');
    };
    useEffect(() => {
        const now = new Date();
        const checkInDeadline = new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate(),
            9, // 9 AM deadline for check-in
            0, // Minutes
            0, // Seconds
            0  // Milliseconds
        );
        const checkOutTime = new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate(),
            17, // 5 giờ chiều
            0, // Phút
            0, // Giây
            0  // Millisecond
        );

        const timeToCheckInDeadline = checkInDeadline.getTime() - now.getTime();
        const timeToCheckOut = checkOutTime.getTime() - now.getTime();

        if (timeToCheckInDeadline > 0) {
            const checkInTimeoutId = setTimeout(() => {
                if (!isCheckedIn) {
                    handleMissedCheckIn();
                }
            }, timeToCheckInDeadline);

            return () => clearTimeout(checkInTimeoutId);
        } else {
            if (!isCheckedIn) {
                handleMissedCheckIn();
            }
        }
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
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
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
                <Text style={styles.viewTextHome}>CHẤM CÔNG</Text>
                <View style={styles.viewCalendar}>
                    <Calendar
                        style={{ borderRadius: 10, elevation: 9, margin: 20 }}
                        onDayPress={date => console.log(date)}
                        markingType={'simple'}
                        markedDates={markedDates}
                    />
                </View>
                <View style={{ alignItems: 'center', marginTop: 40 }}>
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
                <Text style={styles.timestampText}>
                    {checkInTime ? `Checked in at: ${checkInTime}` : ''}
                </Text>
                <Text style={styles.timestampText}>
                    {checkOutTime ? `Checked out at: ${checkOutTime}` : ''}
                </Text>


            </View>
        </ScrollView>
    );
};

export default CalendarScreen;

const styles = StyleSheet.create({
    timestampText: {
        fontSize: 16,
        color: "black",
        alignSelf: "center",
        marginTop: 5,
    },
    notificationText: {
        fontSize: 18,
        color: "green",
        alignSelf: "center",
    },
    viewCalendar: {
        marginTop: 30,
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
