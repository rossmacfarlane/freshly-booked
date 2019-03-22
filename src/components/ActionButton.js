import React from 'react'
import { StyleSheet, Image, TouchableOpacity, View } from 'react-native'
import colors from '../utils/colors';

const ActionButton = (props) => {
    const { icon } = this.props
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => this.props.didClick(date) }>
                <Image style={ styles.image } source={require(icon)}
            />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: 40,
        height: 40,
        backgroundColor: colors.fbRed,
        borderRadius: 20,
        position: 'absolute',
        top: -20,
        right: -20
    }, 
    image: {
        width: 40,
        height: 40,
    }
})

export default CloseButton