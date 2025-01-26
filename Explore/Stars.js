import React, {useState, useEffect, useRef} from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Pressable, Alert, Dimensions} from 'react-native';
import Constellation from '../assets/images/2979868e063e4833b5704556f2c63604.png'
import { useFonts } from 'expo-font';
import Tabs from '../app/Bottom_Tab';
import Icon from 'react-native-vector-icons/AntDesign';
import stars from '../assets/images/Star-types.jpg'
import Icon2 from 'react-native-vector-icons/SimpleLineIcons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import VTabs from '../Vertical_Tab';
import * as Speech from 'expo-speech';
import { responsiveFontSize, responsiveScreenHeight } from 'react-native-responsive-dimensions';
const { width, height } = Dimensions.get('window');

export default function Stars({navigation}){

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
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
const textToSpeak = `It is set that a very powerful explosion to place billions of year ago which resulted in the
formation of the Galaxy. Galaxy is contained dost gas and thousands of million of stars. These
Galaxies are gradually moving away from each other since the universe is constantly expanding.
On the clear night as we see the thousands of stars in the skies full top most of the stars we see
belong to our galaxy. Some of the little dots are in fact far bigger than the sun but we barely see
them because of the distance. Astronomic use powerful telescope to look into the universe of
the Galaxy they are closed 200 billion light-years away. It is because of this that what they see
today is in fact the light which left that Galaxy billion a year ago. At enormous are constantly
discovering more and more new Galaxy is each containing thousands of millions of new stars.
Galaxies can be classified into three times a regular spiral and Electricals The milky way is the
spiral galaxy in our Solar sun the middle sized star with the family of 9th planet is located in the
Galaxy is so big that the sun is only one of the hundred billion stars it has. The galaxies which
are the diameter of 100000 light years and the sun is located about 30,000 light-years from
its centre. It travel at a speed of 250 km per second and it take about 225 million a year to
complete one Revolution Around The Milky Way full stop and test have also discovered black
holes in universe observes have seen that whatever goes into the black hole is never sees again
full stop beside the observation work carried out by The Economist in the recent decade and
mad spacecraft that would have been sent into the space this script has send back in valuable
information to scientist on earth about plants like Mars Jupiter Uranus Neptune.`;
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
    <Image source={stars} style={styles.Solarimg}/>
    <Text style={styles.textmain}>
    Emit light and other forms of electromagnetic radiation, galaxies serve as beacons in the universe, allowing us to study their properties and the vast cosmos. This radiation spans the entire electromagnetic spectrum, from radio waves to gamma rays, and is crucial for astronomers to understand the various processes occurring within galaxies. The light from stars and other luminous objects within galaxies provides information about their composition, temperature, age, and motion. 
    </Text>
    <Text style={styles.textmain2}>
    It is set that a very powerful explosion to place billions of year ago which resulted in the
formation of the Galaxy. Galaxy is contained dost gas and thousands of million of stars. These
Galaxies are gradually moving away from each other since the universe is constantly expanding.
On the clear night as we see the thousands of stars in the skies full top most of the stars we see
belong to our galaxy. Some of the little dots are in fact far bigger than the sun but we barely see
them because of the distance. Astronomic use powerful telescope to look into the universe of
the Galaxy they are closed 200 billion light-years away. It is because of this that what they see
today is in fact the light which left that Galaxy billion a year ago. At enormous are constantly
discovering more and more new Galaxy is each containing thousands of millions of new stars.
Galaxies can be classified into three times a regular spiral and Electricals The milky way is the
spiral galaxy in our Solar sun the middle sized star with the family of 9th planet is located in the
Galaxy is so big that the sun is only one of the hundred billion stars it has. The galaxies which
are the diameter of 100000 light years and the sun is located about 30,000 light-years from
its centre. It travel at a speed of 250 km per second and it take about 225 million a year to
complete one Revolution Around The Milky Way full stop and test have also discovered black
holes in universe observes have seen that whatever goes into the black hole is never sees again
full stop beside the observation work carried out by The Economist in the recent decade and
mad spacecraft that would have been sent into the space this script has send back in valuable
information to scientist on earth about plants like Mars Jupiter Uranus Neptune.
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
