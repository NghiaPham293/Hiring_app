import {  Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import React, { useState } from 'react';


const Settings = ({navigation}) => {
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
                <Image style={{ marginStart: 20, marginTop: 20, }} source={require("../../image/Picture.png")}></Image>
                <TouchableOpacity>
                    <Image style={{ marginStart: 20, marginTop: 25, }} source={require("../../image/down.png")}></Image>
                </TouchableOpacity>
            </View>

            <View style={styles.viewBodyContainer}>
                <Text style={styles.viewTextHome}>HOME</Text>
         
            </View>
        </ScrollView>
    )
};

export default Settings;

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
