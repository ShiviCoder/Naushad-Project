import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import PackageData from '../components/PackageData';
import { Shadow } from 'react-native-shadow-2';
import { ScrollView } from 'react-native';

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
        renderItem={({ item }) => (
          <ScrollView style={styles.cardWrapper}>
            <Shadow
              distance={12}          // shadow spread
              startColor="#f7c744"   // dark yellow shadow
              offset={[0, 0]}     // center shadow for glow
              // radius={19}            // shadow curve
              style={styles.mainContainer}
            >
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

              <View style={styles.mainImage}>
                <Image source={item.image} style={styles.Image} />
              </View>
            </Shadow>
          </ScrollView>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: '#fff',
  },
  headContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    gap: '20%',
  },
  headIcon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },
  headText: {
    fontSize: 23,
    fontFamily: 'Poppins-Bold',
    color: '#333',
  },
  cardWrapper: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  mainContainer: {
    width: '100%',               // full width inside wrapper
    flexDirection: 'row',
    backgroundColor: '#FFEED0',  // light yellow
    borderRadius: 16,
    padding: 12,
    marginBottom : 10,
    alignItems: 'center',
  },
  mainText: {
    flex: 1,
    marginRight: 10,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  titleText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  priceText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#B07813',
  },
  serviceText: {
    fontSize: 14,
    color: '#42BA86',
    marginBottom: 4,
  },
  aboutText: {
    fontSize: 14,
    color: '#42BA86',
    marginBottom: 8,
  },
  bookNowButton: {
    backgroundColor: '#FFD700',
    borderRadius: 50,
    paddingHorizontal: 10,
    paddingVertical: 6,
    alignSelf: 'flex-start',
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  mainImage: {
    width: 120,
    height: 120,
    borderRadius: 12,
    marginLeft: 10,
  },
  Image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default PackagesScreen;
