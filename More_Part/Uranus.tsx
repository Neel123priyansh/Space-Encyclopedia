import { Button, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useRef, useState} from 'react'
import { Canvas, useLoader, useFrame } from '@react-three/fiber/native'
import { PerspectiveCamera, PositionalAudio,Stars} from '@react-three/drei/native'
import { MeshStandardMaterial, TextureLoader,Mesh } from 'three';
import { useFonts } from 'expo-font';
import Card from '../Explore/Card';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
  responsiveHeight
} from "react-native-responsive-dimensions";
import * as Animatable from 'react-native-animatable';
import Svg, { Path, Text as SvgText, Defs, TextPath } from 'react-native-svg';

export default function Planets(){
  console.log('Loading texture from:', require('../assets/images/Venus.jpg'));
  const world = useLoader(TextureLoader, require('../assets/images/Uranus.jpg'))
  const meshRef = useRef(); 

  const [fontsLoaded] = useFonts({
    'Pro' : require('../assets/fonts/PROMETHEUS.ttf'),
    'Inter-Black': require('../assets/fonts/Quicksand-Regular.ttf'),
    'Spacemono': require('../assets/fonts/SpaceMono-Italic.ttf'),
    'Spacex' : require('../assets/fonts/SpaceGrotesk-Light.ttf'),
    'Cormorant': require('../assets/fonts/CormorantGaramond-MediumItalic.ttf'),
  })

  const SphereWithTexture = ({ texture, meshRef }) => {
    // useFrame can only be used inside the Canvas component
    useFrame(({ clock }) => {
      if (meshRef.current) {
        meshRef.current.rotation.y += 0.01; // Rotate around Y axis
      }
    });
    return (
      <perspectiveCamera position={[0 ,0 ,0]}>
      <mesh ref={meshRef} position={[0, 2 , 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={texture} />

      </mesh>
      </perspectiveCamera>
    );
  }
  return (
    
     <View style={styles.container}>
      <StatusBar hidden={true}/>
    <Canvas style={styles.canvas}>
      
    <ambientLight intensity={Math.PI / 2} />
    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
    <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <SphereWithTexture texture={world} meshRef={meshRef}  />
    </Canvas>
    <View style={styles.textContainer}>
    <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollContent}>

    <Text style={styles.textbold}>Distance from Sun</Text>
    <Text style={styles.text}>2.871 billion km</Text>
    <Text style={styles.textbold}>Age</Text>
    <Text style={styles.text}>4.5 billion years old</Text>
    <Text style={styles.textbold}>Atmosphric Compostion</Text>
    <Text style={styles.text}>Hydrogen{"\n"}Helium{"\n"}Methane{"\n"}Ammonia</Text>
    <Text style={styles.textbold}>Other Names</Text>
    <Text style={styles.text}>Ouranos{"\n"}Herschel{"\n"}Heavenly King Star</Text>
    </ScrollView>
    </View>
  </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  canvas: {
    width: '100%', 
    height: '100%',
    backgroundColor: '#121221',
    flex: 1
  },
  itemview : {
    width: '90%',
    height: responsiveHeight(15),
    backgroundColor: '#fff',
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
    borderRadius: 10,
  },
  textContainer: {
    position: 'absolute',
    top: '40%',
    width: '90%',
    height: '60%',
    alignItems: 'center',
    borderRadius: 15,
    alignSelf: 'center',
    textAlign: 'center',
    flex: 1,
    backgroundColor: 'rgba(220, 220, 220, 0.5)'
  },
  scrollContent: {
    flexGrow: 1,
  },
  text: {
    fontSize: responsiveScreenFontSize(4 ),
    fontFamily: 'Inter-Black',
    alignSelf: 'center',
    textAlign: 'center',
    position: 'relative',
    color: 'white'
  },
  textbold: {
    fontSize: responsiveScreenFontSize(4 ),
    fontFamily: 'Inter-Black',
    alignSelf: 'center',
    textAlign: 'center',
    position: 'relative',
    color: 'white',
    fontWeight: '800',
  },
  card:{
    width: responsiveScreenWidth(90),
    height: responsiveScreenHeight(45),
    position: 'absolute',
    backgroundColor: '#9494C7',
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', // Centered horizontally
    marginTop: '-14%',
  },
})