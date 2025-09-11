import { StyleSheet, Text, View, Image } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const BookingPendingCard = ({ item }) => {
  return (
    <View style={styles.container}>
      {/* Service + Pending Status */}
      <View style={styles.pendingContainer}>
        <View style={[styles.content,{marginBottom : hp('-0.8%')}]}>
          <Image style={styles.icon} source={item.image[0]} />
          <Text style={styles.text}>{item.service}</Text>
        </View>

        <View style={[styles.content,{gap : wp('0%'),marginBottom : hp('-0.8%')}]}>
          <Image style={styles.icon} source={item.image[4]} />
          <Text style={styles.text}>Pending</Text>
        </View>
      </View>

      {/* Date */}
      <View style={[styles.content,{marginVertical : hp('-0.2%')}]}>
        <Image style={styles.icon} source={item.image[1]} />
        <Text style={styles.text}>Date :- {item.date}</Text>
      </View>

      {/* Time */}
      <View style={styles.content}>
        <Image style={styles.icon} source={item.image[2]} />
        <Text style={styles.text}>Time :- {item.time}</Text>
      </View>

      {/* Amount */}
      <View style={styles.content}>
        <Image style={styles.icon} source={item.image[3]} />
        <Text style={styles.text}>Amount :- ₹{item.price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#ACACAC8A', // ✅ pending background
    width: wp('90%'), // responsive width
    minHeight: hp('20%'),
    marginVertical: hp('1.5%'),
    alignSelf: 'center',
    borderRadius: wp('4%'),
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('4%'),
    justifyContent: 'center',
    gap: hp('1%'),
  },
  pendingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: hp('1%'),
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp('2.5%'),
  },
  icon: {
    width: wp('6%'),
    height: wp('6%'),
    resizeMode: 'contain',
    marginRight: wp('2%'),
  },
  text: {
    fontSize: wp('3.5%'),
    color: '#000', // ✅ black text for contrast
    fontWeight: '500',
  },
});

export default BookingPendingCard;
