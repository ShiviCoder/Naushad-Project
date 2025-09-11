import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Shadow } from 'react-native-shadow-2';
import Button from '../components/Button';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";


const Payment = () => {
    const [selected, setIsSelected] = useState('card');
    const options = [
        { key: 'card', label: 'Credit / Debit Card' },
        { key: 'upi', label: 'UPI / Google pay / Paytm' },
        { key: 'wallet', label: 'Wallet / Salon Credits' }
    ]
    return (
        <View style={styles.mainContainer}>
            <View style={styles.headContainer}>
                <Icon name='chevron-back' size={24} color="#0e0d0dff" />
                <Text style={styles.headText}>Payment</Text>
            </View>

            <Shadow
                distance={5}
                startColor="#f7c744"
                offset={[0, 12]}
                style={styles.shadowContainer}
            >
                <View style={styles.container}>
                    <View style={styles.first}>
                        <Text style={styles.firstText}>Haircut</Text>
                        <Icon style={styles.icon} name="ellipse" size={5} color="#000" />
                        <Text style={[styles.firstText, { color: '#42BA86' }]}>Premium</Text>
                    </View>

                    <View style={styles.second}>
                        <Icon name="time-outline" size={21} color="#000" />
                        <Text style={styles.Text}>Fri, 15 Aug</Text>
                        <Icon style={styles.SndIcon} name="ellipse" size={5} color="#000" />
                        <Text style={styles.Text}>3:30pm</Text>
                    </View>

                    <View style={styles.third}>
                        <Icon name="person-outline" size={21} color="#000" />
                        <Text style={styles.Text}>Pro: Assigned before visit</Text>
                    </View>

                    <View style={styles.fourth}>
                        <Text style={styles.Text}>Add ons</Text>
                        <Text style={styles.Text}>₹1,498</Text>
                    </View>
                </View>
            </Shadow>


            <View style={styles.payment}>
                <Text style={styles.selectPayment}>Select Payment Method</Text>
                {options.map((option) => (
                    <TouchableOpacity
                        key={option.key}
                        style={styles.option}
                        onPress={() => setIsSelected(option.key)}
                        activeOpacity={0.7}
                    >
                        <View style={[styles.radioOuter, selected === option.key && styles.radioOuterSelected,]}>
                            {selected === option.key && <View style={styles.radioInner} />}
                        </View>
                        <Text style={[styles.label, styles.firstText]}>{option.label}</Text>
                    </TouchableOpacity>
                ))}
            </View>


            <View style={styles.total}>
                <Text style={styles.totalText}>Total Payable:</Text>
                <Text style={[styles.totalText, { fontWeight: '500' }]}>₹1,498</Text>
            </View>

            <View style={styles.pay}>
                <Button />
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerTxt}>By proceeding, you agree to Terms & Conditions</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: wp("4%"),
        paddingTop: hp("2%"),
    },
    headContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: hp("2%"),
        justifyContent: "flex-start",
    },
    headText: {
        fontSize: wp("5%"),
        fontWeight: "700",
        color: "#333",
        fontFamily: "Poppins-Bold",
        marginLeft: wp('30%')
    },
    container: {
        width: wp("90%"),        // ~350px on small phones, expands on bigger screens
        height: hp("23%"),       // keeps proportional height (instead of fixed 189px)
        borderRadius: wp("4%"),  // corner radius scales with screen
        backgroundColor: "#fff",
        padding: wp("5%"),
        marginVertical: hp("1%"),
        justifyContent: "space-between",
    },
    shadowContainer: {
        borderRadius: wp("4%"),
    },
    icon: {
        width: wp("8%"),
        textAlign: "center",
    },
    first: {
        flexDirection: "row",
        alignItems: "center",
    },
    firstText: {
        fontSize: wp("4.5%"),
        fontWeight: "500",
    },
    second: {
        flexDirection: "row",
        alignItems: "center",
        gap: wp("2%"),
    },
    Text: {
        fontSize: wp("4%"),
        fontWeight: "500",
    },
    SndIcon: {
        width: wp("8%"),
        textAlign: "center",
    },
    third: {
        flexDirection: "row",
        alignItems: "center",
        gap: wp("2%"),
    },
    fourth: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    payment: {
        paddingVertical: hp("4%"),
        marginTop: hp("5%"), // 👈 add this
    },
    selectPayment: {
        fontSize: wp("4.5%"),
        fontWeight: "600",
        fontFamily: "Poppins-Medium",
        marginBottom: hp("1%"),
    },
    option: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: hp("1%"),
    },
    radioOuter: {
        height: wp("5%"),
        width: wp("5%"),
        borderRadius: wp("2.5%"),
        borderWidth: 1,
        borderColor: "#999",
        alignItems: "center",
        justifyContent: "center",
        marginRight: wp("3%"),
    },
    radioInner: {
        height: wp("2.5%"),
        width: wp("2.5%"),
        borderRadius: wp("1.5%"),
        backgroundColor: "#050505ff",
    },
    label: {
        fontSize: wp("4%"),
        color: "#000",
        fontWeight: "500",
    },
    radioOuterSelected: {
        backgroundColor: "#fbbf24",
        borderWidth: 0,
    },
    total: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: hp("2%"),
        marginBottom : hp('4%')
    },
    totalText: {
        fontSize: wp("5%"),
        fontWeight: "600",
    },
    pay: {
        paddingVertical: hp("2%"),
    },
    footer: {
        paddingVertical: hp("1.5%"),
        alignItems: "center",
        justifyContent: "center",
    },
    footerTxt: {
        fontSize: wp("3%"),
        color: "#757575",
        fontWeight: "500",
        fontFamily: "Poppins-Medium",
        textAlign: "center",
    },
});

export default Payment;