import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import settingData from '../components/EditProfileData';
import RadioButton from '../components/RadioButton';

const AccountScreen = () => {
  const [theme, setTheme] = useState("Light"); // track selected theme

  const backgroundColor = theme === 'Dark'?'#121212' : '#fff';
  const textColor = theme === 'Dark' ? '#fff' : '#333';
  const subTextColor = theme === 'Dark' ? '#bbb' : '#757575BA';
  return (
    <View style={[styles.container,{backgroundColor}]}>
      {/* Header */}
      <View style={styles.headContainer}>
        <Image style={[styles.headIcon, { tintColor: textColor }]}  source={require('../assets/Vector.png')} />
        <Text style={[styles.headText,{color : textColor}]}>Account</Text>
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <View style={styles.con}>
          <View style={styles.imgSection}>
            <Image source={require('../assets/user-img.png')} />
          </View>
          <View style={styles.profileText}>
            <Text style={[styles.name,{color : textColor}]}>Anchal Jain</Text>
            <Text style={[styles.email,{color : subTextColor}]}>aachalsethi38881@gmail.com</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Image style={styles.edit} source={require('../assets/edit.png')} />
        </TouchableOpacity>
      </View>

      <View style={styles.separator} />

      {/* Settings List */}
      <FlatList
        data={settingData}
        style={styles.detailsContainer}
        contentContainerStyle={{ margin: 10 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View style={styles.detailsCon}>
              {/* Left Icon */}
              <View style={styles.editcon}>
                <Image style={styles.editcon} source={item.image} />
              </View>

              {/* Right Content */}
              <View style={styles.textCon}>
                {item.title === "Theme" ? (
                  <>
                    <Text style={[styles.text,{color : textColor}]}>{item.title}</Text>
                    <Text style={[styles.subText,{color : subTextColor}]}>{item.description}</Text>

                    {/* ✅ Custom RadioButton for Theme (Light/Dark) */}
                    <RadioButton
                      type="toggle"
                      selected={theme}
                      labels={[
                        <Image source={require('../assets/sun.png')} style={{ width: 25, height: 25, resizeMode: 'contain' }}/>,
                         <Image source={require('../assets/moon.png')} style={{ width: 25, height: 25, resizeMode: 'contain' }}/>
                      ]}
                      onSelect={(isDark) => {
                        const value = isDark ? "Dark" : "Light";
                        console.log("Theme selected:", value);
                        setTheme(value);
                      }}
                    />
                  </>
                ) : (
                  <>
                    <Text style={[styles.text,{color : textColor}]}>{item.title}</Text>
                <Text style={[styles.subText,{color : subTextColor}]}>{item.description}</Text>
                  </>
                )}
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    
  },
  headContainer: {
    paddingHorizontal: 8,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: 215,
    justifyContent: 'flex-start',
    gap: 110,
  },
  headText: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#333',
    fontWeight: '500',
  },
  headIcon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },
  profileSection: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  con: {
    marginVertical: 20,
    flexDirection: 'row',
    gap: '5%',
    alignItems: 'center',
  },
  imgSection: {
    width: 55,
    height: 55,
  },
  profileText: {
    flexDirection: 'column',
  },
  name: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
  },
  email: {
    fontSize: 10,
    fontWeight: '500',
    fontFamily: 'Poppins-Medium',
    color: '#757575BA',
  },
  edit: {
    width: 21,
    height: 21,
    marginBottom: 25,
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
  detailsContainer: {
    paddingHorizontal: 8,
    margin: 10,
  },
  editcon: {
    padding: 5,
    height: 28,
    width: 28,
  },
  detailsCon: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 20,
    alignItems: 'flex-start',
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'Poppins-Medium',
  },
  subText: {
    fontSize: 13,
    fontWeight: '500',
    fontFamily: 'Poppins-Medium',
    color: '#757575BA',
  },
  textCon: {
    flexDirection: 'column',
  },
});

export default AccountScreen;
