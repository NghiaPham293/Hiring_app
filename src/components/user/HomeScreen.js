import { Button, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


const Home = ({navigation}) => {

    return (
        <ScrollView >
            <View style={styles.viewHeader}>
                <TouchableOpacity onPress={()=>
                    navigation.goBack()}>
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
                <View style={styles.viewBody}>
                    <View style={styles.viewBoder}>
                        <Text style={{ color: '#232323', fontSize: 18, fontWeight: '600', marginStart: 20, marginTop: 14 }}>Events</Text>
                        <View style={styles.viewDOD}>
                            <TouchableOpacity>
                                <Image style={{ width: 16, height: 16, }} source={require("../../components/image/arrow.png")}></Image>
                            </TouchableOpacity>
                            <Text style={{ fontSize: 15, fontWeight: '600', marginStart: 10, marginEnd: 10, color: '#232323' }}>9 October, 2023</Text>
                            <TouchableOpacity>
                                <Image style={{ width: 16, height: 16, }} source={require("../../components/image/arrowright.png")}></Image>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.viewBoderEvents}>
                            <View style={{ backgroundColor: "#D9D9D9", height: 50, justifyContent: 'center', }}>
                                <Text style={{ fontSize: 15, fontWeight: '600', color: "#1C1C1C", textAlign: 'center' }}>Mon 9</Text>
                            </View>
                            <View style={{ marginTop: 20, marginStart: 10, flexDirection: 'row' }}>
                                <Image style={{ width: 25, height: 25, backgroundColor: "black", borderRadius: 10 }} source={require("../../components/image/cake.png")}></Image>
                                <Image style={{ width: 30, height: 30, marginStart: 10 }} source={require("../../components/image/Profile.png")}></Image>
                                <Image style={{ width: 30, height: 30, }} source={require("../../components/image/Profile2.png")}></Image>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 30, marginStart: 40 }}>
                            <Image style={{ width: 20, height: 20, backgroundColor: "black", borderRadius: 15 }} source={require("../../components/image/cake.png")}></Image>
                            <Text style={{ color: '#232323', fontSize: 15, fontWeight: '500', marginStart: 10 }}>Birthday</Text>
                            <Image style={{ width: 20, height: 20, backgroundColor: "#7AAD4B", borderRadius: 15, marginStart: 20 }} source={require("../../components/image/medal.png")}></Image>
                            <Text style={{ color: '#232323', fontSize: 15, fontWeight: '500', marginStart: 10 }}>Anniversary</Text>
                        </View>
                    </View>
                </View>
                <View >
                    <View style={styles.viewBoder2}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: '#232323', fontSize: 18, fontWeight: '600', marginStart: 20, marginTop: 14 }}>News</Text>
                            <Text style={{ color: '#232323', fontSize: 18, fontWeight: '500', marginStart: 210, marginTop: 14 }}>View all</Text>
                        </View>

                        <View style={styles.viewBoderNew}>
                            <View>
                                <Text style={{ fontSize: 14, fontWeight: '600', color: "#1C1C1C", marginStart: 14, marginTop: 14 }}>Use of Company Property Policy</Text>
                                <View style={{ flexDirection: 'row', marginTop: 10, marginStart: 10 }}>
                                    <Image style={{ width: 20, height: 20 }} source={require("../../components/image/calendar.png")}></Image>
                                    <Text style={{ fontSize: 14, fontWeight: '400', marginStart: 10 }}>25 Sep 2023 </Text>
                                    <Text style={{ marginStart: 20 }}>|</Text>
                                    <Text style={{ fontSize: 14, fontWeight: '400', marginStart: 10 }}>John Doe </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.viewBoderNew}>
                            <View>
                                <Text style={{ fontSize: 14, fontWeight: '600', color: "#1C1C1C", marginStart: 14, marginTop: 14 }}>Company Vehicle Policy</Text>
                                <View style={{ flexDirection: 'row', marginTop: 10, marginStart: 10 }}>
                                    <Image style={{ width: 20, height: 20 }} source={require("../../components/image/calendar.png")}></Image>
                                    <Text style={{ fontSize: 14, fontWeight: '400', marginStart: 10 }}>24 Sep 2023 </Text>
                                    <Text style={{ marginStart: 20 }}>|</Text>
                                    <Text style={{ fontSize: 14, fontWeight: '400', marginStart: 10 }}>John Doe </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.viewBoderNew}>
                            <View>
                                <Text style={{ fontSize: 14, fontWeight: '600', color: "#1C1C1C", marginStart: 14, marginTop: 14 }}>Security Policy</Text>
                                <View style={{ flexDirection: 'row', marginTop: 10, marginStart: 10 }}>
                                    <Image style={{ width: 20, height: 20 }} source={require("../../components/image/calendar.png")}></Image>
                                    <Text style={{ fontSize: 14, fontWeight: '400', marginStart: 10 }}>23 Sep 2023 </Text>
                                    <Text style={{ marginStart: 20 }}>|</Text>
                                    <Text style={{ fontSize: 14, fontWeight: '400', marginStart: 10 }}>John Doe </Text>
                                </View>
                            </View>
                        </View>

                    </View>
                </View>
                <View>
                    <View style={styles.viewBoder3}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: '#232323', fontSize: 18, fontWeight: '600', marginStart: 20, marginTop: 14 }}>Who’s Off Today</Text>
                            <Text style={{ color: '#232323', fontSize: 18, fontWeight: '500', marginStart: 120, marginTop: 14 }}>View all</Text>
                        </View>
                        <View style={styles.viewItemOff}>
                            <Image style={{ width: 40, height: 40 }} source={require("../../components/image/Profile.png")}></Image>
                            <View style={{marginStart: 10,}}>
                                <Text style={{ fontSize: 15, fontWeight:'500',color:"#232323"}}>John Doe</Text>
                                <Text style={{fontSize: 13, fontWeight:'400', color:"#6C6C6C"}}>25 Oct - 27 Oct</Text>
                            </View>
                        </View>
                        <View style={styles.viewItemOff}>
                            <Image style={{ width: 40, height: 40 }} source={require("../../components/image/Profile.png")}></Image>
                            <View style={{marginStart: 10,}}>
                                <Text style={{ fontSize: 15, fontWeight:'500',color:"#232323"}}>John Doe</Text>
                                <Text style={{fontSize: 13, fontWeight:'400', color:"#6C6C6C"}}>25 Oct - 27 Oct</Text>
                            </View>
                        </View>
                        <View style={styles.viewItemOff}>
                            <Image style={{ width: 40, height: 40 }} source={require("../../components/image/Profile.png")}></Image>
                            <View style={{marginStart: 10,}}>
                                <Text style={{ fontSize: 15, fontWeight:'500',color:"#232323"}}>John Doe</Text>
                                <Text style={{fontSize: 13, fontWeight:'400', color:"#6C6C6C"}}>25 Oct - 27 Oct</Text>
                            </View>
                        </View>
                        <View style={styles.viewItemOff}>
                            <Image style={{ width: 40, height: 40 }} source={require("../../components/image/Profile.png")}></Image>
                            <View style={{marginStart: 10,}}>
                                <Text style={{ fontSize: 15, fontWeight:'500',color:"#232323"}}>John Doe</Text>
                                <Text style={{fontSize: 13, fontWeight:'400', color:"#6C6C6C"}}>25 Oct - 27 Oct</Text>
                            </View>
                        </View>
                      
                    </View>
                </View>
                <View style={{ marginBottom: 50 }}>
                    <View style={styles.viewBoder4}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: '#232323', fontSize: 18, fontWeight: '600', marginStart: 20, marginTop: 14 }}>New Members Today</Text>
                        </View>
                        <View style={styles.viewItemOff}>
                            <Image style={{ width: 40, height: 40 }} source={require("../../components/image/Profile.png")}></Image>
                            <View style={{marginStart: 10,}}>
                                <Text style={{ fontSize: 15, fontWeight:'500',color:"#232323"}}>John Doe</Text>
                                <Text style={{fontSize: 14, fontWeight:'400', color:"#6C6C6C"}}>Joining on 24 Oct 2023</Text>
                            </View>
                        </View>
                        <View style={styles.viewItemOff}>
                            <Image style={{ width: 40, height: 40 }} source={require("../../components/image/Profile2.png")}></Image>
                            <View style={{marginStart: 10,}}>
                                <Text style={{ fontSize: 15, fontWeight:'500',color:"#232323"}}>John Doe</Text>
                                <Text style={{fontSize: 13, fontWeight:'400', color:"#6C6C6C"}}>Joining on 24 Oct 2023</Text>
                            </View>
                        </View>
                       
                      
                    </View>
                </View>
            </View>


        </ScrollView>
    )
};

