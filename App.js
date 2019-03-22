import React from "react";
import {
  StyleSheet,
  Platform,
  Image,
  Text,
  View,
  ScrollView
} from "react-native";
import bookings from "../freshly-booked/src/api/bookings";

import firebase from "react-native-firebase";
import DateTabContainer from "./src/components/DateTabContainer"
import fonts from './src/utils/fonts';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  async componentDidMount() {
    // TODO: You: Do firebase things
    // const { user } = await firebase.auth().signInAnonymously();
    // console.warn('User -> ', user.toJSON());
    // await firebase.analytics().logEvent('foo', { bar: '123'});
  }

  makeCallToGetBookingsForDay = (dayString) => {
    alert(`make call with ${dayString}`)
  }

  render() {
    return (
        <View style={styles.container}>
        
          <Image
                style={[styles.logo]}
                source={require('./assets/fbLogo.png')} 
                resizeMode="contain"/>
                <DateTabContainer requestBookings={ (dateString) => this.makeCallToGetBookingsForDay(dateString) } dates={["2019-03-18", "2019-03-19", "2019-03-20", "2019-03-21", "2019-03-22", "2019-03-23", "2019-03-24"]} />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    padding: 16
  },
  logo: {
    height: 160,
    width: '80%',
  },
  boldFont: {
    marginLeft: 16,
    marginTop:16,
    fontFamily: fonts.SFProDisplayBold,
    fontSize: 16
  },
  heavyFont: {
    marginLeft: 16,
    marginTop:16,
    fontFamily: fonts.SFProDisplayHeavy,
    fontSize: 16
  }
});
