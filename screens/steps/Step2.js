// Step 2 of Add Attack form

import React, { Component } from "react";
import Constants from 'expo-constants';
import { TextInput, Button, TouchableOpacity, Dimensions, Slider, Text, View, StyleSheet, StatusBar } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

//  main Step2 component class
export class Step2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            medication: '',
            dosage: '',
            quantity: '',
            activityBefore: '',
            activityDuration: ''
        };
    }

    // on mound update state from props
    componentDidMount() {
        const { getState } = this.props;
        const state = getState();
        //console.log("TCL: step2 -> componentDidMount -> state", state);
    }

    // save state and go to next step
    nextStep = () => {
        const { next, saveState } = this.props;
        saveState({ 
            medication: this.state.medication,
            dosage: this.state.dosage,
            quantity: this.state.quantity,
            activityBefore: this.state.activityBefore,
            activityDuration: this.state.activityDuration,
        });
        next();
    };

    // render method
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerContent}>
                    <Text style={styles.header}>
                        Medication:
                    </Text>
                    <TextInput placeholder="Ex: Xanax" style={{
                        margin: 10,
                        fontSize: 18,
                        fontWeight: 'bold',
                        textAlign: 'left',
                        borderColor: 'red',
                        padding: 2,
                        paddingLeft: 10,
                        borderWidth: 1,
                        color: 'white'
                        }}
                        onChangeText={(text)=>{this.setState({medication: text})}}/>
                    <View style={styles.line}>
                        <Text style={{
                            paddingLeft: 10,
                            textAlign:'left',
                            fontSize: 14,
                            fontWeight: 'bold',
                            color: "white"
                        }}>Dosage</Text>
                        <Text style={{
                            paddingLeft:275,
                            fontSize: 14,
                            fontWeight: 'bold',
                            color: 'white'
                        }}>Amount</Text>
                    </View>
                    <View style={styles.line}>
                        <TextInput placeholder="0" style={{
                            margin: 12,
                            fontSize: 18,
                            fontWeight: 'bold',
                            textAlign: 'center',
                            borderColor: 'red',
                            borderWidth: 1,
                            width: 50,
                            color: 'white'
                            }}
                            keyboardType='numeric'
                            onChangeText={(text)=>{this.setState({dosage: text})}}/>
                        <Text style={{fontSize: 14, paddingTop: 20, paddingLeft: 0, color: "white"}}>mg</Text>
                        <Text style={{paddingLeft: 225}}></Text>
                        <TextInput placeholder='0' style={{
                            margin: 12,
                            fontSize: 18,
                            fontWeight: 'bold',
                            textAlign: 'center',
                            borderColor: 'red',
                            borderWidth: 1,
                            width: 50,
                            color: 'white'
                            }}
                            keyboardType='numeric'
                            onChangeText={(text)=>{this.setState({quantity: text})}}/>
                    </View>
                    <View style={{paddingTop: 25}}/>
                        <Text style={styles.header}>
                            Activity Before Attack:
                        </Text>
                        <Text style={{
                            paddingLeft:10,
                            fontSize: 14,
                            fontWeight: 'bold',
                            paddingTop: 5,
                            color: "white"}}>Name:</Text>
                        <TextInput placeholder="Ex: Homework" style={{
                            margin: 10,
                            fontSize: 18,
                            fontWeight: 'bold',
                            textAlign: 'left',
                            borderColor: 'red',
                            padding: 2,
                            paddingLeft: 10,
                            borderWidth: 1,
                            color: 'white'
                            }}
                            onChangeText={(text)=>{this.setState({activityBefore: text})}}/>
                        <Text style={{
                            paddingLeft:10,
                            fontSize: 14,
                            fontWeight: 'bold',
                            paddingTop: 5,
                            color: 'white'}}>Duration:</Text>
                        <TextInput placeholder="Ex: 3 hours" style={{
                            margin: 10,
                            fontSize: 18,
                            fontWeight: 'bold',
                            textAlign: 'left',
                            borderColor: 'red',
                            borderWidth: 1,
                            padding: 2,
                            paddingLeft: 10,
                            color: 'white'
                            }}
                            onChangeText={(text)=>{this.setState({activityDuration: text})}}/>
                    </View>
                    <View style={styles.bottomNavButtons}>
                        <TouchableOpacity style={styles.navButton} onPress={this.props.back}>
                            <Ionicons name={'ios-arrow-back'} size={40} color={'white'} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.navButton} onPress={this.nextStep}>
                            <Ionicons name={'ios-arrow-forward'} size={40} color={'white'} />
                        </TouchableOpacity>
                    </View>
            </View>
        );
    }
}

// styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'top',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#232323',
        padding: 8,
    },
    line: {
        flexDirection: 'row',
    },
    paragraph: {
        margin: 12,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'left',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    header : {
        fontSize : 36,
        color: '#FFFFFF',
        fontWeight: 'bold',
        //fontFamily: 'Abel',
        paddingLeft: 10,
        paddingBottom: 8,
        paddingTop: 8,
    },
    buttonRight: {
        height: 35,
        width: 50,
        //alignContent: 'right',
        backgroundColor:'red',
        borderColor: 'black',
        borderWidth: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerContent: {
        flex: 1
    },
    bottomNavButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        //backgroundColor: 'orange'
        //flexDirection: "row-reverse"
    },
    navButton: {
        borderRadius: 50,
        width: 50,
        height: 50,
        backgroundColor: "red",
        alignContent: 'center',
        justifyContent: "space-around",
        paddingLeft: 18
    }
});

export default Step2;