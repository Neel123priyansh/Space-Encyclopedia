import React, {useState, useEffect, useRef} from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Pressable, Alert, Dimensions} from 'react-native';
import { useFonts } from 'expo-font';
import Tabs from '../app/Bottom_Tab';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/SimpleLineIcons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import VTabs from '../Vertical_Tab';
import * as Speech from 'expo-speech';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Blackholes from '../assets/images/IS-BH-1024x576-1.jpg';
import { responsiveFontSize, responsiveScreenHeight } from 'react-native-responsive-dimensions';
const { width, height } = Dimensions.get('window');

export default function Second({navigation}){

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const navigateToHomeScreen = () => {
    navigation.navigate('Main');
  };

  const Tab = createBottomTabNavigator();

  const handlePress = () => {
    Alert.alert('Image Pressed');
  };
  const ARhandlePress = () => {
    Alert.alert('AR PLANETS COMING SOON.');
  };
  
  const navigatetoplanets = () => {
    navigation.navigate('MorePl')
  }
  const navigatetosolar = () =>{
    navigation.navigate('Solar');
  };
  const buttonvertical = () => {
    setIsOpen(!isOpen);
  }

  const [fontsLoaded] = useFonts({'Spacee' : require('../assets/fonts/SpaceGrotesk-Medium.ttf')
});
const [isPaused, setIsPaused] = useState(false);
const [isStopped, setIsStopped] = useState(false);
const [currentChunkIndex, setCurrentChunkIndex] = useState(0);
const chunksRef = useRef([]);
const textToSpeak = `Black holes are one of the most fascinating and enigmatic objects in the universe. They are regions in space where the gravitational pull is so strong that nothing, not even light, can escape from them. The boundary surrounding a black hole is called the event horizon, beyond which nothing can return once crossed. Black holes form from the remnants of massive stars that have ended their life cycles, typically through supernova explosions. When a massive star exhausts its nuclear fuel, it can no longer support itself against gravitational collapse, leading to the formation of a black hole. These stellar black holes usually have masses ranging from a few to several tens of solar masses.
There are also supermassive black holes, which reside at the centers of most galaxies, including our Milky Way. These giants have masses equivalent to millions or even billions of suns. The exact mechanism of their formation is still a topic of active research, but they are thought to grow by accreting matter and merging with other black holes over cosmic timescales. Observational evidence of supermassive black holes includes the high-velocity motion of stars and gas clouds orbiting galactic centers and the powerful emissions from active galactic nuclei, which are believed to be powered by material falling into these black holes.
Another type of black hole is the intermediate-mass black hole, which falls between stellar and supermassive black holes in terms of mass. These black holes are harder to detect, but recent observations have provided evidence for their existence. For example, gravitational wave detectors like LIGO and Virgo have observed collisions between black holes of intermediate mass, shedding light on their properties and prevalence.
Black holes are also significant sources of gravitational waves—ripples in spacetime predicted by Albert Einstein's theory of general relativity. These waves are generated during events like the merger of black holes, and their detection has opened a new window for studying the universe. The first direct detection of gravitational waves in 2015 confirmed a key prediction of general relativity and marked the beginning of gravitational wave astronomy.
The study of black holes has profound implications for our understanding of physics, particularly in the realms of general relativity and quantum mechanics. At the event horizon, the known laws of physics break down, leading to singularities where densities become infinite. This challenges our current understanding and spurs ongoing research into quantum gravity, which seeks to unify general relativity and quantum mechanics.
The first-ever image of a black hole, released in 2019 by the Event Horizon Telescope collaboration, provided direct visual evidence of these mysterious objects. The image showed the shadow of the supermassive black hole at the center of the galaxy M87, surrounded by a bright ring of accreting matter. This groundbreaking achievement demonstrated the feasibility of imaging black holes and has inspired further observations and theoretical work.
Black holes also play a crucial role in shaping their host galaxies. They can regulate star formation and influence galactic evolution through powerful jets and winds emanating from their accretion disks. These feedback processes are essential for understanding the co-evolution of black holes and galaxies.`;
useEffect(() => {
  if (isPaused || isStopped) return;
  if (chunksRef.current.length > 0 && currentChunkIndex < chunksRef.current.length) {
    Speech.speak(chunksRef.current[currentChunkIndex], {
      language: 'en-US',
      pitch: 1,
      rate: 0.9,
      onDone: () => {
        setCurrentChunkIndex(prev => prev + 1);
      }
    });
  }
}, [currentChunkIndex, isPaused, isStopped]);

const splitTextIntoChunks = (text) => {
  const maxChunkLength = 100; // Define maximum length of each chunk
  const regex = new RegExp(`.{1,${maxChunkLength}}(\\s|$)`, 'g');
  return text.match(regex) || [];
};

const handleSpeak = () => {
  setIsStopped(false);
  const chunks = splitTextIntoChunks(textToSpeak);
  chunksRef.current = chunks;
  setCurrentChunkIndex(0);
};

const handlePause = () => {
  setIsPaused(true);
  Speech.stop();
};

const handleResume = () => {
  setIsPaused(false);
};

const handleStop = () => {
  setIsStopped(true);
  Speech.stop();
  setCurrentChunkIndex(0);
};

  return (
    <View style={styles.container}>
    <ScrollView showsVerticalScrollIndicator={false}>
    <Image source={Blackholes} style={styles.Solarimg}/>
    <Text style={styles.textmain}>
    In popular culture, black holes captivate the imagination, often portrayed as cosmic monsters or gateways to other dimensions. While some of these depictions are scientifically accurate, others are more speculative, highlighting the blend of science and fiction that black holes inspire.
    </Text>
    <Text style={styles.textmain2}>
    Black holes are one of the most fascinating and enigmatic objects in the universe. They are regions in space where the gravitational pull is so strong that nothing, not even light, can escape from them. The boundary surrounding a black hole is called the event horizon, beyond which nothing can return once crossed. Black holes form from the remnants of massive stars that have ended their life cycles, typically through supernova explosions. When a massive star exhausts its nuclear fuel, it can no longer support itself against gravitational collapse, leading to the formation of a black hole. These stellar black holes usually have masses ranging from a few to several tens of solar masses.

There are also supermassive black holes, which reside at the centers of most galaxies, including our Milky Way. These giants have masses equivalent to millions or even billions of suns. The exact mechanism of their formation is still a topic of active research, but they are thought to grow by accreting matter and merging with other black holes over cosmic timescales. Observational evidence of supermassive black holes includes the high-velocity motion of stars and gas clouds orbiting galactic centers and the powerful emissions from active galactic nuclei, which are believed to be powered by material falling into these black holes.

Another type of black hole is the intermediate-mass black hole, which falls between stellar and supermassive black holes in terms of mass. These black holes are harder to detect, but recent observations have provided evidence for their existence. For example, gravitational wave detectors like LIGO and Virgo have observed collisions between black holes of intermediate mass, shedding light on their properties and prevalence.

Black holes are also significant sources of gravitational waves—ripples in spacetime predicted by Albert Einstein's theory of general relativity. These waves are generated during events like the merger of black holes, and their detection has opened a new window for studying the universe. The first direct detection of gravitational waves in 2015 confirmed a key prediction of general relativity and marked the beginning of gravitational wave astronomy.

The study of black holes has profound implications for our understanding of physics, particularly in the realms of general relativity and quantum mechanics. At the event horizon, the known laws of physics break down, leading to singularities where densities become infinite. This challenges our current understanding and spurs ongoing research into quantum gravity, which seeks to unify general relativity and quantum mechanics.

The first-ever image of a black hole, released in 2019 by the Event Horizon Telescope collaboration, provided direct visual evidence of these mysterious objects. The image showed the shadow of the supermassive black hole at the center of the galaxy M87, surrounded by a bright ring of accreting matter. This groundbreaking achievement demonstrated the feasibility of imaging black holes and has inspired further observations and theoretical work.

Black holes also play a crucial role in shaping their host galaxies. They can regulate star formation and influence galactic evolution through powerful jets and winds emanating from their accretion disks. These feedback processes are essential for understanding the co-evolution of black holes and galaxies.
    </Text>
    </ScrollView>
    {isOpen && (
      <VTabs>
        <View style={styles.dropdownContent}>
          <TouchableOpacity onPress={handleSpeak}>
            <Icon2 name='volume-2' size={35}></Icon2>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleStop}>
            <Icon2 name='volume-off' size={35}></Icon2>
          </TouchableOpacity>
        </View>
        </VTabs>
      )}
    <Tabs style={styles.tab}>
    <TouchableOpacity onPress={toggleDropdown} style={styles.icon}>
    <Icon name='up' size={40}></Icon>
    </TouchableOpacity>
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
    backgroundColor: '#121221',
  },
  Solarimg: {
    justifyContent: 'center',
    height: responsiveScreenHeight(30),
    width: '100%',
    resizeMode: 'cover',
    marginBottom: '3%',
  },
  textmain: {
    textAlign: 'center',
    overflow: 'hidden',
    fontFamily: 'Spacee',
    color: '#9494C7',
    fontSize: responsiveFontSize(1.5),
    flexGrow: 1,
    flex: 1,
    justifyContent: 'flex-start'
  },
  textmain2: {
    textAlign: 'left',
    paddingLeft: '2%',
    overflow: 'hidden',
    fontSize: responsiveFontSize(2.5),
    fontFamily: 'Spacee',
    fontWeight:'300',
    flexGrow: 1,
    color: 'rgb(255 255 255)',
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 30,
    paddingBottom: 110,
  },
  tab: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    padding: -20,
  },
  
  icon: {
    borderRadius: 50,
    height: responsiveScreenHeight(5),
    width: 40,
  },

  dropdownContent: {
    justifyContent: 'space-evenly',
    flexDirection:'column',
    gap:20,
    borderRadius:40,
    paddingBottom: '5%',
    paddingLeft: '15%'
  }
  });