export default Home;

const styles = StyleSheet.create({
    viewItemOff:{
        flexDirection:'row',
        marginStart: 20,
        marginTop: 20,
    },
    viewBoderNew: {
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#D9D9D9",
        width: "90%",
        height: 90,
        marginStart: 20,
        marginTop: 24
    },
    viewBoderEvents: {
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#D9D9D9",
        width: "85%",
        height: 180,
        marginStart: 30,
        marginTop: 24
    },
    viewDOD: {
        flexDirection: 'row',
        borderRadius: 12,
        backgroundColor: "#D9D9D9",
        width: 180,
        height: 50,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewBodyContainer: {
    

    },
    viewBoder4: {
        width: "90%",
        height: 200,
        borderRadius: 12,
        borderWidth: 1,
        marginTop: 20,
        marginStart: 20,
        borderColor: '#D9D9D9',
        backgroundColor: '#FFFFFF',
        
    },
    viewBoder3: {
        width: "90%",
        height: 310,
        borderRadius: 12,
        borderWidth: 1,
        marginTop: 20,
        marginStart: 20,
        borderColor: '#D9D9D9',
        backgroundColor: '#FFFFFF',
        
    },
    viewBoder2: {
        width: "90%",
        height: 410,
        borderRadius: 12,
        borderWidth: 1,
        marginTop: 20,
        marginStart: 20,
        borderColor: '#D9D9D9',
        backgroundColor: '#FFFFFF'
    },
    viewBoder: {
        width: "90%",
        height: 360,
        borderRadius: 12,
        borderWidth: 1,
        marginTop: 20,
        marginStart: 20,
        borderColor: '#D9D9D9',
        backgroundColor: '#FFFFFF'
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
    }
});
