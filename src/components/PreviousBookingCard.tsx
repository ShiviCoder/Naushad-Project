import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"
import { useState } from 'react'
import CheckBox from '@react-native-community/checkbox';
const PreviousBookingCard = ({ item }) => {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.pendingContainer}>
                <View style={styles.content}>
                    <Image source={item.image[0]} style={styles.icon} />
                    <Text style={styles.text}>{item.service}</Text>
                </View>
                <View style={styles.pending}>
                    <CheckBox
                        value={isChecked}
                        style={styles.checkBox}
                        onValueChange={setIsChecked}
                        tintColors={{ true: '#42BA86' }}
                    />
                    <Text style={styles.text}>Completed</Text>
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

            <View style={styles.content}>
                <Image source={item.image[4]} style={styles.icon} />
                <Text style={styles.text}>Rating :- {item.rating}</Text>
            </View>

            <TouchableOpacity>
                <Text style={styles.button}>Rebook</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#FCDBA040',
        width: 340,
        height: 200,
        margin: 10,
        gap: 7,
        alignItems: 'flex-start',
        paddingHorizontal: 15,
        justifyContent: 'center',
        borderRadius: 16
    },
    pendingContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: 60
    },
    content: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    },
    icon: {
        width: 24,              // same width for all
        height: 24,             // same height for all
        resizeMode: 'contain',  // keeps aspect ratio without stretching
        marginRight: 10,
    },
    text: {
        fontSize: 13,
        color: '#000000',
        fontWeight: '500'
    },
    pending: {
        flexDirection: 'row',
        gap: 19,
        alignItems: 'center',
    },
    checkBox: {
        width: 13,
        height: 13
    },
    button: {
        width: 63,
        height: 20,
        backgroundColor: '#F6B745',
        paddingHorizontal: 12,
        paddingVertical: 2,
        borderRadius: 10,
        color: '#ffffff',
        fontWeight: '600',
        fontSize: 11,
        marginLeft: '2%'
    }
})

export default PreviousBookingCard