import { useState } from "react";
import { Animated, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const RadioButton = () => {
    const [isAccepted, setIsAccepted] = useState(false);
    const [isPending, setIsPending] = useState(false);
    const AcceptedOffset = useState(new Animated.Value(0))[0];
    const PendingOffset = useState(new Animated.Value(0))[0];
    const toggleSwitchAccepted = () => {
        Animated.timing(AcceptedOffset, {
            toValue: isAccepted ? 0 : 1,
            duration: 200,
            useNativeDriver: false,
        }).start();
        setIsAccepted(!isAccepted);
    };
    const toggleSwitchPending = () => {
        Animated.timing(PendingOffset, {
            toValue: isPending ? 0 : 1,
            duration: 200,
            useNativeDriver: false,
        }).start();
        setIsPending(!isPending);
    };
    const thumbSize = 10;   // 👈 change this for circle size
    const trackWidth = 35;  // 👈 change this for background width
    const trackHeight = 19; // 👈 change this for background height
    const padding = 5;
    const pendingTranslateX = PendingOffset.interpolate({
        inputRange: [0, 1],
        outputRange: [padding, trackWidth - thumbSize - padding],
    });

    const acceptTranslateX = AcceptedOffset.interpolate({
        inputRange: [0, 1],
        outputRange: [padding, trackWidth - thumbSize - padding],
    });

    return (
        <View style={styles.checkContainer}>
            <View style={styles.checkBox}>
                <Text>Accepted</Text>
                <TouchableOpacity activeOpacity={1} onPress={toggleSwitchAccepted}>
                    <View
                        style={[
                            styles.track,
                            {
                                width: trackWidth,
                                height: trackHeight,
                                backgroundColor: isAccepted ? "#2196F3" : "#ccc",
                            },
                        ]}
                    >
                        <Animated.View
                            style={[
                                styles.thumb,
                                {
                                    width: thumbSize,
                                    height: thumbSize,
                                    borderRadius: thumbSize / 2,
                                    transform: [{ translateX: acceptTranslateX }],
                                },
                            ]}
                        />
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.checkBox}>
                <Text>Pending</Text>
                <TouchableOpacity activeOpacity={1} onPress={toggleSwitchPending}>
                    <View
                        style={[
                            styles.track,
                            {
                                width: trackWidth,
                                height: trackHeight,
                                backgroundColor: isPending ? "#2196F3" : "#ccc",
                            },
                        ]}
                    >
                        <Animated.View
                            style={[
                                styles.thumb,
                                {
                                    width: thumbSize,
                                    height: thumbSize,
                                    borderRadius: thumbSize / 2,
                                    transform: [{ translateX: pendingTranslateX }],
                                },
                            ]}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    checkContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginVertical :10
    },
    checkBox: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center'
    },
    switch: {
        transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }], // makes switch bigger
        margin: 10,
    },
    track: {
        borderRadius: 20,
        justifyContent: "center",
    },
    thumb: {
        backgroundColor: "#fff",
        elevation: 3, // adds shadow on Android
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 2,
        shadowOffset: { width: 0, height: 1 },
    },
})
export default RadioButton;