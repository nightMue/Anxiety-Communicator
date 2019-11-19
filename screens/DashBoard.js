import React, {Component}from 'react';
import { 
  StyleSheet,
  Button,
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import firebase from'firebase';
import Constants from 'expo-constants';
import * as Font from 'expo-font';
import {Icon} from 'react-native-elements'

const screenHeight = Dimensions.get('window').height/3;
const screenWidth = Dimensions.get('window').width;

const GraphPage1 = props => {
  return (
    <View style={styles.page}>
      <Text style={styles.pageTitle}>Graph1</Text>
    </View>
  )
}

const GraphPage2 = props => {
  return (
    <View style={styles.page}>
      <Text style={styles.pageTitle}>Graph2</Text>
    </View>
  )
}

const GraphPage3 = props => {
  return (
    <View style={styles.page}>
      <Text style={styles.pageTitle}>Graph3</Text>
    </View>
  )
}

const GraphPage4 = props => {
  return (
    <View style={styles.page}>
      <Text style={styles.pageTitle}>Graph4</Text>
    </View>
  )
}

const PreviousEntry = props => {
  return (
    <View style={styles.entry}>
      <View style={styles.entryDetails}>
        <Text style={styles.pageTitle}>Entry</Text>
        <Text style={styles.pageTitle}>Detail1</Text>
        <Text style={styles.pageTitle}>Detail2</Text>
      </View>
      <TouchableOpacity style={styles.entryButton} onPress={this.viewPrevious}>
        <Icon name='play-arrow' size={50}/>
      </TouchableOpacity>
    </View>
  )
}

viewPrevious = () => {
  console.log("VIEWING PREVIOUS")
}

export default class DashBoard extends React.Component {
  componentDidMount() {
    Font.loadAsync({
      'Abel' : require('./assets/fonts/Abel-Regular.ttf'),
    })
  }  
  
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.sectionHeader}>Statistics</Text>
        </View>
        <View>
          <ScrollView pagingEnabled horizontal showsHorizontalScrollIndicator={false}>
            <GraphPage1/>
            <GraphPage2/>
            <GraphPage3/>
            <GraphPage4/>
          </ScrollView>
        </View>
        <View>
          <Text style={styles.sectionHeader}>Previous Entry</Text>
          <PreviousEntry/>
        </View>
        {/*<Button title="Sign Out" onPress={()=> firebase.auth().signOut()}/>*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "#232323",
      paddingTop: Constants.statusBarHeight + 2,
      justifyContent: 'flex-start',
      padding: 8,
  },
  sectionHeader : {
    fontSize : 36,
    color: '#FFFFFF',
    fontWeight: 'bold',
    //fontFamily: 'Abel',
    paddingLeft: 10,
    paddingBottom: 8,
    paddingTop: 8
  },
  pageTitle: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  page: {
    backgroundColor: '#FFFFFF',
    height: screenHeight,
    width: screenWidth- 16 - 40,
    borderRadius: 20,
    marginLeft: 20,
    marginRight: 20
  },
  entry: {
    backgroundColor: '#FFFFFF',
    height: screenHeight,
    width: screenWidth- 16 - 40,
    borderRadius: 20,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  entryButton: {
    backgroundColor : '#FF0000',
    width: 50,
    height: screenHeight + 20,
    marginTop: -10,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    alignContent: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: {width: -5, height: 0},
    shadowOpacity: 0.5
  },
  entryButtonIcon: {
    paddingLeft: 10,
    fontSize: 40,
    fontWeight: 'bold'
  },
  entryDetails: {
    //backgroundColor: '#909234',
    flex: 1,
    justifyContent: 'flex-start',
    //alignContent: 'left',
    flexDirection: 'column',
  }
});
