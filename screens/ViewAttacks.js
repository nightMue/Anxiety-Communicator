import React from "react";
import { View, StyleSheet, Text, ScrollView, Dimensions } from "react-native";
import Constants from 'expo-constants';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const Page = props => {
    return (
      <View style={styles.page}>
        <View style={styles.pageTable}>
            <Text style={styles.subTitle}>Date:</Text><Text style={styles.data}>{props.attack.date}</Text>
        </View>
        <View style={styles.pageTable}>
            <Text style={styles.subTitle}>Severity:</Text><Text style={styles.data}>{props.attack.severity}</Text>
        </View>
        <View style={styles.pageTable}>
            <Text style={styles.subTitle}>Duration:</Text><Text style={styles.data}>{props.attack.duration}</Text>
            <Text style={styles.subTitle}>OnGoing:</Text>{props.attack.ongoing ? <View style={styles.squareFilled}/> : <View style={styles.squareNotFileld}/>}
        </View>
        <View style={styles.pageTable}>
            <Text style={styles.subTitle}>Medication:</Text><Text style={styles.data}>{props.attack.medication}</Text>
        </View>
        <View style={styles.pageTable}>
            <Text style={styles.subTitle}>Dosage:</Text><Text style={styles.data}>{props.attack.dosage}</Text>
        </View>
        <View style={styles.pageTable}>
            <Text style={styles.subTitle}>Quantity:</Text><Text style={styles.data}>{props.attack.quantity}</Text>
        </View>
        <View style={styles.pageTable}>
            <Text style={styles.subTitle}>Activity Before:</Text><Text style={styles.data}>{props.attack.activityBefore}</Text>
        </View>
        <View style={styles.pageTable}>
            <Text style={styles.subTitle}>Activity Duration:</Text><Text style={styles.data}>{props.attack.activityDuration}</Text>
        </View>
        <View style={styles.pageTable}>
            <Text style={styles.subTitle}>Notes:</Text><Text style={styles.data}>{props.attack.notes}</Text>
        </View>
      </View>
    )
  }
  

export default class ViewAttacks extends React.Component {
    state = {
        attacks: this.props.screenProps.attacks
    }

    componentDidUpdate() {
        if(this.state.attacks !== this.props.screenProps.attacks){
          this.setState({attacks: this.props.screenProps.attacks})
          //console.log(this.state.attacks)
        }
      }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.sectionHeader}>Entries</Text>
        </View>
        <ScrollView pagingEnabled horizontal showsHorizontalScrollIndicator={false}>
            {console.log(this.props.screenProps.attacks)}
            {this.props.screenProps.attacks.map((item) => (
                <Page key={item.key} attack={item} />
            ))}
          </ScrollView>
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
  text: {
    textAlign: "center"
  },
  sectionHeader : {
    fontSize : 36,
    color: '#FFFFFF',
    fontWeight: 'bold',
    //fontFamily: 'Abel',
    paddingLeft: 10,
    paddingBottom: 8,
    paddingTop: 8,
  },
  pageTitle: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  page: {
    backgroundColor: '#FFFFFF',
    height: screenHeight - 16 - 40 - 100,
    width: screenWidth - 16 - 40,
    borderRadius: 20,
    marginLeft: 20,
    marginRight: 20
  },
  subTitle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25
  },
  data: {
    color: 'black',
    fontSize: 25
  },
  pageTable: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  squareFilled: { 
    width: 40, 
    height: 40, 
    backgroundColor: 'red' 
  },
  squareNotFileld: { 
    width: 40, 
    height: 40, 
    backgroundColor: 'grey' 
  }
});