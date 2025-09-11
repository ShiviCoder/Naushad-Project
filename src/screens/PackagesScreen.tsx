import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import PackageData from '../components/PackageData';
import { Shadow } from 'react-native-shadow-2';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const PackagesScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headContainer}>
        <Image style={styles.headIcon} source={require('../assets/Vector.png')} />
        <Text style={styles.headText}>Our Packages</Text>
      </View>

      {/* Packages List */}
      <FlatList
        data={PackageData}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: hp('2%') }}
        renderItem={({ item }) => (
          <View style={styles.cardWrapper}>
            <Shadow
              distance={wp('2%')}
              startColor="#ebd18bff"
              offset={[0, 0]}
              style={styles.mainContainer}
            >
              {/* Text Section */}
              <View style={styles.mainText}>
                <View style={styles.title}>
                  <Text style={styles.titleText}>{item.title}</Text>
                  <Text style={styles.priceText}>{item.price}</Text>
                </View>
                <Text style={styles.serviceText}>
                  Services: <Text style={{ color: '#000' }}>{item.services}</Text>
                </Text>
                <Text style={styles.aboutText}>
                  About: <Text style={{ color: '#000' }}>{item.about}</Text>
                </Text>
                <TouchableOpacity style={styles.bookNowButton}>
                  <Text style={styles.bookButtonText}>Book Now</Text>
                </TouchableOpacity>
              </View>

              {/* Image Section */}
              <View style={styles.mainImage}>
                <Image source={item.image} style={styles.Image} />
              </View>
            </Shadow>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp('3%'),
    paddingVertical: hp('0%'),
    backgroundColor: '#fff',
  },
  headContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp('2%'),
    gap: wp('25%'), 
  },
  headIcon: {
    width: wp('5%'),
    height: wp('5%'),
    resizeMode: 'contain',
  },
  headText: {
    fontSize: wp('5%'),
    fontFamily: 'Poppins-Bold',
    color: '#333',
  },
  cardWrapper: {
    paddingHorizontal: wp('3%'),
    paddingVertical: hp('1%'),
    width: '100%'

  },
  mainContainer: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#FFEED0',
    borderRadius: wp('4%'),
    paddingLeft: wp('3%'),
    marginBottom: hp('1%'),
    alignItems: 'stretch',   
    justifyContent: 'space-between',
    height: hp('22%'),
  },
  mainText: {
    flex: 1,
    marginRight: wp('3%'),
    justifyContent: 'center',
    gap: hp('1.2%'),
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: wp('6%'),
    marginBottom: hp('0.5%'),
  },
  titleText: {
    fontSize: wp('4%'),
    fontWeight: '600',
    color: '#333',
  },
  priceText: {
    fontSize: wp('4%'),
    fontWeight: 'bold',
    color: '#B07813',
  },
  serviceText: {
    fontSize: wp('3.5%'),
    color: '#42BA86',
    marginBottom: hp('0.5%'),
  },
  aboutText: {
    fontSize: wp('3.5%'),
    color: '#42BA86',
    marginBottom: hp('1%'),
  },
  bookNowButton: {
    backgroundColor: '#FFD700',
    borderRadius: wp('10%'),
    paddingHorizontal: wp('3%'),
    paddingVertical: hp('0.8%'),
    alignSelf: 'flex-start',
  },
  bookButtonText: {
    color: '#fff',
    fontSize: wp('3.5%'),
    fontWeight: '600',
  },
  mainImage: {
    width: wp('35%'),  
    height: '100%',    
    overflow: 'hidden',
    borderTopRightRadius: wp('4%'),
    borderBottomRightRadius: wp('4%'),
  },
  Image: {
    width: '100%',
    height: '100%', 
    resizeMode: 'cover'
  },
});

export default PackagesScreen;
