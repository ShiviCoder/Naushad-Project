import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ServicesScreen from './src/screens/ServicesScreen'
import PackagesScreen from './src/screens/PackagesScreen'
import ProductPackageScreen from './src/screens/ProductPackageScreen'
import BookingScreen from './src/screens/BookingScreen'
import AccountScreen from './src/screens/AccountScreen'

const App = () => {
  return (
    <View style={styles.container} >
      {/* <ServicesScreen/> */}
      {/* <PackagesScreen></PackagesScreen> */}
      {/* <ProductPackageScreen></ProductPackageScreen> */}
      {/* <BookingScreen></BookingScreen> */}
      <AccountScreen></AccountScreen>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    fontFamily : 'Poppins-Bold'

  }
})