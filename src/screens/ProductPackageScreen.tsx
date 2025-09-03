import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import Svg, { Polygon } from "react-native-svg";
import ProductData from '../components/ProductData';
import { Shadow } from 'react-native-shadow-2';
import Card from '../components/Card';
const ProductPackageScreen = () => {
    return (
        <View style={styles.mainContainer}>
            {/* Header */}
            <View style={styles.headContainer}>
                <Image style={styles.iconImage} source={require('../assets/Vector.png')} />
                <Text style={styles.headText}>Product Packages</Text>
            </View>

            <FlatList
                data={ProductData}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) =><Card item={item} />}
                
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#fff",
        padding : 10
    },
    headContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        gap: 20,
    },
    iconImage: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
    headText: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#333',
    },
    container: {
        backgroundColor: "#EDEDED",
        borderRadius: 8,
        marginHorizontal: 10,
        marginVertical: 10,
        paddingBottom: 20,
        alignItems: "center",
        shadowColor: "#f7c744",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.4,
        shadowRadius: 10,
        elevation: 5,
        width: 157,
        height: 127,
        overflow: "hidden",
    },
    header: {
        width: "100%",
        height: 42.5,
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
    },
    headerText: {
        position: "absolute",
        // top: 20, // adjust to center vertically
        fontSize: 10,
        // left : 85,
        fontWeight: '500',
        color: "#FFFFFF",
    },
    cardContent: {
        width: "90%",
        // alignItems: "center",
        justifyContent: 'flex-start'
    },
    rate: {
        fontSize: 11,
        marginBottom: 3,
    },
    products: {
        fontSize: 10,
        marginBottom: 8,
    },
    about: {
        fontSize: 8,
        fontStyle: "italic",
        color: "#D19B00",
        marginBottom: 3,
        textAlign: "center",
    },
    bookButton: {
        backgroundColor: "#FFC107",
        paddingVertical: 4,
        textAlign: 'center',
        paddingHorizontal: 6,
        borderRadius: 20,
        width: 36,
        height: 13,
        // alignSelf: "center",
    },
    bookText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 5
    },
    bold: {
        fontWeight: "bold",
    },
    footerCon: {
        alignItems: 'center'
    }
});

export default ProductPackageScreen;
