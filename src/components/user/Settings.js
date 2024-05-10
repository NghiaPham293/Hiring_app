import { Button, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import React, { useState } from 'react';


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
                <Text style={styles.viewTextHome}>HOME</Text>
         
            </View>
        </ScrollView>
    )
};

export default CalendarScreen;

const styles = StyleSheet.create({
  
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
