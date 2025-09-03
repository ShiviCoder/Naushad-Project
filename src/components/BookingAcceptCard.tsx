import { useState } from 'react';
import { Text, View, Image } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { StyleSheet } from 'react-native';
const BookingAcceptCards = ({ item }) => {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.acceptContainer}>
                <View style={styles.content}>
                    <Image source={item.image[0]} style={styles.icon} />
                    <Text style={styles.text}>{item.service}</Text>
                </View>
                <View style={styles.accept}>
                    <CheckBox
                        value={isChecked}
                        style={styles.checkBox}
                        onValueChange={setIsChecked}
                        tintColors={{ true: '#42BA86', false: '#faf9f9ff' }}
                    />
                    <Text style={styles.text}>Accepted</Text>
                </View>
            </View>

            <View style={styles.content}>
                <Image source={item.image[1]} style={styles.icon} />
                <Text style={styles.text}>Date :- {item.date}</Text>
            </View>

            <View style={styles.content}>
                <Image source={item.image[2]} style={styles.icon} />
                <Text style={styles.text}>Time :- {item.time}</Text>
            </View>

            <View style={styles.content}>
                <Image source={item.image[3]} style={styles.icon} />
                <Text style={styles.text}>Amount :- {item.price}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#000000',
        width: 340,
        height: 166,
        margin: 10,
        gap: 10,
        alignItems: 'flex-start',
        paddingHorizontal: 15,
        justifyContent: 'center',
        borderRadius: 16
    },
    acceptContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: 60
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
        color: '#FFFFFF',
        fontWeight: '500'
    },
    accept: {
        flexDirection: 'row',
        gap: 19,
        alignItems: 'center',

    },
    content: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    },
    checkBox: {
        width: 13,
        height: 13
    },


})
export default BookingAcceptCards;