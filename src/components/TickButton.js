import React from 'react'
import { StyleSheet, Image, TouchableOpacity, View } from 'react-native'
import colors from '../utils/colors';

const TickButton = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => this.props.didClick(date) }>
                <Image style={ styles.image } source={require('../assets/img/cross.png')}
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

export default TickButton