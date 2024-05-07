import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import LoginAdmin from './src/user/component/LoginAdmin';
import Register from './src/user/component/Register';
import Home from './src/user/component/Home';
import Search from './src/user/component/Search';
import OrderScreen from './src/user/component/OrderScreen';
import FavouriteScreen from './src/user/component/FavouriteScreen';
import CartScreen from './src/user/component/CartScreen';
import Test from './src/user/component/Test';
import BottomSheett from './src/user/component/BottomSheett';
import EvaluateScreen from './src/user/component/EvaluateScreen';

import NotificationModal from './src/user/component/NotificationModal';
import DeleteModel from './src/user/component/DeleteModel';
import ResetPassWord from './src/user/component/ResetPassword';
import NewPassword from './src/user/component/NewPassword';
import CheckToken from './src/user/component/CheckToken';
import SplashPage1 from './src/user/component/SplashPage1';
import Onboarding from './src/user/component/Onboarding';
import Login_Empty from './src/user/component/Login_Empty';
import ForgotPassword from './src/user/component/ForgotPassword';
import CheckOTP from './src/user/component/CheckOTP';
import SignUp from './src/user/component/SignUp';
import Location from './src/user/component/Location';
import HomePage from './src/user/component/HomePage';

function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      {/* <LoginAdmin/> */}
      {/* <Register/> */}
      <Home/>
      {/* <Search/> */}
      {/* <OrderScreen/> */}
      {/* <FavouriteScreen/> */}
      {/* <CartScreen/> */}
      {/* <Test/> */}
      {/* <BottomSheett/> */}
      {/* <EvaluateScreen/> */}
      {/* <NotificationModal/> */}
      {/* <DeleteModel/> */}
      {/* <ResetPassWord/> */}
      {/* <NewPassword/> */}
      {/* <CheckToken/> */}
      {/* <SplashPage1/> */}
      {/* <Onboarding/> */}
      {/* <Login_Empty/> */}
      {/* <ForgotPassword/> */}
      {/* <CheckOTP/> */}
      {/* <SignUp/> */}
      {/* <Location/> */}
      {/* <HomePage/> */}
    </SafeAreaView>
  );
}

export default App;
