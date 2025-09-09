import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Shadow } from 'react-native-shadow-2';
import Button from '../components/Button';



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
                distance={3}
                startColor="#f7c744"
                offset={[10, 13]}
                style={styles.shadowContainer}
            >
                <View style={styles.container}>
                    <View style={styles.first}>
                        <Text style={styles.firstText}>Haircut</Text>
                        <Icon style={styles.icon} name="ellipse" size={10} color="#000" />
                        <Text style={[styles.firstText, { color: '#42BA86' }]}>Premium</Text>
                    </View>

                    <View style={styles.second}>
                        <Icon name="time-outline" size={21} color="#000" />
                        <Text style={styles.Text}>Fri, 15 Aug</Text>
                        <Icon style={styles.SndIcon} name="ellipse" size={10} color="#000" />
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
                        <View style={[styles.radioOuter,selected=== option.key && styles.radioOuterSelected,]}>
                            {selected === option.key && <View style={styles.radioInner} />}
                        </View>
                        <Text style={[styles.label,styles.firstText]}>{option.label}</Text>
                    </TouchableOpacity>
                ))}
            </View>


            <View style={styles.total}>
                <Text style={styles.totalText}>Total Payable:</Text>
                <Text  style={[styles.totalText,{fontWeight : '500'}]}>₹1,498</Text>
            </View>

            <View style={styles.pay}>
              <Button/>
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
        backgroundColor: '#fff',
        padding: 10,
        marginBottom: 20,
    },
    headContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        gap: 90,
    },
    headText: {
        fontSize: 20,
        fontWeight: '700',
        color: '#333',
        fontFamily: 'Poppins-Bold',
    },
    container: {
        width: 330,
        height: 189,
        padding: 20,
        margin: 10,
        flexDirection: 'column',
        gap: 14,
        borderRadius: 16,
        backgroundColor: '#fff'
    },
    shadowContainer: {
        borderRadius: 16,
    },
    icon: {
        width: 31,
        textAlign: 'center'
    },
    first: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: "baseline",
    },
    firstText: {
        fontSize: 20,
        fontWeight: '500'
    },
    second: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: "center",
        gap: 5
    },
    Text: {
        fontSize: 16,
        fontWeight: '500'
    },
    SndIcon: {
        width: 31,
        textAlign: 'center'
    },
    third: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: "center",
        gap: 5
    },
    fourth: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
    },
    payment: {
        padding: 20,
    },
    selectPayment: {
        fontSize: 20,
        fontWeight: '600',
        fontFamily: 'Poppins-Medium'
    },
    option: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 8,
    },
    radioOuter: {
        height: 18,
        width: 18,
        borderRadius: 9,
        borderWidth: 1,
        borderColor: "#999",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 12,
    },
    radioInner: {
        height: 8,
        width: 8,
        borderRadius: 5,
        backgroundColor: "#050505ff", // amber (yellow-orange) fill
    },
    label: {
        fontSize: 14,
        color: "#000",
        fontWeight: "500",
    },
    radioOuterSelected: {
        backgroundColor: "#fbbf24", // yellow filled background (#fbbf24 = amber-400)
        borderWidth: 0,
    },
    total  :{
        flexDirection : 'row',
        padding : 20,
        justifyContent : "space-between"
    },
    totalText : {
        fontSize : 24,
        fontWeight : 600
    },
    pay :{
        padding :20
    },
    footer : {
        padding : 20,
        alignItems : 'center',
        justifyContent : 'center'
    },
    footerTxt : {
        fontSize : 12,
        color : '#75757573',
        fontWeight : '500',
        fontFamily : 'Poppins-Medium'
    }
})
export default Payment;