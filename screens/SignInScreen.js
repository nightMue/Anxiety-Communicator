// Sign in screen

import React, {Component} from 'react';
import { StyleSheet, Text, View, Animated, Easing, Button, SafeAreaView } from 'react-native';
import LottieView from 'lottie-react-native';
import Constants from 'expo-constants';
import * as Google from 'expo-google-app-auth';
import firebase from 'firebase';

// main signinscreen class
export default class SignInScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: new Animated.Value(0),
        };
    }

    // checks if user is equal to firebase user retrieved
    isUserEqual = (googleUser, firebaseUser) => {
        if (firebaseUser) {
            var providerData = firebaseUser.providerData;
            for (var i = 0; i < providerData.length; i++) {
                if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
                    providerData[i].uid === googleUser.getBasicProfile().getId()) {
                    // we don't need to reauth the Firebase connection
                    return true;
                }
            }
        }
        return false;
    }

    // method to call on sign in with google user
    onSignIn = googleUser => {
        //console.log('Google Auth Response', googleUser);
        // we need to register an Observer on Firebase Auth to make sure auth is initialized
        var unsubscribe = firebase.auth().onAuthStateChanged(function(firebaseUser) {
        unsubscribe();
        // check if we are already signed-in Firebase with the correct user
        if (!this.isUserEqual(googleUser, firebaseUser)) {
            // build Firebase credential with the Google ID token
            var credential = firebase.auth.GoogleAuthProvider.credential(
                googleUser.idToken,
                googleUser.accessToken
            );
            // sign in with credential from the Google user
            firebase.auth().signInAndRetrieveDataWithCredential(credential).then(function(result){
                console.log('User Signed In: ' + result);
                if(result.additionalUserInfo.isNewUser){
                    firebase
                        .database()
                        .ref('/users/' + result.user.uid)
                        .set({
                            gmail: result.user.email,
                            first_name: result.additionalUserInfo.profile.given_name,
                            last_name: result.additionalUserInfo.profile.family_name,
                            created_at: Date.now()
                        })
                }else{
                    firebase
                        .database()
                        .ref('/users/' + result.user.uid).update({
                            last_logged_in: Date.now()
                        })
                }
            })
            .catch(function(error){
                // handle Errors here
                var errorCode = error.code;
                var errorMessage = error.message;
                // the email of the user's account used
                var email = error.email;
                // the firebase.auth.AuthCredential type that was used
                var credential = error.credential;
            });
        } else {
            console.log('User already signed-in Firebase.');
        }
        }.bind(this));
    }

    // async sign in with google authenticator
    signInWithGoogleAsync = async () => {
        try {
            const result = await Google.logInAsync({
                webClientId: '521047650973-6gt4uv15aqs2o1bvalpelviipsfh0qr1.apps.googleusercontent.com',
                androidClientId: '521047650973-c8kmoe8s3tmc6lnjj4o742lcv8p85ar9.apps.googleusercontent.com',
                behavior: 'web',
                scopes: ['profile', 'email'],
            });
  
            if (result.type === 'success') {
                console.log("HERE 1");
                this.onSignIn(result);
                return result.accessToken;
            } else {
                console.log("HERE 2: " + result.type);
                return { cancelled: true };
            }
        } catch (e) {
            console.log("HERE 3");
            return { error: true };
        }
    }

    // used for debug running to bypass google sign in
    debugNavigateNow = () => {
        this.props.navigation.navigate('MainNavigator');
    }

    // when  mounting start animation
    componentDidMount() {
        Animated.timing(this.state.progress, {
            toValue: 1,
            duration: 5000,
            easing: Easing.linear,
        }).start();
    }

    // render method
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.background}>
                <SafeAreaView style={styles.container}>
                <View style={styles.loadingAnimation}>
                    <LottieView 
                        source={require('./assets/loginAnimation.json')} 
                        autoPlay={true} 
                        loop={true} 
                        style={
                            {
                                height: 500,
                                width: 500
                            }
                        }
                    />
                </View>
                <View style={styles.button}>
                    <Button 
                        title="Sign In"
                        color="#e61610"
                        //onPress={()=>this.signInWithGoogleAsync()}
                        onPress={()=>this.debugNavigateNow()}
                    />
                </View>
                </SafeAreaView>
            </View>
        );
    }
}

// styles
const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#232323',
    },
    container: {
        marginTop: Constants.statusBarHeight,
        marginHorizontal: 16,
    },
    loadingAnimation: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        marginHorizontal: 50,
    }
});