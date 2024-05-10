import React from 'react';
import {
  SafeAreaView,
  Settings,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/components/user/Login';
import ChangePass from './src/components/user/ChangePass';
import Home from './src/components/user/HomeScreen';
import CalendarScreen from './src/components/user/CalendarScreen';
import ManageEmployee from './src/components/user/ManageEmloyee';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './src/components/user/Profile';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const HomeDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Calendar" component={CalendarScreen} />
    </Drawer.Navigator>
  );
}
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Calendar" component={CalendarScreen} />
        <Stack.Screen name="Manage" component={ManageEmployee} />
        <Stack.Screen name="ChangePass" component={ChangePass} /> */}
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;
