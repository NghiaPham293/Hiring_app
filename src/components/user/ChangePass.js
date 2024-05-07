import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';


const ChangePass = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.viewContainer}>
                <View>
                    <Text style={styles.viewText}>Create your new password</Text>
                    <Text style={styles.viewText2}>Make sure to create new strong password for your account!</Text>
                </View>
                <TouchableOpacity style={{marginStart: 20,marginTop: 20, }}>
                    <Image style={{width: 34, height: 34,}} source={require("../../components/image/arrowleft.png")}></Image>
                </TouchableOpacity>
            </View>
            <View style={styles.viewBody}>
                <View style={styles.viewEmail}>
                    <Text style={styles.viewTextEmail}>New Password</Text>
                </View>
                <View style={styles.viewTextInputPassword}>
                    <TextInput
                        // value={email}
                        // onChangeText={setEmail}
                        placeholder=" "
                        style={styles.viewTextInputEmail}
                    />
                    {/* <Image source={require("../../components/image/eye.png")}></Image> */}
                </View>
                <View style={styles.viewEmail}>
                    <Text style={styles.viewTextEmail}>Confirm Password</Text>
                </View>
                <View style={styles.viewTextInputPassword}>
                    <TextInput
                        // value={email}
                        // onChangeText={setEmail}
                        placeholder=" "
                        style={styles.viewTextInputEmail}
                    />
                </View>


                <TouchableOpacity style={styles.viewLogin}>
                    <Text style={{ color: '#FFF', fontSize: 16, fontWeight: '700' }}>Hoàn tất</Text>
                </TouchableOpacity>

            </View>
        </View>
    )

};

export default ChangePass;

const styles = StyleSheet.create({
    viewContainer: {
        marginTop: 128,
    },
    viewLogin: {
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
    viewForgotPass: {
        marginTop: 25,
        marginStart: 270,
    },
    viewTextInputEmail: {
        width: 327,
        height: 62,
        borderColor: '#9A9A9A',
        alignSelf: 'center',
        marginTop: 8,
        borderRadius: 8,
        borderWidth: 1,
    },
    viewTextEmail: {
        fontSize: 13,
        fontWeight: '400',
        color: '#32343E',
        marginStart: 44,
        marginTop: 24,
    },
    viewText2: {
        fontSize: 16,
        fontWeight: '400',
        color: '#9A9A9A',
        alignSelf: 'center',
        marginTop: 9,
        textAlign: 'center',
    },
    viewText: {
        fontSize: 30,
        fontWeight: '700',
        color: '#232323',
        alignSelf: 'center',
        marginTop: 12,
    },



});
