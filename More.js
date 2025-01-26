import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Pressable, Alert } from 'react-native';
import Solar from './assets/Solar_sys.jpg'
import Constellation from './assets/2979868e063e4833b5704556f2c63604.png'
import Comets from './assets/Comet-delivers-to-Earth-e1699975532872.jpg' 
import Galaxies from './assets/37d30599eac845bd895b7b7086948d17.png'
import Nebula from './assets/Carina_Nebula-1.png'
import stars from './assets/Star-types.jpg'
import Life from './assets/Life.png'
import Blackholes from './assets/IS-BH-1024x576-1.jpg'
import { useFonts } from 'expo-font';


const More = () => {

  const handlePress = () => {
    Alert.alert('Image Pressed');
  };

  const [fontsLoaded] = useFonts({'Spacee' : require('./assets/fonts/SpaceGrotesk-Medium.ttf')
});


  return (
    <View style={styles.container}>
    <ScrollView showsVerticalScrollIndicator={false}>
    <Pressable onPress={handlePress} style={styles.Press}>
      <Image source={Solar} style={styles.Solarimg}/>
    </Pressable>
    <Text style={styles.textsolar}>3D Solar System</Text>
    <Text style={{fontSize: 22, fontFamily: 'Spacee', left: 15, top: 5, color: '#9494C7'}}>Age : 4.56B</Text>
    <Text style={{fontSize: 22, fontFamily: 'Spacee', left: 15,top: 5, color: '#9494C7'}}>Orbital Speed : 220 Km/s</Text>
    <Text style={{fontSize: 22, fontFamily: 'Spacee', left: 15,top: 5, color: '#9494C7'}}></Text>
    <Text style={{fontSize: 22, fontFamily: 'Spacee', left: 15,top: 5, color: '#9494C7'}}></Text>
    
    <Pressable onPress={handlePress} style={styles.Press}>
      <Image source={Constellation} style={styles.Consimg}/>
    </Pressable>
    <Text style={styles.textsolar}>3D Planets</Text>
    <Text style={{fontSize: 22, fontFamily: 'Spacee', left: 15, top: 5, color: '#9494C7'}}>Age : 4.56B</Text>
    <Text style={{fontSize: 22, fontFamily: 'Spacee', left: 15,top: 5, color: '#9494C7'}}>Orbital Speed : 220 Km/s</Text>

    <Text style={{fontSize: 22, fontFamily: 'Spacee', left: 15,top: 5, color: '#9494C7'}}></Text>
    <Text style={{fontSize: 22, fontFamily: 'Spacee', left: 15,top: 5, color: '#9494C7'}}></Text>
    
    <Pressable onPress={handlePress} style={styles.Press}>
      <Image source={Comets} style={styles.Consimg}/>
    </Pressable>
    <Text style={styles.textsolar}>Interesting Facts</Text>
    <Text style={{fontSize: 22, fontFamily: 'Spacee', left: 15, top: 5, color: '#9494C7'}}>Age : 4.56B</Text>
    <Text style={{fontSize: 22, fontFamily: 'Spacee', left: 15,top: 5, color: '#9494C7'}}>Orbital Speed : 220 Km/s</Text>
    
    <Text style={{fontSize: 22, fontFamily: 'Spacee', left: 15,top: 5, color: '#9494C7'}}></Text>
    <Text style={{fontSize: 22, fontFamily: 'Spacee', left: 15,top: 5, color: '#9494C7'}}></Text>

    <Pressable onPress={handlePress} style={styles.Press}>
      <Image source={Nebula} style={styles.creationimg}/>
    </Pressable>
    <Text style={styles.textcreation}>Creation of Stars</Text>
    <Text style={{fontSize: 22, fontFamily: 'Spacee', left: 15, top: 5, color: '#9494C7'}}>Age : 4.56B</Text>
    <Text style={{fontSize: 22, fontFamily: 'Spacee', left: 15,top: 5, color: '#9494C7'}}>Orbital Speed : 220 Km/s</Text>

    <Text style={{fontSize: 22, fontFamily: 'Spacee', left: 15,top: 5, color: '#9494C7'}}></Text>
    <Text style={{fontSize: 22, fontFamily: 'Spacee', left: 15,top: 5, color: '#9494C7'}}></Text>

    </ScrollView>
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
      height: 250,
      width: 370,
      resizeMode: 'cover',
      top: 10,
      padding: 20,
    },
    textsolar: {
      fontSize: 25,
      alignSelf: 'center',
      height: 48,
      fontFamily: 'Spacee',
      color: 'white',
      left: -80,
      top: 15,
      height: 50,
    },

    Consimg: {
      justifyContent: 'center',
      borderRadius: 25,
      height: 250,
      width: 370,
      resizeMode: 'stretch',
      top: 10,
      padding: 20,
    },

    textcreation: {
      fontSize: 25,
      alignSelf: 'center',
      height: 48,
      fontFamily: 'Spacee',
      color: 'white',
      left: -66,
      top: 15,
      height: 50,

    },
    creationimg: {
      justifyContent: 'center',
      borderRadius: 25,
      height: 250,
      width: 370,
      resizeMode: 'stretch',
      top: 10,
      padding: 20,
    },

    textgalaxies: {
      fontSize: 25,
      alignSelf: 'center',
      height: 48,
      fontFamily: 'Spacee',
      color: 'white',
      left: -116,
      top: 15,
      height: 50,

    },

    textplanets: {
      fontSize: 25,
      alignSelf: 'center',
      height: 48,
      fontFamily: 'Spacee',
      color: 'white',
      left: -40,
      top: 15,
      height: 50,

    },
    textuniverse: {
      fontSize: 25,
      alignSelf: 'center',
      height: 48,
      fontFamily: 'Spacee',
      color: 'white',
      left: -65,
      top: 15,
      height: 50,

    },

    textblackholes: {
      fontSize: 25,
      alignSelf: 'center',
      height: 48,
      fontFamily: 'Spacee',
      color: 'white',
      left: -100,
      top: 15,
      height: 50,

    },

    creationblackholes: {
      justifyContent: 'center',
      borderRadius: 25,
      height: 250,
      width: 370,
      resizeMode: 'cover',
      top: 10,
      padding: 20,
    },



  });

export default More;
