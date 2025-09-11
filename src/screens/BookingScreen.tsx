import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import RadioButton from '../components/RadioButton';
import BookingAcceptCards from '../components/BookingAcceptCard';
import { BookingAcceptData, BookingPendingData, PreviousBookingData } from '../components/BookingAcceptData';
import BookingPendingCard from '../components/BookingPendingCard';
import PreviousBookingCard from '../components/PreviousBookingCard';

const allBookings = [
  ...BookingAcceptData.map(item => ({ ...item, type: "accept" })),
  ...BookingPendingData.map(item => ({ ...item, type: "pending" })),
  ...PreviousBookingData.map(item => ({ ...item, type: "previous" }))
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
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: hp("6%") }}
        keyExtractor={(item, index) => item.id + "-" + index}
        renderItem={({ item, index }) => {
          if (item.type === "previous") {
            const isFirstPrevious = index === 0 || allBookings[index - 1].type !== "previous";

            return (
              <>
                {isFirstPrevious && (
                  <Text style={styles.heading}>Previous Bookings</Text>
                )}
                <PreviousBookingCard item={item} />
              </>
            );
          } else if (item.type === "accept") {
            return <BookingAcceptCards item={item} />;
          } else if (item.type === "pending") {
            return <BookingPendingCard item={item} />;
          } else {
            return null;
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp("5%"),
    paddingVertical: hp("2%"),
    justifyContent: "flex-start",
    gap : wp('30%')
  },
  iconImage: {
    width: wp("3%"),
    height: hp("2.5%"),
    resizeMode: 'contain',
  },
  headText: {
    fontSize: wp("5%"),
    fontWeight: 'bold',
    color: '#000',
  },
  container: {
    paddingTop: hp("2%"),
  },
  heading: {
    fontSize: wp("6%"),
    fontWeight: "500",
    marginVertical: hp("1.5%"),
    marginLeft: wp("4%"),
    fontFamily: 'Poppins-Medium'
  }
});

export default BookingScreen;
