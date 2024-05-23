import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
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
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        placeholder="   Email"
                        style={styles.viewTextInputEmail}
                    />
                </View>
                <View style={styles.viewEmail}>
                    <Text style={styles.viewTextEmail}>MẬT KHẨU</Text>
                </View>
                <View style={styles.viewTextInputPassword}>
                    <View style={styles.viewTextInputPass}>
                        <View>
                            <TouchableOpacity onPress={togglePasswordVisibility}>
                                <Image style={{ width: 25, height: 25, marginStart: 280, marginTop: 20 }} source={require("../../image/eye.png")}></Image>
                            </TouchableOpacity>
                        </View>
                        <TextInput
                            secureTextEntry={!showPassword}
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            placeholder="   Password"
                            style={{ marginTop: -40, }}
                        />
                    </View>
                </View>
                <TouchableOpacity onPress={() =>
                    navigation.navigate('ChangePass')}
                    style={styles.viewForgotPass}>
                    <Text style={{ color: '#005987' }}>Quên mật khẩu</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() =>
                    navigation.navigate('Calendar')}
                    style={styles.viewLogin}>
                    <Text style={{ color: '#FFF', fontSize: 14, fontWeight: '700' }}>Đăng nhập</Text>
                </TouchableOpacity>

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
    viewTextInputPass: {
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
        fontWeight: '600',
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
