import React from 'react'
import Login from '../screens/Login';
import Home from '../screens/HomeScreen';
import CalendarScreen from '../screens/CalendarScreen';
import ManageEmployee from '../screens/ManageEmloyee';
import ChangePass from '../screens/ChangePass';
import Profile from '../screens/Profile';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Settings from '../screens/Settings';
import History from '../screens/History';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
        screenOptions={{ headerShown: false }}
        // drawerContent={props => {
        //     <DrawerContentScrollView {...props}>
        //         <DrawerItemList {...props} />
        //         <DrawerItem
        //             label={'Calendar'}
        //             onPress={() => {
        //                 props.navigation.navigate(CalendarScreen);
        //             }}
        //         />
        //     </DrawerContentScrollView>
        // }

        >
            <Drawer.Screen name="Trang chủ" component={Home} />
            <Drawer.Screen name="Chấm công" component={CalendarScreen} />
            <Drawer.Screen name="Lịch sử chấm công" component={History} />
            <Drawer.Screen name="Quản lí nhân viên" component={ManageEmployee} />
            <Drawer.Screen name="Xin nghỉ phép" component={Settings} />
            <Drawer.Screen name="Book phòng họp" component={Settings} />

        </Drawer.Navigator>
    )
}

const AppStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Calendar" component={DrawerNavigator} />
            <Stack.Screen name="Manage" component={ManageEmployee} />
            <Stack.Screen name="ChangePass" component={ChangePass} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="History" component={History} />

        </Stack.Navigator>
    )
}

export default AppStack