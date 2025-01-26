import React, {useState, useEffect, useRef} from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Pressable, Alert, Dimensions} from 'react-native';
import Constellation from '../assets/images/2979868e063e4833b5704556f2c63604.png'
import { useFonts } from 'expo-font';
import Tabs from '../app/Bottom_Tab';
import Icon from 'react-native-vector-icons/AntDesign';
import Nebula from '../assets/images/Carina_Nebula-1.png'
import Icon2 from 'react-native-vector-icons/SimpleLineIcons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import VTabs from '../Vertical_Tab';
import { responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import * as Speech from 'expo-speech';
const { width, height } = Dimensions.get('window');

export default function Second({navigation}) {

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
  const navigateToHomeScreen = () => {
    navigation.navigate('Main');
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
const textToSpeak = ` As we look in the night sky we see close to 3000 different stars. They seem small but they that is because of the distance, in reality there as big as our Sun, some even bigger. Stars are generally born in clusters and are formed from the thin cloud of hydrogen gas. As these clouds shrink, the hydrogen they contains gets compressed which increases the temperature and soon the gas become so hot that it began to glow, thus a star is born and It begin to emit light. As the star glow the hydrogen gets converted to Helium, this allow the star to give out heat. At the end of their life and their hydrogen is exhausted the stars explode forming what it is called a Supernova. Supernova are nothing but the wreckage of stars which continue to glow for some more time. The Crab Nebula is a supernova of the star which exploded and die Way back in time. Star formation and destruction is constantly ongoing process.`;
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
    <Image source={Nebula} style={styles.Solarimg}/>
    <Text style={styles.textmain}>
    The Methuselah star, designated HD 140283, is the oldest known star, with an estimated age of 14.46 billion years. This ancient star, located about 190 light-years away in the constellation Libra, has puzzled astronomers because its age appears to be older than the estimated age of the universe, which is approximately 13.8 billion years. This discrepancy has led to ongoing research and discussions in the scientific community to refine models of stellar evolution and the early universe.
    </Text>
    <Text style={styles.textmain2}>
    As we look in the night sky we see close to 3000 different stars. They seem small but they that is because of the distance, in reality there as big as our Sun, some even bigger. Stars are generally born in clusters and are formed from the thin cloud of hydrogen gas. As these clouds shrink, the hydrogen they contains gets compressed which increases the temperature and soon the gas become so hot that it began to glow, thus a star is born and It begin to emit light. As the star glow the hydrogen gets converted to Helium, this allow the star to give out heat. At the end of their life and their hydrogen is exhausted the stars explode forming what it is called a Supernova. Supernova are nothing but the wreckage of stars which continue to glow for some more time. The Crab Nebula is a supernova of the star which exploded and die Way back in time. Star formation and destruction is constantly ongoing process.
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
