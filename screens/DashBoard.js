import React, {Component}from 'react';
import { StyleSheet, Button, View, Text, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import firebase from'firebase';
import Constants from 'expo-constants';
import * as Font from 'expo-font';
import {Icon} from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { PieChart, BarChart, Grid, YAxis} from 'react-native-svg-charts';
import * as scale from 'd3-scale'

const screenHeight = Dimensions.get('window').height/3;
const screenWidth = Dimensions.get('window').width;

// labels component to be used in pie chart
const Labels = ({ slices, height, width }) => {
    return slices.map((slice, index) => {
        const { labelCentroid, pieCentroid, data } = slice;
        return (
            <Text
                key={index}
                x={pieCentroid[ 0 ]}
                y={pieCentroid[ 1 ]}
                fill={'white'}
                textAnchor={'middle'}
                alignmentBaseline={'middle'}
                fontSize={24}
                stroke={'black'}
                strokeWidth={0.2}
            >
            {data.amount}
            </Text>
        )
    })
}

// graph page 1 companent
// will be pie chart
const GraphPage1 = props => {
    let atk = JSON.parse(JSON.stringify(props.data));
    let sv = []
    atk.forEach(element => {
        sv.push(element.severity)
    });
    sv = sv.sort()
    let data2 = []
    var count = sv.reduce(function(n, val) {
        return n + (val === "1");
    }, 0);
    data2.push(count)
    count = sv.reduce(function(n, val) {
        return n + (val === "2");
    }, 0);
    data2.push(count)
    count = sv.reduce(function(n, val) {
        return n + (val === "3");
    }, 0);
    data2.push(count)
    count = sv.reduce(function(n, val) {
        return n + (val === "4");
    }, 0);
    data2.push(count)
    count = sv.reduce(function(n, val) {
        return n + (val === "5");
    }, 0);
    data2.push(count)
    const randomColor = () => ('#' + (Math.random() * 0xFFFFFF << 0).toString(16) + '000000').slice(0, 7)
    const pieData = data2
        .filter(value => value > 0)
        .map((value, index) => ({
        value,
        svg: {
            fill: randomColor(),
            onPress: () => console.log('press',index),
        },
        key: `pie-${index}`,
        }))
    return (
        <View style={styles.page}>
        <Text style={styles.pageTitle}>Severity</Text>
        <PieChart style={{ height: 200 }} data={ pieData }>
            <Labels/>
        </PieChart>
        </View>
    )
}

// graph page 2 component
// will be bar chart
const GraphPage2 = props => {
    let atk = JSON.parse(JSON.stringify(props.data));
    let sv = []
    atk.forEach(element => {
        sv.push(element.severity)
    });
    sv = sv.sort()
    let data2 = []
    var count = sv.reduce(function(n, val) {
        return n + (val === "1");
    }, 0);
    data2.push(count)
    count = sv.reduce(function(n, val) {
        return n + (val === "2");
    }, 0);
    data2.push(count)
    count = sv.reduce(function(n, val) {
        return n + (val === "3");
    }, 0);
    data2.push(count)
    count = sv.reduce(function(n, val) {
        return n + (val === "4");
    }, 0);
    data2.push(count)
    count = sv.reduce(function(n, val) {
        return n + (val === "5");
    }, 0);
    data2.push(count)
    data = []
    for(i = 0; i < data2.length; i++)
    {
        data.push({
        value: data2[i],
        label: `${i+1}`
        })
    }
    const randomColor = () => ('#' + (Math.random() * 0xFFFFFF << 0).toString(16) + '000000').slice(0, 7)
    return (
        <View style={styles.page}>
            <Text style={styles.pageTitle}>Severity</Text>
            <View style={{flexDirection: 'row', height: 200, paddingVertical: 16}}>
                <YAxis
                    data={data}
                    yAccessor={({ index }) => index}
                    scale={scale.scaleBand}
                    contentInset={{ top: 10, bottom: 10 }}
                    spacing={0.2}
                    formatLabel={(_, index) => data[ index ].label}
                />
                <BarChart
                    style={{ flex: 1, marginLeft: 8 }}
                    data={data}
                    horizontal={true}
                    yAccessor={({ item }) => item.value}
                    svg={{ fill: 'rgba(207, 0, 15, 0.8)' }}
                    contentInset={{ top: 10, bottom: 10 }}
                    spacing={0.2}
                    gridMin={0}
                >
                    <Grid direction={Grid.Direction.VERTICAL}/>
                </BarChart>
            </View>
        </View>
    )
}

// graph page 3 component
const GraphPage3 = props => {
    return (
        <View style={styles.page}>
            <Text style={styles.pageTitle}>Graph3</Text>
        </View>
    )
}

// graph page 4 compenent
const GraphPage4 = props => {
    return (
        <View style={styles.page}>
            <Text style={styles.pageTitle}>Graph4</Text>
        </View>
    )
}

// previous entry component
const PreviousEntry = props => {
    return (
        <View style={styles.entry}>
            <View style={styles.entryDetails}>
                <View style={styles.entryDetail}>
                    <Text style={styles.pageTitleHeader}>Date:</Text><Text style={styles.pageTitle}>{props.entry.date}</Text>
                </View>
                <View style={styles.entryDetail}>
                    <Text style={styles.pageTitleHeader}>Severity:</Text><Text style={styles.pageTitle}>{props.entry.severity}</Text>
                </View>
                <View style={styles.entryDetail}>
                    <Text style={styles.pageTitleHeader}>Duration:</Text><Text style={styles.pageTitle}>{props.entry.duration}</Text>
                </View>
                <View style={styles.entryDetail}>
                    <Text style={styles.pageTitleHeader}>Medication:</Text><Text style={styles.pageTitle}>{props.entry.medication}</Text>
                </View>
                <View style={styles.entryDetail}>
                    <Text style={styles.pageTitleHeader}>Activity Before:</Text><Text style={styles.pageTitle}>{props.entry.activityBefore}</Text>
                </View>
                <View style={styles.entryDetail}>
                    <Text style={styles.pageTitleHeader}>Activity Duration:</Text><Text style={styles.pageTitle}>{props.entry.activityDuration}</Text>
                </View>
                <View style={styles.entryDetail}>
                    <Text style={styles.pageTitleHeader}>Notes:</Text><Text style={styles.pageTitle}>{props.entry.notes}</Text>
                </View>
            </View>
            <TouchableHighlight underlayColor={"#9e0000"} style={styles.entryButton} onPress={props.prev}>
                <Ionicons style={styles.entryButtonIcon} name={'ios-arrow-forward'} size={50}/>
            </TouchableHighlight>
        </View>
    )
}

//  main DashBoard class
export default class DashBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state ={};
    }

    // on mount load custom font asset
    componentDidMount() {
        Font.loadAsync({
            'Abel' : require('./assets/fonts/Abel-Regular.ttf'),
        })
    }  

    // navigate to view attacks
    viewPrevious = () => {
        //console.log("VIEWING PREVIOUS")
        this.props.navigation.navigate('ViewAttacks');
    }

    // render method
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.sectionHeader}>Statistics</Text>
                </View>
                <View>
                    <ScrollView pagingEnabled horizontal showsHorizontalScrollIndicator={false}>
                        <GraphPage1 data={this.props.screenProps.attacks}/>
                        <GraphPage2 data={this.props.screenProps.attacks}/>
                        <GraphPage3/>
                        <GraphPage4/>
                    </ScrollView>
                </View>
                <View>
                    <Text style={styles.sectionHeader}>Previous Entry</Text>
                    <PreviousEntry prev={this.viewPrevious} entry={this.props.screenProps.attacks[this.props.screenProps.attacks.length-1]}/>
                </View>
                {/*<Button title="Sign Out" onPress={()=> firebase.auth().signOut()}/>*/}
            </View>
        );
    }
}

// styles
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
    pageTitleHeader: {
        margin: 4,
        marginLeft: 15,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    pageTitle: {
        margin: 4,
        fontSize: 18,
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
        shadowOpacity: 0.5,
        paddingLeft: 15,
        elevation: 5,
    },
    entryButtonIcon: {
        color : 'black',
    },
    entryDetails: {
        //backgroundColor: '#909234',
        flex: 1,
        justifyContent: 'space-between',
        //alignContent: 'left',
        flexDirection: 'column',
    },
    entryDetail: {
        flexDirection: 'row',
        alignContent: 'space-between',
        //padding: 5
    }
});