import {Platform} from 'react-native'

const fonts = {
    SFProDisplayBold: Platform.OS == 'ios' ? 'SFProDisplay-Bold' : 'SF-Pro-Display-Bold',
    SFProDisplayHeavy: Platform.OS == 'ios' ? 'SFProDisplay-Heavy' : 'SF-Pro-Display-Heavy',
}

export default fonts;