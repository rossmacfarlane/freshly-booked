import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import colors from '../utils/colors';
import fonts from '../utils/fonts';
import getDateNumber from '../utils/dateHelper';
import { getDateDay } from '../utils/dateHelper';

class DateTab extends React.Component {

    render() {
        const { date } = this.props

        return (
            <TouchableOpacity onPress={() => this.props.didClick(date) }>
                <View style={styles.container}>
                    <View style={styles.roundedView}>
                        <Text style={styles.dayNumber}>{ getDateNumber(date) }</Text>
                    </View>
                    <View style={styles.textView}>
                        <Text style={styles.weekday}>{ getDateDay(date) }</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 5,
        marginRight: 5,
        justifyContent: 'space-between',
        // width: 70,
        height: 40,
        backgroundColor: colors.fbYellow,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    roundedView: {
        backgroundColor: colors.fbWhite,
        marginTop: 5,
        marginLeft: 5,
        marginBottom: 5,
        height: 25,
        width: 25,
        borderRadius: 15,
        // alignItems: 'center',
        // justifyContent: 'center',
    }, 
    textView: {
        height: 40,
        marginRight: 5,
        marginLeft: 5,
    }, 
    dayNumber: {
        fontFamily: fonts.SFProDisplayHeavy,
        marginLeft: 5,
        marginRight: 5,
        fontSize: 10,
        height: 30,
        marginTop: 5,
        marginBottom: 5,
    }, 
    weekday: {
        fontFamily: fonts.SFProDisplayBold,
        fontSize: 10,
        height: 40,
        marginRight: 5,
        marginLeft: 5,
        marginTop: 13,
        marginBottom: 5,
    }
})
export default DateTab