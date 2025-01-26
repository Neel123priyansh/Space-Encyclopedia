import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Pressable,Share, Alert, StatusBar } from 'react-native';
import Solar from '../assets/images/Solar_sys.jpg'
import Constellation from '../assets/images/2979868e063e4833b5704556f2c63604.png'
import Comets from '../assets/images/Comet-delivers-to-Earth-e1699975532872.jpg' 
import Galaxies from '../assets/images/37d30599eac845bd895b7b7086948d17.png'
import Nebula from '../assets/images/Carina_Nebula-1.png'
import stars from '../assets/images/Star-types.jpg'
import Life from '../assets/images/Life.png'
import Blackholes from '../assets/images/IS-BH-1024x576-1.jpg'
import { useFonts } from 'expo-font';
import Tabs from './Bottom_Tab';
import Icon from 'react-native-vector-icons/AntDesign'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize
} from "react-native-responsive-dimensions";



export default function Second({navigation}){

  const handlePress = () => {
    Alert.alert('Image Pressed');
  };
  const navigateToHomeScreen = () => {
    navigation.navigate('Main');
  };
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

  const Tab = createBottomTabNavigator();

  const navigatetosolar = () =>{
    navigation.navigate('Solar');
  };

  const ARhandlePress = () => {
    Alert.alert('AR PLANETS COMING SOON.');
  };

  const navigateToConstellationScreen = () => {
    navigation.navigate('Constellation');
  };

  const navigatetoplanets = () => {
    navigation.navigate('MorePl')
  }

  const navigateToCometScreen = () => {
    navigation.navigate('Comets');
  };

  const navigateToCreationScreen = () => {
    navigation.navigate('Creation');
  };

  const navigateToGalaxies = () => {
    navigation.navigate('Galaxies');
  };

  const navigateToStars = () => {
    navigation.navigate('Stars');
  };

  const navigateToLife = () => {
    navigation.navigate('Life');
  };

  const navigateToBlack = () => {
    navigation.navigate('Black');
  };

  const [fontsLoaded] = useFonts({'Spacee' : require('../assets/fonts/SpaceGrotesk-Medium.ttf')
  });


  return (
    <View style={styles.container}>
    <StatusBar hidden={false} backgroundColor="#121221" translucent={true}/>
    <ScrollView showsVerticalScrollIndicator={false}>
    <Pressable onPress={navigatetosolar} style={styles.Press}>
      <Image source={Solar} style={styles.Solarimg}/>
    </Pressable>
    <Text style={styles.textComet}>Solar System</Text>
    <Text style={{fontSize: 22, fontFamily: 'Spacee', left: 15, top: 5, color: '#9494C7'}}>Age : 4.56B</Text>
    <Text style={{fontSize: 22, fontFamily: 'Spacee', left: 15,top: 5, color: '#9494C7', marginBottom: '10%'}}>Orbital Speed : 220 Km/s</Text>
    
    <Pressable onPress={navigateToConstellationScreen} style={styles.Press}>
      <Image source={Constellation} style={styles.Solarimg}/>
    </Pressable>
    <Text style={styles.textComet}>Constellation</Text>
    <Text style={{fontSize: 21, fontFamily: 'Spacee', left: 15,top: 5, color: '#9494C7', marginBottom: '10%'}}>Constellations are not fixed{"\n"}entities in space. . . . . . .</Text>
    
    <Pressable onPress={navigateToCometScreen} style={styles.Press}>
      <Image source={Comets} style={styles.Solarimg}/>
    </Pressable>
    <Text style={styles.textComet}>Comets</Text>
    <Text style={{fontSize: 22, fontFamily: 'Spacee', left: 15, top: 5, color: '#9494C7', marginBottom: '10%'}}>Also know as Dirty snowball{"\n"}or Icyballs with a tail. . . . . . . .</Text>

    <Pressable onPress={navigateToCreationScreen} style={styles.Press}>
      <Image source={Nebula} style={styles.Solarimg}/>
    </Pressable>
    <Text style={styles.textComet}>Creation of Stars</Text>
    <Text style={{fontSize: 22, fontFamily: 'Spacee', left: 15,top: 5, color: '#9494C7', marginBottom: '10%'}}>Methuselah star is the oldest{"\n"}known star, estimated to be{"\n"}14.46 Billion years old. . . . . . .</Text>
    
    <Pressable onPress={navigateToGalaxies} style={styles.Press}>
      <Image source={Galaxies} style={styles.Solarimg}/>
    </Pressable>
    <Text style={styles.textComet}>Galaxies</Text>
    <Text style={{fontSize: 22, fontFamily: 'Spacee', left: 15, top: 5, color: '#9494C7'}}>Our Galaxy : Milky Way</Text>
    <Text style={{fontSize: 22, fontFamily: 'Spacee', left: 15,top: 5, color: '#9494C7', marginBottom: '10%'}}>Rotation Speed : 270 Km/s</Text>
    <Pressable onPress={navigateToStars} style={styles.Press}>
      <Image source={stars} style={styles.Solarimg}/>
    </Pressable>
    <Text style={styles.textComet}>Stars</Text>
    <Text style={{fontSize: 22, fontFamily: 'Spacee', left: 15, top: 5, color: '#9494C7', marginBottom: '10%'}}>Emit light and other forms of electromagnetic radiation. . . . . .</Text>
    <Pressable onPress={navigateToLife} style={styles.Press}>
      <Image source={Life} style={styles.Solarimg}/>
    </Pressable>
    <Text style={styles.textComet}>Life on other Planets</Text>
    <Text style={{fontSize: 22, fontFamily: 'Spacee', left: 15, top: 5, color: '#9494C7', marginBottom: '10%'}}>The search for life on other{"\n"}planets is one of the most. . . . </Text>
    <Pressable onPress={navigateToBlack} style={styles.Press}>
      <Image source={Blackholes} style={styles.Solarimg}/>
    </Pressable>
    <Text style={styles.textComet}>Black Holes</Text>
    <Text style={{fontSize: 22, fontFamily: 'Spacee', left: 15, top: 5, color: '#9494C7'}}>Age : 4.56B</Text>
    <Text style={{fontSize: 22, fontFamily: 'Spacee', left: 15,top: 5, color: '#9494C7', marginBottom: '25%'}}>Orbital Speed : 220 Km/s</Text>
    </ScrollView>
    <Tabs style={styles.tab}>
    <Pressable onPress={onShare} style={styles.icon}>
     <Icon name='sharealt' size={35}></Icon>
    </Pressable>
    <Pressable onPress={navigatetoplanets} style={styles.icon}>
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
})
