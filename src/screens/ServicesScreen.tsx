import { ScrollView, StyleSheet, Image, FlatList, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Dummy from '../components/Dummy'
import MainData from '../components/MainData';
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
                                <Image source={item.image} style={styles.sectionImage}></Image>

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
        marginBottom: 200
    },
    headContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 30,
        padding: 20
    },
    headText: {
        fontSize: 25,
        // color : 'blue',
        // fontFamily: 'Poppins-Bold'
    },
    storyContainer: {
        marginVertical: 10,
        paddingHorizontal: 10,
    },
    storyView: {
        alignItems: "center",
        marginRight: 15,
    },
    storyImage: {
        width: 70,
        height: 70,
        borderRadius: 35, // makes it circular
    },
    storyText: {
        marginTop: 5,
        fontSize: 15,
        fontWeight: "500",
        color: "#000",
        textAlign: "center",
        fontFamily: 'Poppins-Regular'
    },
    MainView: {
        backgroundColor: "rgba(147, 135, 135, 0.1)", // light grey with opacity
        borderRadius: 12,
        padding: 12,
        margin: 12,
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row",
        // iOS shadow
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.05)s", // very light grey line
    },
    sectionImage: {
        width: 150,
        height: 120,
        // borderRadius: 12,
        marginBottom: 5,
        resizeMode: "contain"
    },
    mainText: {
        fontSize: 17,
        color: "#333",
        textAlign: "center",
        fontFamily: 'Poppins-Bold'
    },
    rightContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    price: {
        fontSize: 15,
        fontFamily: 'Poppins-Bold'
    },
    desc: {
        fontSize: 12
    },
    bookButton: {
        backgroundColor: "#FFD700", // bright yellow
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 50,
        alignItems: "center",
        marginTop: 10,

        // Shadow for iOS
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,

        // Shadow for Android
        elevation: 1
    },
    bookButtonText: {
        color: "#fff", // white text
        fontSize: 16,
        fontWeight: "bold"
    }
});
