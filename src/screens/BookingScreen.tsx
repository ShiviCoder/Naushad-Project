import { View, Text, StyleSheet, Image, FlatList, ScrollView } from 'react-native';
import RadioButton from '../components/RadioButton';
import BookingAcceptCards from '../components/BookingAcceptCard';
import { BookingAcceptData, BookingPendingData } from '../components/BookingAcceptData';
import BookingPendingCard from '../components/BookingPendingCard';



const allBookings = [
    ...BookingAcceptData.map(item => ({ ...item, type: "accept" })),
    ...BookingPendingData.map(item => ({ ...item, type: "pending" })),
];
const BookingScreen = () => {

    return (
        <View style={styles.mainContainer}>
            <View style={styles.headContainer}>
                <Image style={styles.iconImage} source={require('../assets/Vector.png')} />
                <Text style={styles.headText}>Bookings</Text>
            </View>
            <RadioButton />
            <FlatList
                data={allBookings}
                style={styles.container}
                showsVerticalScrollIndicator = {false}
                contentContainerStyle={{ paddingBottom: 50 }}
                keyExtractor={(item, index) => item.id + "-" + index}
                renderItem={({ item }) =>
                    item.type === "accept"
                        ? <BookingAcceptCards item={item} />
                        : <BookingPendingCard item={item} />
                }
            />
        </View>
    )
}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#fff",
        // padding: 10
        // margin : 10
        // marginBottom  :50
    },
    headContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        gap: '38%',
    },
    iconImage: {
        width: 8.92,
        height: 16.21,
        resizeMode: 'contain',
    },
    headText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000',
    },
    container: {
        paddingTop: 20,
        // marginBottom: 10
    }


})

export default BookingScreen