import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';


import SignInScreen from './screens/SignInScreen';
import DashBoard from './screens/DashBoard';
import LoadingScreen from './screens/LoadingScreen';

import firebase from 'firebase';
import {firebaseConfig} from './config'
firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  render() {
    return <AppNavigator/>;
  }
}

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  SignInScreen: SignInScreen,
  DashBoard: DashBoard,
}, { initialRouteName: "LoadingScreen"})

const AppNavigator  = createAppContainer(AppSwitchNavigator);