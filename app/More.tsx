import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Pressable,Share, Alert, StatusBar } from 'react-native';
import Solar from '../assets/images/3d.jpg'
import Constellation from '../assets/images/2979868e063e4833b5704556f2c63604.png'
import Comets from '../assets/images/Comet-delivers-to-Earth-e1699975532872.jpg' 
import { useFonts } from 'expo-font';
import Tabs from '../app/Bottom_Tab';
import Icon from 'react-native-vector-icons/AntDesign';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
  responsiveFontSize
} from "react-native-responsive-dimensions";



export default function More({navigation}){

  const handlePress = () => {
    Alert.alert('COMING SOON.');
  };
  const ARhandlePress = () => {
    Alert.alert('AR PLANETS COMING SOON.');
  };
  const navigateToHomeScreen = () => {
    navigation.navigate('Main');
  };

  const Tab = createBottomTabNavigator();
  const navigateto3dplanets = () => {
    navigation.navigate('MorePl')
  }
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Space Encyclopedia - 3D Solar System(CS)|3D Planets|AR Planets(CS)',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {

        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  const navigatetosolar = () =>{
    navigation.navigate('Solar');
  }

  const [fontsLoaded] = useFonts({'Spacee' : require('../assets/fonts/SpaceGrotesk-Medium.ttf')
  });


  return (
    <View style={styles.container}>
    <StatusBar hidden={false} backgroundColor="#121221" translucent={true}/>
    <ScrollView showsVerticalScrollIndicator={false}>
    <Pressable onPress={navigateto3dplanets} style={styles.Press}>
      <Image source={Solar} style={styles.Solarimg}/>
    </Pressable>
    <Text style={styles.textComet}>3D Planets</Text>
    <Text style={{fontSize: 22, fontFamily: 'Spacee', left: 15, top: 5, color: '#9494C7'}}>Mecury, Venus</Text>
    <Text style={{fontSize: 22, fontFamily: 'Spacee', left: 15,top: 5, color: '#9494C7', marginBottom: '10%'}}>Earth, Mars. . . . .</Text>
    <Pressable onPress={handlePress} style={styles.Press}>
      <Image source={Constellation} style={styles.Solarimg}/>
    </Pressable>
    <Text style={styles.textComet}>AR Planets</Text>
    <Text style={{fontSize: 21, fontFamily: 'Spacee', left: 15,top: 5, color: '#9494C7', marginBottom: '10%'}}>Earth, Mars. . . . .</Text>    
    <Pressable onPress={handlePress} style={styles.Press}>
      <Image source={Comets} style={styles.Solarimg}/>
    </Pressable>
    <Text style={styles.textComet}>3D Solar System</Text>
    <Text style={{fontSize: 22, fontFamily: 'Spacee', left: 15, top: 5, color: '#9494C7', marginBottom: '30%'}}>Whole Solar System in pinch and{'\n'}zoom of the fingers</Text>
    </ScrollView>
    <Tabs style={styles.tab}>
    <Pressable onPress={onShare} style={styles.icon}>
     <Icon name='sharealt' size={35}></Icon>
    </Pressable>
    <Pressable onPress={navigateto3dplanets} style={styles.icon}>
     <Icon name='rocket1'  size={35}></Icon>
    </Pressable>
    <Pressable onPress={navigateToHomeScreen} style={styles.icon}>
     <Icon name='home' color="#ffffff" size={40}></Icon>
    </Pressable>
    <Pressable onPress={navigatetosolar} style={styles.icon}>
     <Icon name='book'  size={35}></Icon>
    </Pressable>
    <Pressable onPress={ARhandlePress} style={styles.icon}>
     <Icon name='earth'  size={35}></Icon>
    </Pressable>
    </Tabs>
    </View>
  );
};

const styles = StyleSheet.create({
    container: 
    {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#121221'
    },
    Solarimg: {
      justifyContent: 'center',
      borderRadius: 25,
      height: responsiveScreenHeight(30),
      width: responsiveScreenWidth(95),
      marginTop: '5%',
      resizeMode: 'cover',
    },

    textComet: {
      fontSize: responsiveScreenFontSize(3),
      marginTop: '5%',
      marginLeft: '5%',
      fontFamily: 'Spacee',
      color: 'white',
    },

    tab: {
      justifyContent: 'space-evenly',
      flexDirection: 'row',
      alignSelf: 'center',
      alignItems: 'center',
      padding: -20,
    },
    
    icon: {
      height: 40,
      width: 40,
    }
});
