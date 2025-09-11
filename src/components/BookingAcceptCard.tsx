import { useState } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const BookingAcceptCards = ({ item }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container}>
      {/* Service + Checkbox */}
      <View style={styles.acceptContainer}>
        <View style={[styles.content,{marginBottom : hp('-0.8%')}]}>
          <Image source={item.image[0]} style={styles.icon} />
          <Text style={styles.text}>{item.service}</Text>
        </View>

        <View style={[styles.accept,{marginBottom : hp('-0.8%')}]}>
          <CheckBox
            value={isChecked}
            style={styles.checkBox}
            onValueChange={setIsChecked}
            tintColors={{ true: '#42BA86', false: '#faf9f9ff' }}
          />
          <Text style={styles.text}>Accepted</Text>
        </View>
      </View>

      {/* Date */}
      <View style={styles.content}>
        <Image source={item.image[1]} style={styles.icon} />
        <Text style={styles.text}>Date :- {item.date}</Text>
      </View>

      {/* Time */}
      <View style={styles.content}>
        <Image source={item.image[2]} style={styles.icon} />
        <Text style={styles.text}>Time :- {item.time}</Text>
      </View>

      {/* Amount */}
      <View style={styles.content}>
        <Image source={item.image[3]} style={styles.icon} />
        <Text style={styles.text}>Amount :- ₹{item.price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#000',
    width: wp('90%'), 
    minHeight: hp('20%'), 
    marginVertical: hp('1.5%'),
    alignSelf: 'center',
    borderRadius: wp('4%'),
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('4%'),
    justifyContent: 'center',
    gap: hp('1%'),
  },
  acceptContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: hp('1%'),
  },
  icon: {
    width: wp('6%'),
    height: wp('6%'),
    resizeMode: 'contain',
    marginRight: wp('2%'),
  },
  text: {
    fontSize: wp('3.5%'),
    color: '#fff',
    fontWeight: '500',
  },
  accept: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp('5%'),
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp('2.5%'),
  },
  checkBox: {
    width: wp('4%'),
    height: wp('4%'),
  },
});

export default BookingAcceptCards;
