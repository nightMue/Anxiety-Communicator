import React, { Component } from "react";
import Constants from 'expo-constants';
import { TextInput, Button, TouchableOpacity, Dimensions, Slider, Text, View, StyleSheet, StatusBar } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Step 3 component class
export class Step3 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: ''
        };
    }

    // on mound get prev state from props
    componentDidMount() {
        const { getState } = this.props;
        const state = getState();
        //console.log("TCL: step2 -> componentDidMount -> state", state);
    }

    // move to next step 
    nextStep = () => {
        const { next, saveState } = this.props;
        saveState({ 
            notes: this.state.notes
        });
        next();
    };

    // render method
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerContent}>
                    <Text style={styles.header}>
                        Notes
                    </Text>
                    <TextInput placeholder="Type notes here!" style={{
                        margin: 10,
                        fontSize: 18,
                        fontWeight: 'bold',
                        textAlign: 'left',
                        borderColor: 'red',
                        padding: 2,
                        paddingLeft: 10,
                        borderWidth: 1,
                        textAlignVertical: 'top',
                        height: Dimensions.get('window').height - 220,
                        color: 'white'
                        }}
                        onChangeText={(text)=>{this.setState({notes: text})}}/>
                </View>
                <View style={styles.bottomNavButtons}>
                    <TouchableOpacity style={styles.navButton} onPress={this.props.back}>
                        <Ionicons name={'ios-arrow-back'} size={40} color={'white'} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navButtonSave} onPress={this.nextStep}>
                        <Ionicons name={'md-checkmark'} size={40} color={'white'} />
                        <Text style={styles.naveButtonSaveText}>Save</Text>
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
    },
    navButtonSave: {
        borderRadius: 50,
        width: 120,
        height: 50,
        backgroundColor: "red",
        alignContent: 'center',
        justifyContent: "space-around",
        paddingLeft: 18,
        flexDirection: 'row'
    },
    naveButtonSaveText: {
        color: "white",
        fontWeight: 'bold',
        paddingTop: 10,
        paddingRight: 5,
        fontSize: 20
    }
});

export default Step3;