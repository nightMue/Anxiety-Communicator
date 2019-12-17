import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Settings from './screens/Settings';
import AddAttack from './screens/AddAttack';
import ViewAttacks from './screens/ViewAttacks';
import DashBoard from './screens/DashBoard';
import SignInScreen from './screens/SignInScreen';
import LoadingScreen from './screens/LoadingScreen';
import attacks from "./attacks";

import firebase from 'firebase';
import {firebaseConfig} from './config'
firebase.initializeApp(firebaseConfig);

const mainNavigator = createBottomTabNavigator(
  {
    DashBoard: DashBoard,
    AddAttack: AddAttack,
    ViewAttacks: ViewAttacks,
    Settings: Settings
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName }  = navigation.state;
        let iconName;
        if(routeName === 'DashBoard'){
          iconName  = 'ios-home';
        }
        else if(routeName === 'AddAttack'){
          iconName = 'ios-add'
        }
        else if(routeName === 'ViewAttacks'){
          iconName = 'ios-list'
        }
        else {
          iconName = 'ios-settings'
        }
        return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />
      },
    }),
    tabBarOptions: {
      activeTintColor: '#e61610',
      inactiveTintColor: 'white',
      showLabel: false,
      style: {
        backgroundColor: '#232323',
        height: 50
      }
    },
  }
);

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  SignInScreen: SignInScreen,
  MainNavigator: mainNavigator,
}, { initialRouteName: "LoadingScreen"})

const AppNavigator  = createAppContainer(AppSwitchNavigator);

export default class App extends React.Component {
  state = {
    attacks: attacks
  }

  componentDidMount(){
    this.setState({attacks: attacks});
  }

  AddAttack = (state) => {
    let p = state;
    p.key = this.state.attacks.length
    p.ongoin = false
    let t = this.state.attacks.push(p)
  }

  render() {
    return <AppNavigator screenProps={{
      attacks: this.state.attacks,
      addAttack: this.AddAttack
    }}/>;
  }
}