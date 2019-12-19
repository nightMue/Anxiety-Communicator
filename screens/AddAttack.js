// Add Attack Form Screen

import React from "react";
import { View, StyleSheet, Text } from "react-native";
import AnimatedMultistep from "react-native-animated-multistep";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";

// steps for form
const allSteps = [
    { name: "step 1", component: Step1},
    { name: "step 2", component: Step2},
    { name: "step 3", component: Step3},
]

// main AddAttack class
export default class AddAttack extends React.Component {
    constructor(props) {
        super(props);
        this.state ={};
    }

    // method to call when next is pressed
    onNext = () => {
        console.log("Next");
    }

    // method to call when back is pressed
    onBack = () => {
        console.log("Back");
    }

    // method to call when finished
    finish = state => {
        this.props.screenProps.addAttack(state);
    }

    // render method
    render() {
        return (
            <View style={styles.container}>
                <AnimatedMultistep
                    steps={allSteps}
                    onFinish={this.finish}
                    animate={true}
                    onBack={this.onBack}
                    onNext={this.onNext}
                />
            </View>
        );
    }
}

// styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#232323",
        justifyContent: "center",
        flex: 1
    },
    text: {
        textAlign: "center"
    }
});