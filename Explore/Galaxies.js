import React, {useState, useEffect, useRef} from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Pressable, Alert, Dimensions} from 'react-native';
import Solar from '../assets/images/Solar_sys.jpg'
import Constellation from '../assets/images/2979868e063e4833b5704556f2c63604.png'
import { useFonts } from 'expo-font';
import Tabs from '../app/Bottom_Tab';
import Icon from 'react-native-vector-icons/AntDesign';
import Galaxies from '../assets/images/37d30599eac845bd895b7b7086948d17.png'
import Icon2 from 'react-native-vector-icons/SimpleLineIcons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import VTabs from '../Vertical_Tab';
import * as Speech from 'expo-speech';
import { responsiveFontSize, responsiveScreenHeight } from 'react-native-responsive-dimensions';
const { width, height } = Dimensions.get('window');

export default function Second({navigation}){

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const ARhandlePress = () => {
    Alert.alert('AR PLANETS COMING SOON.');
  };
  
  const navigatetoplanets = () => {
    navigation.navigate('MorePl')
  };
  const navigateToHomeScreen = () => {
    navigation.navigate('Main');
  };
  const navigatetosolar = () =>{
    navigation.navigate('Solar');
  };
  const handlePress = () => {
    Alert.alert('Image Pressed');
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
const textToSpeak = ` It is estimated that the universe and its galaxies were formed some 15,000 million year ago due to a massive explosion. This Theory of the astronomers is known as 'Big Bang Theory'. Since the 'Big Bang' the galaxies have been moving away from each other and the universe has been constantly expanding Galaxies are large group of stars, dust and gases, old stars are constantly dying out and new ones are regularly been created from dust and gases. Galaxies don't look alike but can still be classified under three broad categories Elliptical, Irregular and Spherical. Elliptical types of Galaxy cannot create new stars because of the lack of the dust but the spiral and the irregular type have abundant resources to create a new stars. The Galaxy nearest to ours is about 1,50,000 light years away and the universe to so vast that it is not possible for us to estimate how many galaxies exist. `;
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
    <Image source={Galaxies} style={styles.Solarimg}/>
    <Text style={styles.textmain}>
    The galaxy rotates at an astonishing speed of about 270 kilometers per second (approximately 490,000 miles per hour) as measured at the Sun's location, roughly 27,000 light-years from the galactic center.
    </Text>
    <Text style={styles.textmain2}>
    It is estimated that the universe and its galaxies were formed some 15,000 million year ago due to a massive explosion. This Theory of the astronomers is known as 'Big Bang Theory'. Since the 'Big Bang' the galaxies have been moving away from each other and the universe has been constantly expanding Galaxies are large group of stars, dust and gases, old stars are constantly dying out and new ones are regularly been created from dust and gases. Galaxies don't look alike but can still be classified under three broad categories Elliptical, Irregular and Spherical. Elliptical types of Galaxy cannot create new stars because of the lack of the dust but the spiral and the irregular type have abundant resources to create a new stars. The Galaxy nearest to ours is about 1,50,000 light years away and the universe to so vast that it is not possible for us to estimate how many galaxies exist. 
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

