import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Calender from '../components/Calender';
import TimeSelect from '../components/TimeSelect';


export default function BookAppointmentScreen() {

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headContainer}>
        <Image style={styles.headIcon} source={require('../assets/Vector.png')} />
        <Text style={styles.headText}>Book Appointment</Text>
      </View>

      <View style={styles.container}>
        <View style={styles.mainImage}>
          <Image style={styles.img} source={require('../assets/bookImage.png')} />
        </View>

        <Text style={styles.Text}>Select Date</Text>

        <View style={styles.calenderContainer}>
          <Calender/>
        </View>
 
        <Text style={styles.Text}>Select Time</Text>
         <View style={styles.timeContainer}>
             <TimeSelect />
         </View>

         <View style={styles.nxt}>
           <TouchableOpacity style={styles.nxtButton}>
            <Text style={styles.nxtText}>Next</Text>
           </TouchableOpacity>
         </View>

      </View>
    </View>
  );
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
    gap: 50,
  },
  headIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  headText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
    fontFamily: 'Poppins-Bold',
  },
  container: {
    padding: 10,
  },
  img: {
    width: 310,
    resizeMode: 'contain',
    height: 161,
  },
  Text: {
    fontSize: 16,
    paddingVertical: 5,
    paddingHorizontal : 10,
    fontFamily: 'Poppins-Regular',
    fontWeight: '800',
  },
  calenderContainer: {
    marginHorizontal: 5,
    marginBottom : 10,
    borderRadius: 10,
    backgroundColor : 'red',
    overflow: 'hidden',
  },
  timeContainer : {
     marginHorizontal: 2,
     marginTop : 0,
    marginBottom : 5,
    borderRadius: 10,
    overflow: 'hidden',
  },
  nxt : {
    marginHorizontal: 15,
    alignItems : 'flex-end',

  },
  nxtButton : {
backgroundColor : '#F6B745',
paddingVertical : 7,
paddingHorizontal : 13,
borderRadius  : 5
  },
  nxtText : {
    color : '#ffffff',
    fontSize:16,
    fontWeight:'500'
  }
});
