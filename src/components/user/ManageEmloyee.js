import { Button, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import React, { useState } from 'react';


const ManageEmployee = () => {
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
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.viewTextHome}>Manage Employees</Text>
                    <TouchableOpacity>
                        <Image style={{ backgroundColor: 'black', width: 35, height: 35, marginTop: 25, marginStart: 100, borderRadius: 5 }} source={require("../../components/image/plus.png")}></Image>
                    </TouchableOpacity>
                </View>

                <View>
                    <View style={styles.viewBoder}>
                        <View style={styles.viewInput}>
                            <Image style={{ width: 25, height: 25, margin:10, }} source={require("../../components/image/search.png")}></Image>
                            <TextInput
                                placeholder="Search Employee"
                            // value={ }
                            // onChangeText={ }
                            />
                        </View>
                        <View style={styles.viewInput2}>
                            <Text style={{color:'#232323', fontSize: 14, fontWeight: '400',margin:20, }} >All Departements</Text>
                            <Image style={{ width: 25, height: 25, marginStart:100,marginTop:15 }} source={require("../../components/image/down.png")}></Image>
                        </View>
                        <View style={styles.viewInput2}>
                            <Text style={{color:'#232323', fontSize: 14, fontWeight: '400',margin:20, }} >All Departements</Text>
                            <Image style={{ width: 25, height: 25, marginStart:100,marginTop:15 }} source={require("../../components/image/down.png")}></Image>
                        </View>
                        <View style={styles.viewInput2}>
                            <Text style={{color:'#232323', fontSize: 14, fontWeight: '400',margin:20, }} >All Departements</Text>
                            <Image style={{ width: 25, height: 25, marginStart:100,marginTop:15 }} source={require("../../components/image/down.png")}></Image>
                        </View>

                    </View>
                </View>
            </View>
        </ScrollView>
    )
};

export default ManageEmployee;

const styles = StyleSheet.create({
    viewInput2: {
        borderWidth: 1,
        borderRadius: 8,
        width: '80%',
        flexDirection: 'row',
        height: 60,
        alignSelf: 'center',
        marginTop: 20,
    },
    viewBoder: {
        width: "90%",
        height: "90%",
        borderRadius: 12,
        borderWidth: 1,
        marginTop: 20,
        marginStart: 20,
        borderColor: '#D9D9D9',
        backgroundColor: '#FFFFFF',
        marginBottom: 40,
    },
    viewInput: {
        borderWidth: 1,
        borderRadius: 8,
        width: '80%',
        flexDirection: 'row',
        height: 50,
        alignSelf: 'center',
        marginTop: 20,
        textAlign: 'center',
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
