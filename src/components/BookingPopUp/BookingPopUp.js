import React from 'react'
import { StyleSheet, View, Modal, Text, TextInput } from 'react-native'
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
import CloseButton from '../ActionButton';

const BookingPopUp = (props) => (
    <Modal visible={ props.display } animationType = "slide" 
           onRequestClose={ () => console.log('closed') } >
      <View style={styles.container}>
        <View style={styles.popUp}>
            <Text style={styles.description}>What name should your { props.time } table be booked under?</Text>
            <TextInput placeholder="ENTER NAME" onChangeText= {(text) => alert(`name is ${text}`)} />
            {/*  */}
            <ActionButton icon='../assets/img/cross.png' onClick={() => self.props.display = false} />
        </View>
      </View>
    </Modal>
  )
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
})

export default BookingPopUp