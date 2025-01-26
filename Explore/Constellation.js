import React, {useState, useEffect, useRef} from 'react';
import { View, Text, StyleSheet,Share, ScrollView, Image, Pressable, Alert, Dimensions} from 'react-native';
import Solar from '../assets/images/Solar_sys.jpg'
import Constellation from '../assets/images/2979868e063e4833b5704556f2c63604.png'
import { useFonts } from 'expo-font';
import Tabs from '../app/Bottom_Tab';
import Icon from 'react-native-vector-icons/AntDesign';
import Tts from 'react-native-tts';
import Icon2 from 'react-native-vector-icons/SimpleLineIcons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import VTabs from '../Vertical_Tab';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Speech from 'expo-speech';
import { responsiveFontSize, responsiveScreenHeight } from 'react-native-responsive-dimensions';
const { width, height } = Dimensions.get('window');


export default function Second({navigation}){

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

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
  const navigateToHomeScreen = () => {
    navigation.navigate('Main');
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
const textToSpeak = `Without the help of telescope we can see about 6000 stars sky at night half of these can be seen in the Northern Sky and and half is the southern Sky as we look at the star realise that we can form group of shapes among them this group and shapes mapped and classified by astronomers and given different names. The mapped and classified cluster of stars are called Constellation,  about 88 different constellation have been identified so far, out of these 45 were classified and named by Greek astronomers and the remaining have been classified in the modern times. All constellation are not visible every night, some are seen only during certain seasons or at a certain time in the night. some of the common known constellation are the zones which are used as Zodiac signs, others include the Ursa Minor, Urus Major, Polaris, Hydra etc.`;
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
  chunksRef.current = [];
  setCurrentChunkIndex(0);
};

  return (
    <View style={styles.container}>
    <ScrollView showsVerticalScrollIndicator={false}>
    <Image source={Constellation} style={styles.Solarimg}/>
    <Text style={styles.textmain}>
    Constellations are not fixed entities in space rather, they are patterns of stars as seen from Earth and can appear to shift over time due to the Earth's movement in its orbit and the motion of the stars themselves.
    </Text>
    <Text style={styles.textmain2}>
    Without the help of telescope we can see about 6000 stars sky at night half of these can be seen in the Northern Sky and and half is the southern Sky as we look at the star realise that we can form group of shapes among them this group and shapes mapped and classified by astronomers and given different names. The mapped and classified cluster of stars are called Constellation,  about 88 different constellation have been identified so far, out of these 45 were classified and named by Greek astronomers and the remaining have been classified in the modern times. All constellation are not visible every night, some are seen only during certain seasons or at a certain time in the night. some of the common known constellation are the zones which are used as Zodiac signs, others include the Ursa Minor, Urus Major, Polaris, Hydra etc.
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

