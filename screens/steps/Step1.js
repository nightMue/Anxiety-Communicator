import React, { Component } from "react";
import Constants from 'expo-constants';
import { TextInput, Button, TouchableOpacity, Dimensions,
        Text, View, StyleSheet, StatusBar, Slider } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-datepicker';

const screenWidth = Dimensions.get('window').width;

class Step1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
        date: '',
        time: '',
        severity: 0,
        duration: 15,
    };
  }

  nextStep = () => {
    const { next, saveState } = this.props;
    // Save state for use in other steps
    saveState({ 
        date: this.state.date,
        time: this.state.time,
        severity: this.state.severity,
        duration: this.state.duration
    });

    // Go to next step
    next();
  };

  goBack() {
    const { back } = this.props;
    // Go to previous step
    back();
  }

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.containerContent}>
         <Text style={styles.header}>
          Date
        </Text>
        <DatePicker
            style={styles.DatePickerStyle}
            date={this.state.date}
            mode="date"
            placeholder="YYYY-MM-DD"
            onDateChange={(date) => {this.setState({date: date})}}
            customStyles={{
                dateInput:{
                    color: 'red',
                    backgroundColor: 'white',
                }
            }}
        />
        <DatePicker
            style={styles.DatePickerStyle}
            date={this.state.time}
            mode="time"
            placeholder="HH:mm"
            is24Hour={false}
            onDateChange={(time) => {this.setState({time: time})}}
            customStyles={{
                dateInput:{
                    color: 'red',
                    backgroundColor: 'white',
                }
            }}
        />
        <View style={{paddingTop: 25}}/>
        <Text style={styles.header}>
          Severity
        </Text>
        <View style={{paddingTop: 10}}/>
        <View style={styles.line}>
          <View style={{paddingLeft: 10}}>
            <TouchableOpacity style={styles.buttonRight} onPress={()=>this.setState({severity:1})}>
            <Text style={styles.buttonRightText}>1</Text>
            </TouchableOpacity>
          </View>
          <View style={{paddingLeft: 9}}>
            <TouchableOpacity style={styles.buttonRight} onPress={()=>this.setState({severity:2})}>
            <Text style={styles.buttonRightText}>2</Text>
            </TouchableOpacity>
          </View>
          <View style={{paddingLeft: 8}}>
            <TouchableOpacity style={styles.buttonRight} onPress={()=>this.setState({severity:3})}>
            <Text style={styles.buttonRightText}>3</Text>
            </TouchableOpacity>
          </View>
          <View style={{paddingLeft: 8}}>
            <TouchableOpacity style={styles.buttonRight} onPress={()=>this.setState({severity:4})}>
            <Text style={styles.buttonRightText}>4</Text>
            </TouchableOpacity>
          </View>
          <View style={{paddingLeft: 9}}>
            <TouchableOpacity style={styles.buttonRight} onPress={()=>this.setState({severity:5})}>
            <Text style={styles.buttonRightText}>5</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{paddingTop: 25}}/>
        <Text style={styles.header}>
          Duration
        </Text>
        <Slider
            style={styles.sliderStyle}
            minimumValue={0}
            maximumValue={60}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
            value={this.state.duration}
            step={1}
            thumbTintColor={'red'}
            onValueChange={(value)=> this.setState({duration: value})}
        />
        <View style={styles.durationView}>
            <Text style={styles.durationText}>
            {this.state.duration} minutes
            </Text>
        </View>
        </View>
        <View style={styles.bottomNavButtons}>
          <TouchableOpacity style={styles.navButton} onPress={this.nextStep}>
            <Ionicons name={'ios-arrow-forward'} size={40} color={'white'} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

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
      justifyContent: 'space-evenly'
    },
    paragraph: {
      margin: 12,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'left',
      borderBottomColor: 'white',
      color: 'white',
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
      borderRadius: 5,
      height: 35,
      width: 50,
      //alignContent: 'right',
      backgroundColor:'red',
      borderColor: 'black',
      borderWidth: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonRightText: {
        color: 'white',
        fontWeight: 'bold'
    },
    containerContent: {
        flex: 1
    },
    bottomNavButtons: {
        height: 50,
        //backgroundColor: 'orange'
        flexDirection: "row-reverse"
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
    DatePickerStyle: {
        width: screenWidth - 20,
        paddingBottom: 20,
    },
    sliderStyle: {
        width: screenWidth - 20,
        height: 50
    },
    durationView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flex: 1
    },
    durationText: {
        color: 'white',
        fontSize: 15,
    }
  });

export default Step1;