import React from 'react'
import { StyleSheet, Image, TouchableOpacity, View } from 'react-native'
import colors from '../utils/colors';
// import icons from '../../utils/icons'

const ActionButton = (props) => {
    const { layout, icon } = props
    const containerStyle = { ...styles.container, ...layout }

    return (
        <View style={ containerStyle }>
            <TouchableOpacity onPress={() => props.onClick() }>
                <Image style={ styles.image } source={ icon }
            />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        backgroundColor: colors.fbRed,
        borderRadius: 25,
        position: 'absolute',
    }, 
    image: {
        width: 50,
        height: 50,
    }
})

export default ActionButton