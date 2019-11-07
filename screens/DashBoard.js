import React, {Component}from 'react';
import { 
  StyleSheet,
  Button,
  View, 
} from 'react-native';
import firebase from'firebase';

export default class DashBoard extends Component {
    render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
          <Button title="Sign Out" onPress={()=> firebase.auth().signOut()}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "#FFFFFF",
      color: "#000000",
      justifyContent: 'center'
  }
});
