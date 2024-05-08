import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.viewContainer}>
                <View>
                    <Text style={styles.viewText}>Welcome back!</Text>
                    <Text style={styles.viewText2}>Log in to continue manage your employee.</Text>
                </View>
            </View>
            <View style={styles.viewBody}>
                <View style={styles.viewEmail}>
                    <Text style={styles.viewTextEmail}>EMAIL</Text>
                </View>
                <View style={styles.viewTextInputPassword}>
                    <TextInput
                        // value={email}
                        // onChangeText={setEmail}
                        placeholder="   Email"
                        style={styles.viewTextInputEmail}
                    />
                </View>
                <View style={styles.viewEmail}>
                    <Text style={styles.viewTextEmail}>MẬT KHẨU</Text>
                </View>
                <View style={styles.viewTextInputPassword}>
                    <TextInput
                        // value={email}
                        // onChangeText={setEmail}
                        placeholder="   Password"
                        style={styles.viewTextInputEmail}
                    />
                </View>
                <TouchableOpacity style={styles.viewForgotPass}>
                    <Text style={{ color: '#005987' }}>Quên mật khẩu</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() =>
                    navigation.navigate('Manage')}
                    style={styles.viewLogin}>
                    <Text style={{ color: '#FFF', fontSize: 14, fontWeight: '700' }}>Đăng nhập</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', marginTop: 38, marginStart: 77 }}>
                    <View>
                        <Text style={{ marginStart: 24, color: '#646982', fontSize: 16, fontWeight: '400' }}>Chưa có tài khoản?</Text>
                    </View>
                    <TouchableOpacity >
                        <Text style={{ marginStart: 24, color: '#005987', fontSize: 14, fontWeight: '700' }}>ĐĂNG KÝ</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{ marginTop: 27, color: '#646982', fontSize: 16, fontWeight: '400', textAlign: 'center' }}>Hoặc</Text>
                </View>

            </View>
        </View>
    )

};

export default Login;

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
    },
    viewText: {
        fontSize: 30,
        fontWeight: '700',
        color: '#232323',
        alignSelf: 'center',
        marginTop: 12,
    },



});
