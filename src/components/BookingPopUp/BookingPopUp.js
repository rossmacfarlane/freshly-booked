import React from 'react'
import { StyleSheet, View, Modal, Text, TextInput } from 'react-native'
import colors from '../../utils/colors'
import fonts from '../../utils/fonts'
import icons from '../../utils/icons'
import ActionButton from '../ActionButton'

const BookingPopUp = (props) => {
    const { nameEntered } = props

    state = {
        name: ""
    }

    return (
        <Modal visible={ props.display } animationType = "slide" 
            onRequestClose={ () => console.log('closed') } >
        <View style={styles.container}>
            <View style={styles.popUp}>
                <Text style={styles.description}>What name should your { props.time } table be booked under?</Text>
                <TextInput style={styles.textBox} placeholder="ENTER NAME" onChangeText={(name) => state.name = name} />

                <ActionButton layout={{top: -20, right: -20}} icon= { require("../../assets/img/cross.png") } />

                <ActionButton layout={{bottom: -20, right: "40%"}} icon={ require("../../assets/img/tick.png") } onClick={() => nameEntered(state.name)} />

            </View>
        </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: colors.fbWhite,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    popUp: {
        backgroundColor: colors.fbYellow,
        width: 250,
        height: 250,
        borderRadius: 20
    },
    description: {
        fontFamily: fonts.SFProDisplayHeavy,
        marginTop: 20,
        marginLeft: 30,
        marginRight: 30,
        fontSize: 20,
        textAlign: 'center'
    },
    textBox: {
        fontFamily: fonts.SFProDisplayBold,
        fontSize: 20,
        textAlign: 'center',
        top: 30,
    }
})

export default BookingPopUp