import { View, StyleSheet } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {MySvgIcon,StarSvgIcon} from './Svg';
export default function BottomNavbar() {
  return (
    <View style={styles.bottomBarWrap}>
      <View style={styles.bottomNav}>
        <Icon name="home" size={22} color="#fff" />
        <MySvgIcon width={20} height={20} fill="white" />
        <View style={styles.fabCircle}>
          <Icon name="add" size={26} color="#000" />
        </View>
        <StarSvgIcon width={32} height={22} fill="white" />
        <Icon name="person-outline" size={22} color="#fff" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomBarWrap: {
    width: '100%',
    backgroundColor : 'red',
    alignItems: 'center',
    paddingVertical: 10,
  },
  bottomNav: {
    backgroundColor: '#111',
    width: '92%',
    height: 54,
    borderRadius: 28,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  fabCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#F6B745',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0, // float the FAB above the bar
  },
});
