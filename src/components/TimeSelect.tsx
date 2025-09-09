import { View, Text, TouchableOpacity, FlatList, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { Shadow } from 'react-native-shadow-2';

const TimeSelect = () => {
    const slotArray = ['9.00', '10.00', '11.00', '12.00', '13.00', '14.00', '15.00', '16.00', '17.00', '18.00'];


    return (
       <View style={{ paddingHorizontal: 10 }}>
  <FlatList
    data={slotArray}
    numColumns={3} // 3 items per row
    columnWrapperStyle={{ justifyContent: 'space-between' }} // spacing between items
    keyExtractor={(item, index) => index.toString()}
    showsVerticalScrollIndicator={false}
    renderItem={({ item }) => (
      <Shadow
        distance={2}
        startColor="#f7c744"
        offset={[1, 5]}   
        style={styles.shadowContainer}
      >
        <TouchableOpacity style={styles.slotButton}>
          <Text style={styles.slotText}>{item}</Text>
        </TouchableOpacity>
      </Shadow>
    )}
  />
</View>
    )
}

   const styles = StyleSheet.create({
  shadowContainer: {
    flex: 1,
    marginHorizontal: 5,
    marginVertical: 5,
    borderRadius: 8,
    minHeight: 25,           // thoda comfortable touch area
    justifyContent: 'center',
    alignItems: 'center',
  },

  slotButton: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  slotText: {
    color: '#000',
    fontWeight: '600',
    fontSize: 13,
  },
});

export default TimeSelect