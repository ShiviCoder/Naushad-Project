import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function Button() {
    return (
        <View>
            <TouchableOpacity style={styles.payBtn}>
                <Text style={styles.payTxt}>Pay Now</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    payBtn: {
        backgroundColor: '#F6B745',
        paddingVertical: 9,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12
    },
    payTxt: {
        fontSize: 15,
        fontWeight: '500',
        color: '#fff',
        fontFamily: 'Poppins-Medium'
    }
})