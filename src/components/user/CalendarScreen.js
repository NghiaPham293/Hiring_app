import { Button, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Modal } from 'react-native';
import React, { useState } from 'react';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { LocaleConfig } from 'react-native-calendars';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const CalendarScreen = () => {
    return (
        <ScrollView >
            <View style={styles.viewHeader}>
                <TouchableOpacity>
                    <Image style={{ marginStart: 20, marginTop: 25, }} source={require("../../components/image/menu.png")}></Image>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={{ marginStart: 200, marginTop: 25, }} source={require("../../components/image/bell.png")}></Image>
                </TouchableOpacity>
                <Text style={{ marginStart: 20, marginTop: 15, fontSize: 30 }}>|</Text>
                <Image style={{ marginStart: 20, marginTop: 20, }} source={require("../../components/image/Picture.png")}></Image>
                <TouchableOpacity>
                    <Image style={{ marginStart: 20, marginTop: 25, }} source={require("../../components/image/down.png")}></Image>
                </TouchableOpacity>
            </View>
            <View style={styles.viewBodyContainer}>
                <Text style={styles.viewTextHome}>Timekeeping</Text>
                <View>
                        <Calendar style={{borderRadius: 10, elevation: 4, margin: 20}}
                        onDayPress={date =>{
                            console.log(date)
                        }}
                       />                    
                </View>
                <TouchableOpacity style={styles.viewApply}>
                    <Text style={{ color: '#FFF', fontSize: 16, fontWeight: '700' }}>Hoàn tất</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.viewCancel}>
                    <Text style={{ color: 'black', fontSize: 16, fontWeight: '700' }}>Hủy</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
};

export default CalendarScreen;

const styles = StyleSheet.create({
    viewCancel:{
        marginStart: 45,
        marginTop: 20,
        width: "80%",
        height: 62,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center',
        borderWidth:1
    },
    viewApply: {
        marginStart: 45,
        marginTop: 31,
        width: "80%",
        height: 62,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1C1C1C',
        justifyContent: 'center',
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
