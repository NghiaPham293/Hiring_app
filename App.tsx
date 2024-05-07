import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/components/user/login';
import ChangePass from './src/components/user/ChangePass';
import Home from './src/components/user/HomeScreen';
function App() {
  return (
    <SafeAreaView style={{flex:1}}>
     {/* <Login/> */}
     {/* <ChangePass/> */}
     <Home/>
    </SafeAreaView>
  );
}

export default App;
