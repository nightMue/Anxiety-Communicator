import React from "react";
import { View, StyleSheet, Text, Animated, Easing } from "react-native";
import LottieView from 'lottie-react-native';


export default class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: new Animated.Value(0),
        };
    }

    componentDidMount() {
        this.props.navigation.addListener('didFocus', this.onScreenFocus.bind(this))
        Animated.timing(this.state.progress, {
            toValue: 1,
            duration: 5000,
            easing: Easing.linear,
        }).start();
    }

    onScreenFocus() {
        this.setState({progress: new Animated.Value(0)})
        Animated.timing(this.state.progress, {
            toValue: 1,
            duration: 5000,
            easing: Easing.linear,
        }).start();
    }

    render() {
        return (
        <View style={styles.container}>
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
            <Text style={styles.text}>Settings coming soon.</Text>
        </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#232323",
    justifyContent: "center",
    flex: 1
  },
  text: {
    color: "white",
    textAlign: "center"
  },
  loadingAnimation: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});