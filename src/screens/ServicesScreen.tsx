import { ScrollView, StyleSheet, Image, FlatList, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Dummy from '../components/Dummy'
import MainData from '../components/MainData';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const ServicesScreen = () => {
    console.log(Dummy[0].image);
    console.log(MainData[0].title)
    return (
        <View style={styles.container}>

            <View style={styles.headContainer}>
                <Image source={require('../assets/Vector.png')} />
                <Text style={styles.headText}>Services</Text>
            </View>

            <View >
                <FlatList
                    data={Dummy}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ marginBottom: 20 }}
                    style={styles.storyContainer}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={styles.storyView}>
                                <Image source={item.image} style={styles.storyImage}></Image>
                                <Text style={styles.storyText}>{item.name}</Text>
                            </View>
                        );
                    }}
                />

            </View>

            <View >
                <FlatList
                    data={MainData}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={styles.MainView}>
                                <View style={styles.imgContainer}>
                                    <Image source={item.image} style={styles.sectionImage}></Image>
                                </View>

                                <View style={styles.rightContainer}>
                                    <Text style={styles.mainText}>{item.title}</Text>
                                    <Text style={styles.price}>₹{item.price}</Text>
                                    <Text style={styles.desc}>{item.description}</Text>
                                    <TouchableOpacity style={styles.bookButton}>
                                        <Text style={styles.bookButtonText}>Book Now</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        );
                    }}
                />
            </View>
        </View>

    )
}

export default ServicesScreen

const styles = StyleSheet.create({
    container: {
        marginBottom: hp('2%')
    },
    headContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: wp('30%'),
        paddingHorizontal: wp('5%'),
        paddingVertical: hp('2%')
    },
    headText: {
        fontSize: wp('6%'),
        // color : 'blue',
        // fontFamily: 'Poppins-Bold'
    },
    storyContainer: {
        marginVertical: hp('0.2%'),
        paddingHorizontal: wp('5%'),
    },
    storyView: {
        alignItems: "center",
        marginRight: wp('2%'),
    },
    storyImage: {
        width: wp('17%'),
        height: hp('8%'),
        borderRadius: wp('10%'), // makes it circular
    },
    storyText: {
        marginTop: hp('1%'),
        fontSize: wp('3.5%'),
        fontWeight: "500",
        color: "#000",
        textAlign: "center",
        fontFamily: 'Poppins-Regular'
    },
    MainView: {
        backgroundColor: "rgba(147, 135, 135, 0.1)", // light grey with opacity
        borderRadius: wp('3%'),
        // paddingVertical: hp('1%'),
        paddingHorizontal: wp('1%'),
        marginVertical: hp('2%'),
        marginHorizontal: wp('5%'),
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row",
        // iOS shadow
      // very light grey line
    },
    imgContainer: {
        height: hp('20%'),
        width: wp('35%'),
        justifyContent: "flex-end",
        alignItems: "center",
        overflow : 'hidden'
    },
    sectionImage: {
        width: '100%',
        alignSelf: 'flex-end',

        height: '90%',
        // borderRadius: 12,
        // marginBottom: 5,
        resizeMode: "cover"
    },
    mainText: {
        fontSize: wp('5%'),
        color: "#333",
        textAlign: "center",
        // fontFamily: 'Poppins-Medium',
        fontFamily: 'Poppins-Regular',
        fontWeight: '700'
    },
    rightContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    price: {
        fontSize: wp('4%'),
        fontFamily: 'Poppins-Medium'
    },
    desc: {
        fontSize: wp('3%')
    },
    bookButton: {
        backgroundColor: "#F6B745", // bright yellow
        paddingVertical: hp('0.5%'),
        paddingHorizontal: wp('3%'),
        borderRadius: wp('10%'),
        alignItems: "center",
        marginTop: hp('3%'),

        // Shadow for iOS
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,

        // Shadow for Android
        elevation: 4
    },
    bookButtonText: {
        color: "#fff", // white text
        fontSize: wp('3%'),
        fontWeight: "bold"
    }
});
