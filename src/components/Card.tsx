import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Svg, { Polygon } from "react-native-svg";
import { Shadow } from 'react-native-shadow-2';

const Card = ({ item }) => {
    return (
         <View style={styles.cardWrapper}>
                {/* Folded top corners */}
                <Svg height={90} width={157} style={styles.foldSvg}>
                    {/* Top-left fold */}
                    <Polygon points="0,0 20,0 0,20" fill="#ffffff" />
                    {/* Top-right fold */}
                    <Polygon points="157,0 137,0 157,20" fill="#ffffff" />
                </Svg>
        <Shadow distance={5} startColor="#F6B745AD" offset={[0, 10]}>
           

                {/* Main Card */}
                <View style={styles.container}>
                    {/* Hexagon Header */}
                    <View style={styles.header}>
                        <Svg height="42.5" width="89.5">
                            <Polygon
                                points="0,0 89.5,0 89.5,29.75 44.75,42.5 0,29.75"
                                fill="#F6B745"
                            />
                        </Svg>
                        <Text style={styles.headerText}>{item.title}</Text>
                    </View>

                    {/* Card Content */}
                    <View style={styles.cardContent}>
                        <Text style={styles.rate}>
                            Rate: <Text style={styles.bold}>{item.price}</Text>
                        </Text>
                        <Text style={styles.products}>
                            Products: <Text style={styles.bold}>{item.products}</Text>
                        </Text>
                        <View style={styles.footerCon}>
                            <Text style={styles.about}>{item.about}</Text>
                            <TouchableOpacity style={styles.bookButton}>
                                <Text style={styles.bookText}>Book now</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
           
        </Shadow>
         </View>
    );
};

const styles = StyleSheet.create({
    cardWrapper: {
        width: 157,
        height: 140, // increased height to accommodate folds
        margin : 10,
        marginBottom : 30,
        alignItems: 'center',
        overflow: 'visible', // important for folded corners
    },
    foldSvg: {
        position: 'absolute',
        top: -1,
        left: 0,
        zIndex: 2,
    },
    container: {
        backgroundColor: "#EDEDED",
        borderRadius: 8,
        width: '100%',
        height: '100%',
        alignItems: "center",
        paddingHorizontal: 10,
        paddingBottom : 25, // leave space for hexagon + folds
        overflow: 'visible',
    },
    header: {
        width: "100%",
        height: 42.5,
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        marginBottom: 5,
    },
    headerText: {
        position: "absolute",
        fontSize: 10,
        fontWeight: '500',
        color: "#FFFFFF",
    },
    cardContent: {
        width: "90%",
        justifyContent: 'flex-start',
    },
    rate: { fontSize: 11, marginBottom: 3 },
    products: { fontSize: 10, marginBottom: 8 },
    about: { fontSize: 8, fontStyle: "italic", color: "#D19B00", marginBottom: 3, textAlign: "center" },
    bookButton: {
        backgroundColor: "#FFC107",
        paddingVertical: 4,
        paddingHorizontal: 6,
        borderRadius: 20,
        width: 36,
        height: 13,
    },
    bookText: { color: "#fff", fontWeight: "bold", fontSize: 5 },
    bold: { fontWeight: "bold" },
    footerCon: { alignItems: 'center' },
});

export default Card;
