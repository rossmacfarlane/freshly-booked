import React from 'react'
import { StyleSheet, View, FlatList, Text, ActivityIndicator } from 'react-native'
import DateTab from './DateTab';
import colors from '../utils/colors';

class DateTabContainer extends React.Component {
    render() {
        const { dates } = this.props

        return (
            <View style={styles.container}>
                <FlatList
                    style={styles.list}
                    horizontal
                    ListEmptyComponent={
                        <ActivityIndicator
                            style={styles.loading}
                            size="small"
                            color={colors.fbGrey}
                        />
                    }
                    showsHorizontalScrollIndicator={false}
                    data={dates}
                    renderItem={({ item }) => (
                        <DateTab didClick={ (dateString) => this.props.requestBookings(dateString) } date={ item } />
                    )}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
    },
    container: {
        width: '100%',
        height: 60
    }
})

export default DateTabContainer