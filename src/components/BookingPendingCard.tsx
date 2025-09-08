import { StyleSheet, Text, View, Image } from 'react-native'


const BookingPendingCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.pendingContainer}>
        <View style={styles.content}>
          <Image style={styles.icon} source={item.image[0]} />
          <Text style={styles.text}>{item.service}</Text>
        </View>

        <View style={styles.content}>
          <Image style={styles.icon} source={item.image[4]} />
          <Text style={styles.text}>Pending</Text>
        </View>
      </View>


      <View style={styles.content}>
        <Image style={styles.icon} source={item.image[1]} />
        <Text style={styles.text}>Date :- {item.date}</Text>
      </View>

      <View style={styles.content}>
        <Image style={styles.icon} source={item.image[2]} />
        <Text style={styles.text}>Time :- {item.time}</Text>
      </View>

      <View style={styles.content}>
        <Image style={styles.icon} source={item.image[3]} />
        <Text style={styles.text} >Amount :- ₹{item.price}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    // backgroundColor: '#000000',
    backgroundColor: '#ACACAC8A',
    width: 340,
    height: 166,
    margin: 10,
    gap: 10,
    alignItems: 'flex-start',
    paddingHorizontal: 15,
    justifyContent: 'center',
    borderRadius: 16
  },
  pendingContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 70
  },
  content: {
    flexDirection: 'row',
    gap: 2,
    alignItems: 'center',
  },
  icon: {
    width: 24,              // same width for all
    height: 24,             // same height for all
    resizeMode: 'contain',  // keeps aspect ratio without stretching
    marginRight: 10,
    // optional, if you want them all white
  },
  text: {
    fontSize: 13,
    color: '#000000',
    fontWeight: '500'
  },
})

export default BookingPendingCard