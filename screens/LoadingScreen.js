//  Loading Screen to check if user has accoutn signed in already

import React, {Component}from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

import firebase from 'firebase';

// main LoadingScreen class
export default class LoadingScreen extends Component {
    // on mount check the user for login
    componentDidMount() {
        this.checkIfLoggedIn();
        //this.debugNavigateNow();
    }

    // used to bypass google sign in for debug reasons
    debugNavigateNow = () => {
        this.props.navigation.navigate('MainNavigator');
    }
    
    // checks if user logged in then navigate to main app content
    checkIfLoggedIn = () => {
        firebase.auth().onAuthStateChanged(function(user)
        {
            if(user) {
                this.props.navigation.navigate('MainNavigator');
            } else {
                this.props.navigation.navigate('SignInScreen');
            }
        }.bind(this));
    }
    
    // render method
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large"/>
            </View>
        );
    }
}

// styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});