import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ServicesScreen from './src/screens/ServicesScreen'
import PackagesScreen from './src/screens/PackagesScreen'
import ProductPackageScreen from './src/screens/ProductPackageScreen'
import BookingScreen from './src/screens/BookingScreen'
import AccountScreen from './src/screens/AccountScreen'
import BottomNavbar from './src/components/BottomNavbar'
const App = () => {
  return (
    <View style={styles.container} >
      {/* <ServicesScreen/> */}
      {/* <PackagesScreen></PackagesScreen> */}
      {/* <ProductPackageScreen></ProductPackageScreen> */}
      {/* <BookingScreen></BookingScreen> */}
      <AccountScreen></AccountScreen>
      <BottomNavbar></BottomNavbar>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    fontFamily : 'Poppins-Bold'

  }
})