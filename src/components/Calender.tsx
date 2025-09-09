import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Calendar, LocaleConfig } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/Ionicons';



export default function Calender() {
    const [selected, setSelected] = useState('');

    LocaleConfig.locales['en'] = {
        monthNames: [
            'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',
        ],
        monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    };
    LocaleConfig.defaultLocale = 'en';

    return (
        <View>
            <Calendar style={{ borderRadius: 10 }}
                onDayPress={(day) => {
                    console.log(day.dateString); // check the format
                    setSelected(day.dateString);
                }}
                hideExtraDays={true}
                monthFormat={'MMMM'}
                renderArrow={(direction) =>
                    direction === 'left' ? (
                        <Icon name="chevron-back" size={24} color="#0e0d0dff" />
                    ) : (
                        <Icon name="chevron-forward" size={24} color="#0e0d0dff" />
                    )
                }
                dayComponent={({ date }) => {
                    if (!date) return null;

                    const isSelected = selected === date.dateString;

                    const today = new Date();
                    const isToday =
                        today.getFullYear() === date.year &&
                        today.getMonth() + 1 === date.month &&
                        today.getDate() === date.day;

                    return (
                        <TouchableOpacity
                            onPress={() => setSelected(date.dateString)}
                            activeOpacity={0.7}
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: 20,
                                height: 20,
                                margin: -5,
                                backgroundColor: isSelected ? '#facc15' : '#fff',
                                borderRadius: 50,
                                padding: 1
                            }}
                        >
                            <Text
                                style={{
                                    color: isSelected ? '#000' : isToday ? '#4caf50' : '#000',
                                    fontWeight: isSelected || isToday ? '700' : '400',
                                    fontSize: 13,
                                }}
                            >
                                {date.day}
                            </Text>
                        </TouchableOpacity>
                    );
                }}
                theme={{
                    calendarBackground: '#fff',
                    monthTextColor: '#000',
                    arrowColor: '#000',
                    textDayFontSize: 13,
                    textMonthFontSize: 13,
                    textDayHeaderFontSize: 14,
                }}
                />
    </View>
    )
}
